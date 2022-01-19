const mongoose = require("mongoose")
const Joi = require("joi")

const categorySchema = new mongoose.Schema({
  name: String,
  decscription: String,
  post: String,
  type:{
    type:String,
    enum:["empolyee","empolyeeBoss"],
    default:"empolyee"

  }


})

const categoryJoi=Joi.object({
    name: Joi.string().min(3).max(1000).required(),
    decscription: Joi.string().min(2).max(100).required(),
    post: Joi.string().uri().min(2).max(1000).required(),
    type:Joi.string().valid("empolyee","empolyeeBoss"),

})

const Category = mongoose.model("Category",categorySchema)

module.exports.Category=Category
module.exports.categoryJoi=categoryJoi