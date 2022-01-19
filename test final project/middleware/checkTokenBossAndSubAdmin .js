const jwt = require("jsonwebtoken")
const { UserBoss } = require("../Model/UserBoss")
const { UserEmpolyeeIT } = require("../Model/UserEmpolyeeIT")

const checkTokenBossAndSubAdmin = async (req, res, next) => {
  try {
    const token = req.header("Authorization")
    if (!token) return res.status(401).json("token is required")
    const decryptedToken = jwt.verify(token, process.env.JWT_SECRET_KEY)
    const userId = decryptedToken.id
    const userAdmin = await UserBoss.findById(userId)
    const SubAdmin = await UserEmpolyeeIT.findById(userId)
    
    if (!SubAdmin && !userAdmin) return res.status(403).json("Authorization actions")

    req.userId = userId
    next()
  } catch (error) {
    return res.status(500).json(error.message)
  }
}

module.exports = checkTokenBossAndSubAdmin
