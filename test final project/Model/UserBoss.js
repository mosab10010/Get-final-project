const mongoose = require("mongoose")
const Joi = require("joi")

const userBossSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  department: String,
  email: String,
  password: String,
  avatar: String,
  
  role:{
    type:String,
    default:"SuperAdmin",

  },
  requestsBoss:[
    {
      type: mongoose.Types.ObjectId,
      ref: "TaskBoss",
    },
  ],
})

const signupJoi = Joi.object({
  firstName: Joi.string().min(2).max(100).required(),
  lastName: Joi.string().min(2).max(100).required(),
  department: Joi.string().min(2).max(100).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(2).max(100).required(),
  avatar: Joi.string().uri().min(2).max(1000).required(),
})
const loginJoi = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(2).max(100).required(),
})
const profileJoi = Joi.object({
  firstName: Joi.string().min(2).max(100),
  lastName: Joi.string().min(2).max(100),
  password: Joi.string().min(2).max(100),
  avatar: Joi.string().uri().min(2).max(1000),
  email: Joi.string().email(),

})
const EditprofileJoi = Joi.object({
  firstName: Joi.string().min(2).max(100),
  lastName: Joi.string().min(2).max(100),
  password: Joi.string().min(2).max(100),
  avatar: Joi.string().uri().min(2).max(1000),
})



const UserBoss = mongoose.model("UserBoss", userBossSchema)
module.exports.UserBoss = UserBoss
module.exports.signupJoi = signupJoi
module.exports.loginJoi = loginJoi
module.exports.profileJoi = profileJoi
module.exports.EditprofileJoi=EditprofileJoi
