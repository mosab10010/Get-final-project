const jwt = require("jsonwebtoken")
const { UserEmpolyeeIT } = require("../Model/UserEmpolyeeIT")

const checkSubUser = async (req, res, next) => {
  const token = req.header("Authorization")
  if (!token) return res.status(401).json("token is required")
  const decryptedToken = jwt.verify(token, process.env.JWT_SECRET_KEY)
  const userId = decryptedToken.id

  const adminFound = await UserEmpolyeeIT.findById(userId)

  if (!adminFound) return res.status(404).json("user not found")

  if (adminFound.role !== "SubUser") return res.status(403).send("you are not it user")

  next()
}

module.exports = checkSubUser
