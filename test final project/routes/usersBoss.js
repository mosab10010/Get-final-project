const checkSubUser = require("../middleware/checkSubUser")
const express = require("express")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const checkTokenBoss = require("../middleware/checkTokenBoss")

const checkToken = require("../middleware/checkToken")
const router = express.Router()

const { UserBoss, signupJoi, loginJoi, EditprofileJoi } = require("../Model/UserBoss")
const { UserEmpolyee } = require("../Model/UserEmpolyee")
const { UserEmpolyeeIT } = require("../Model/UserEmpolyeeIT")
const checkTokenBossAndSubAdmin = require("../middleware/checkTokenBossAndSubAdmin ")
const CheckId = require("../middleware/checkId")
const { Task, TaskBoss } = require("../Model/Task")

router.get("/usersBoss", async (req, res) => {
  let userBoss = await UserBoss.find()

  res.json(userBoss)
})

router.post("/singUpBoss", async (req, res) => {
  try {
    const { firstName, lastName, department, email, password, avatar } = req.body
    const FoundPassword = signupJoi.validate(req.body)
    if (FoundPassword.error) return res.status(400).json(FoundPassword.error.details[0].message)
    const userFound = await UserBoss.findOne({ email })
    if (userFound) return res.status(400).json("user allredy regester")

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = new UserBoss({
      firstName,
      lastName,
      department,
      email,
      password: hash,
      avatar,
      role: "SuperAdmin",
    })
    await user.save()
    res.json(user)
  } catch (error) {
    console.log(error)
    res.status(500).json(error.message)
  }
})
router.post("/login/", async (req, res) => {
  try {
    const { email, password } = req.body
    const result = loginJoi.validate(req.body)
    if (result.error) return res.status(400).send(result.error.details[0].message)
    const userBoss = await UserBoss.findOne({ email })
    const userIT = await UserEmpolyeeIT.findOne({ email })
    if (!userBoss && !userIT) return res.status(400).json("user not regester")
    const user = userBoss || userIT
    const FoundPassword = await bcrypt.compare(password, user.password)
    if (!FoundPassword) return res.status(400).json("password is not corect")
    const Token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: "15d" })
    res.send(Token)
  } catch (error) {
    res.status(500).json(error.message)
  }
})
router.get("/profile", checkTokenBossAndSubAdmin, async (req, res) => {
  try {
    const user = await UserBoss.findById(req.userId).select("-password -__v").populate("requestsBoss")
    const userIT = await UserEmpolyeeIT.findById(req.userId)
      .select("-password -__v")
      .populate({
        path: "requests",
        populate: {
          path: "demander",
          select: "-requests",
        },
      })
      .populate({
        path: "requests",
        populate: {
          path: "category",
        },
      })
      .populate({
        path: "requestsBoss",
        populate: {
          path: "demanderIT",
          select: "-password",
        },
        
       
      })
      .populate({
        path: "requestsBoss",
        populate: {
          path: "category",
        },
        
       
      })

      


    if (!user && !userIT) return res.status(404).json("user not found")
    res.json(user || userIT)
  } catch (error) {
    res.status(500).json(error.message)
  }
})
// router.delete("/users/:id", checkTokenBoss, async (req, res) => {
//   try {
//     const users = await UserEmpolyee.findById(req.params.id)
//     if (!users) return res.status(404).json("user not found")
//     if (users.role === "Admin") return res.status(400).json("unAuthorization action")
//     await UserEmpolyee.findByIdAndDelete(users)
//     res.json("user removed")
//   } catch (error) {
//     res.status(500).send(error.message)
//   }
// })
router.put("/profile", checkTokenBoss, async (req, res) => {
  try {
    const { firstName, lastName, department, password, avatar } = req.body

    const result = EditprofileJoi.validate(req.body)
    if (result.error) return res.status(400).send(result.error.details[0].message)
    let hash
    if (password) {
      const salt = await bcrypt.genSalt(10)
      hash = await bcrypt.hash(password, salt)
    }
    const user = await UserBoss.findByIdAndUpdate(
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
router.delete("/:id", checkTokenBoss, CheckId, async (req, res) => {
  try {
    await TaskBoss.findById(req.params.id)
    const task = await TaskBoss.findById(req.params.id)
    if (!task) return res.status(404).json("task not found not found")

    await UserEmpolyeeIT.updateMany({ $in: { requestsBoss: task._id } }, { $pull: { requestsBoss: task._id } })

    await task.remove()

    res.json("task is  removed")
  } catch (error) {
    console.log(error)
    res.status(500).send(error.message)
  }
})

router.delete("/userIT/:id", checkTokenBoss, CheckId, async (req, res) => {
  try {
    await Task.deleteMany({ taskId: req.params.id })
    const user = await UserEmpolyeeIT.findById(req.params.id)
    await user.remove()

    res.json("user is  removed")
  } catch (error) {
    console.log(error)
    res.status(500).send(error.message)
  }
})

module.exports = router
