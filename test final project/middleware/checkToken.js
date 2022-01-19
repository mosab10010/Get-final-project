const jwt = require("jsonwebtoken")
const { UserBoss } = require("../Model/UserBoss")
const { UserEmpolyee } = require("../Model/UserEmpolyee")

const checkToken = async (req, res, next) => {
  try {
    const token = req.header("Authorization")
    if (!token) return res.status(401).json("token is required")
    const decryptedToken = jwt.verify(token, process.env.JWT_SECRET_KEY)
    const userId = decryptedToken.id
    const userAdmin = await UserBoss.findById(userId)

    const user = await UserEmpolyee.findById(userId)

    if (!user && !userAdmin) return res.status(403).json("Authorization actions")

    req.userId = userId
    if (userAdmin) req.admin = true
    next()
  } catch (error) {
    return res.status(500).json(error.message)
  }
}

module.exports = checkToken
