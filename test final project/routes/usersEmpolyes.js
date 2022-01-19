const express = require("express")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const checkToken = require("../middleware/checkToken")

const router = express.Router()
const { UserEmpolyee, signupJoi, loginJoi, EditprofileJoi } = require("../Model/UserEmpolyee")
const checkTokenBoss = require("../middleware/checkTokenBoss")

router.get("/usersEmpolyee", async (req, res) => {
  let usersEmpolyee = await UserEmpolyee.find().select("-password").populate({
    path: "requests",
    select: "-demander",
  })

  res.json(usersEmpolyee)
})

router.post("/signup", checkTokenBoss, async (req, res) => {
  try {
    const { firstName, lastName, department, email, password, avatar } = req.body
    const FoundPassword = signupJoi.validate(req.body)
    if (FoundPassword.error) return res.status(400).json(FoundPassword.error.details[0].message)
    const userFound = await UserEmpolyee.findOne({ email })
    if (userFound) return res.status(400).json("user allredy regester")

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = new UserEmpolyee({
      firstName,
      lastName,
      department,
      email,
      password: hash,
      avatar,
      role: "User",
    })
    await user.save()
    delete user._doc.password
    res.json(user)
  } catch (error) {
    res.status(500).json(error.message)
  }
})
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body
    const result = loginJoi.validate(req.body)
    if (result.error) return res.status(400).send(result.error.details[0].message).select("-password -__v")
    const user = await UserEmpolyee.findOne({ email })
    if (!user) return res.status(400).json("user not regester")
    const FoundPassword = await bcrypt.compare(password, user.password)
    if (!FoundPassword) return res.status(400).json("password is not corect")
    const Token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: "15d" })
    res.send(Token)
  } catch (error) {
    res.status(500).json(error.message)
  }
})

router.get("/profile", checkToken, async (req, res) => {
  try {
    const user = await UserEmpolyee.findById(req.userId)
      .select("-password -__v")
      .populate({
        path: "requests",
        select: "-demander",
        populate: {
          path: "taskDo",
          select: "-password",
        },
      })

    if (!user) return res.status(404).json("user not found")
    res.json(user)
  } catch (error) {
    res.status(500).json(error.message)
  }
})
router.put("/profile", checkToken, async (req, res) => {
  try {
    const { firstName, lastName, department, password, avatar } = req.body

    const result = EditprofileJoi.validate(req.body)
    if (result.error) return res.status(400).send(result.error.details[0].message)
    let hash
    if (password) {
      const salt = await bcrypt.genSalt(10)
      hash = await bcrypt.hash(password, salt)
    }
    const user = await UserEmpolyee.findByIdAndUpdate(
      req.userId,
      { $set: { firstName, lastName, password: hash, department, avatar } },
      { new: true }
    ).select("-__v-password")
    res.json(user)
  } catch (error) {
    console.log(error)
    res.status(500).json(error.message)
  }
})

module.exports = router
