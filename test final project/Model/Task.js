const mongoose = require("mongoose")
const Joi = require("joi")

const TaskSchema = new mongoose.Schema({
  taskNumber: {
    type: Number,
  },
  title: String,
  decscription: String,
  department: String,
  createdDate: {
    type: Date,
    default: Date.now,
  },
  updateDate: {
    type: Date,
    default: Date.now,
  },
  demander: {
    type: mongoose.Types.ObjectId,
    ref: "UserEmpolyee",
  },

  progress: {
    type: String,
    enum: [
      "request sent",
      "The request is under review",
      "The request has been completed successfully",
      "Sorry, the request cannot be processed",
    ],
    default: "request sent",
  },

  priority: {
    type: String,
    enum: ["Low", "Normal", "Urgent"],
    default: "Normal",
  },
  CompletionRrate: {
    type: String,
    enum: ["0%", "20%", "40%", "70%", "90%", "100%"],
    default: "0%",
  },

  taskDo: {
    type: mongoose.Types.ObjectId,
    ref: "UserEmpolyeeIT",
  },

  category: {
    type: mongoose.Types.ObjectId,
    ref: "Category",
  },
})
const TaskBossSchema = new mongoose.Schema({
  taskNumber: {
    type: Number,
  },
  title: String,
  decscription: String,
  createdDate: {
    type: Date,
    default: Date.now,
  },
  updateDate: {
    type: Date,
    default: Date.now,
  },
  demanderIT: {
    type: mongoose.Types.ObjectId,
    ref: "UserBoss",
  },

  progress: {
    type: String,
    enum: [
      "request sent",
      "The request is under review",
      "The request has been completed successfully",
      "Sorry, the request cannot be processed",
    ],
    default: "request sent",
  },
  CompletionRrate: {
    type: String,
    enum: ["0%", "20%", "40%", "70%", "90%", "100%"],
  },

  category: {
    type: mongoose.Types.ObjectId,
    ref: "Category",
  },

  taskDo: {
    type: mongoose.Types.ObjectId,
    ref: "UserEmpolyeeIT",
  },
})
const progressTask = Joi.object({
  progress: Joi.string().valid(
    "request sent",
    "The request is under review",
    "The request has been completed successfully",
    "Sorry, the request cannot be processed"
  ),
})
const priorityTask = Joi.object({
  priority: Joi.string().valid("Low", "Normal", "Urgent"),
})

const CompletionRrate = Joi.object({
  CompletionRrate: Joi.string().valid("0%", "20%", "40%", "70%", "90%", "100%"),
})
const AddTaskJoi = Joi.object({
  title: Joi.string().min(2).max(100).required().required(),
  decscription: Joi.string().min(2).max(100).required().required(),
  department: Joi.string().min(2).max(100),
  category: Joi.string().min(1).required(),
})
const EdtTaskJoi = Joi.object({
  title: Joi.string().min(2).max(100).required(),
  decscription: Joi.string().min(2).max(100).required(),
  department: Joi.string().min(2).max(100).required(),
  category: Joi.array().items(Joi.ObjectId()).min(1).required(),
})

const Task = mongoose.model("Task", TaskSchema)
const TaskBoss = mongoose.model("TaskBoss", TaskBossSchema)
module.exports.Task = Task
module.exports.TaskBoss = TaskBoss
module.exports.AddTaskJoi = AddTaskJoi
module.exports.EdtTaskJoi = EdtTaskJoi
module.exports.progressTask = progressTask
module.exports.CompletionRrate = CompletionRrate
module.exports.priorityTask = priorityTask
