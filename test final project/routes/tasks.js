const express = require("express")
const CheckId = require("../middleware/checkId")
const checkToken = require("../middleware/checkToken")
const checkTokenBoss = require("../middleware/checkTokenBoss")
const checkTokenBossAndSubAdmin = require("../middleware/checkTokenBossAndSubAdmin ")
const validateBody = require("../middleware/validateBody")
const validateId = require("../middleware/validateId")
const nodemailer = require("nodemailer")
const router = express.Router()
const { Task, AddTaskJoi, EdtTaskJoi, progressTask, TaskBoss, CompletionRrate , priorityTask } = require("../Model/Task")
const { UserBoss } = require("../Model/UserBoss")
const { UserEmpolyee } = require("../Model/UserEmpolyee")
const { UserEmpolyeeIT } = require("../Model/UserEmpolyeeIT")
const { Category } = require("../Model/Category")

router.get("/Alltasks", async (req, res) => {
  let tasks = await Task.find()
    .populate({
      path: "demander",
      select: "-password",
    })

    .populate({
      path: "category",
    })

  res.json(tasks)
})
router.get("/Alltasks/BossIT", async (req, res) => {
  let tasks = await TaskBoss.find()
    .populate({
      path: "demanderIT",
      select: "-password",
    })
    .populate("category")

  res.json(tasks)
})
router.put("/:id", checkTokenBossAndSubAdmin, CheckId, validateBody(progressTask), async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).populate({
      path: "demander",
      populate: {
        path: "requests",
      },
    })

    const progSend = task.progress
    // console.log(progSend.lastName)
    //  console.log(progSend.firstName)

    if (!task) return res.status(404).send("The task not Found")
    const findDemnder = await UserEmpolyeeIT.findById(req.userId)

    const { progress } = req.body
    const newProgress = await Task.findByIdAndUpdate(
      req.params.id,
      { $set: { progress: progress, updateDate: Date.now() } },
      { new: true }
    )
    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 587,
      secure: false,
      auth: {
        user: "testtesrt54@gmail.com",
        pass: "Mosab123",
      },
    })

    await transporter.sendMail({
      from: `Dear <strong>  ${task.demander.firstName} ${task.demander.lastName}   the order status has been changed `, // sender address
      to: task.demander.email, // list of receivers
      subject: "A task has been added for you", // Subject line

      html: ` Dear <strong>(${task.demander.firstName} ${task.demander.lastName})</strong> , a service request has been submitted, the status of the request has been changed to <strong> ${task.progress}</strong> Please see the website`, // html body
    })
    res.json(newProgress)
  } catch (error) {
    console.log(error)
    res.status(500).send(error.message)
  }
})
router.put("/rate/:id", checkTokenBossAndSubAdmin, CheckId, validateBody(CompletionRrate), async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).populate({
      path: "demander",
      populate: {
        path: "requests",
      },
    })

    const progSend = task.CompletionRrate
    // console.log(progSend.lastName)
    //  console.log(progSend.firstName)

    if (!task) return res.status(404).send("The task not Found")
    const findDemnder = await UserEmpolyeeIT.findById(req.userId)

    const { CompletionRrate } = req.body
    const newCompletionRrate = await Task.findByIdAndUpdate(
      req.params.id,
      { $set: { CompletionRrate: CompletionRrate, updateDate: Date.now() } },
      { new: true }
    )
    res.json(newCompletionRrate)
  } catch (error) {
    console.log(error)
    res.status(500).send(error.message)
  }
})

router.put("/priority/:id", checkTokenBossAndSubAdmin, CheckId, validateBody(priorityTask), async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).populate({
      path: "demander",
      populate: {
        path: "requests",
      },
    })

    const progSend = task.priority
    // console.log(progSend.lastName)
    //  console.log(progSend.firstName)

    if (!task) return res.status(404).send("The task not Found")
    const findDemnder = await UserEmpolyeeIT.findById(req.userId)

    const { priority } = req.body
    const newpriority = await Task.findByIdAndUpdate(
      req.params.id,
      { $set: { priority: priority, updateDate: Date.now() } },
      { new: true }
    )
    res.json(newpriority)
  } catch (error) {
    console.log(error)
    res.status(500).send(error.message)
  }
})
router.put("/Boss/:id", checkTokenBossAndSubAdmin, CheckId, validateBody(progressTask), async (req, res) => {
  try {
    const task = await TaskBoss.findById(req.params.id).populate({
      path: "demanderIT",
      populate: {
        path: "requestsBoss",
      },
    })

    const progSend = task.progress
    // console.log(progSend.lastName)
    //  console.log(progSend.firstName)

    if (!task) return res.status(404).send("The task not Found")
    const findDemnder = await UserEmpolyeeIT.findById(req.userId)

    const { progress } = req.body
    const newProgress = await TaskBoss.findByIdAndUpdate(
      req.params.id,
      { $set: { progress: progress, updateDate: Date.now() } },
      { new: true }
    )
    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 587,
      secure: false,
      auth: {
        user: "testtesrt54@gmail.com",
        pass: "Mosab123",
      },
    })

    await transporter.sendMail({
      from: `Dear <strong>  ${task.demanderIT.firstName} ${task.demanderIT.lastName}   the order status has been changed `, // sender address
      to: task.demanderIT.email, // list of receivers
      subject: "A task has been added for you", // Subject line

      html: ` Dear <strong>(${task.demanderIT.firstName} ${task.demanderIT.lastName})</strong> , a service request has been submitted, the status of the request has been changed to <strong> ${task.progress}</strong> Please see the website`, // html body
    })
    res.json(newProgress)
  } catch (error) {
    console.log(error)
    res.status(500).send(error.message)
  }
})

router.post("/NewTask", checkToken, validateBody(AddTaskJoi), async (req, res) => {
  try {
    const { title, decscription, department, category } = req.body
    const tasks = await Task.find()

    const task = new Task({
      title,
      decscription,
      department,
      demander: req.userId,
      category,
      taskNumber: tasks.length + 1,
    })

    await UserEmpolyee.findByIdAndUpdate(req.userId, { $push: { requests: task._id } })
    await Category.findByIdAndUpdate(req.userId, { $push: { category: task._id } })

    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 587,
      secure: false,
      auth: {
        user: "testtesrt54@gmail.com",
        pass: "Mosab123",
      },
    })

    await transporter.sendMail({
      from: '"The IT department have new Task from other department " <admin@admin.com>', // sender address
      to: "mosab.10010@gmail.com", // list of receivers
      subject: "A task has been added for you", // Subject line

      html: `Please Empolyes send new requst pless revew the tesk and send in the user it.`, // html body
    })
    await task.save()
    res.json(task)
    console.log(error)
  } catch (error) {
    console.log(error)
    res.status(500).send(error.message)
  }
})
router.post("/NewTask/BossIT", checkTokenBoss, validateBody(AddTaskJoi), async (req, res) => {
  try {
    const { title, decscription, category } = req.body
    const tasks = await TaskBoss.find()

    const task = new TaskBoss({
      title,
      decscription,
      demanderIT: req.userId,
      taskNumber: tasks.length + 1,
      category,
    })

    await UserBoss.findByIdAndUpdate(req.userId, { $push: { requestsBoss: task._id } })

    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 587,
      secure: false,
      auth: {
        user: "testtesrt54@gmail.com",
        pass: "Mosab123",
      },
    })

    await transporter.sendMail({
      from: '"There is a new task for the technical support team " <admin@admin.com>', // sender address
      to: "mosab.10010@gmail.com", // list of receivers
      subject: "A task has been added for you", // Subject line

      html: `There is a new task for the IT team, please transfer it to one of the IT employees.`, // html body
    })
    await task.save()
    res.json(task)
  } catch (error) {
    console.log(error)
    res.status(500).send(error.message)
  }
})

router.get("/:taskId/:empolyeIT", checkTokenBoss, validateId("taskId", "empolyeIT"), async (req, res) => {
  try {
    const task = await Task.findById(req.params.taskId)
    if (!task) return res.status(404).send("The task not Found")

    const user = await UserEmpolyeeIT.findById(req.params.empolyeIT)

    if (!user) return res.status(404).send("The user not Found")
    const checkReq = user.requests

    // console.log(task)
    // return console.log(checkReq)

    const sendReq = await UserEmpolyeeIT.findByIdAndUpdate(
      req.params.empolyeIT,
      { $addToSet: { requests: req.params.taskId } },
      { new: true }
    )

    await Task.findByIdAndUpdate(req.params.taskId, { $set: { taskDo: req.params.empolyeIT } }, { new: true })

    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 587,
      secure: false,
      auth: {
        user: "testtesrt54@gmail.com",
        pass: "Mosab123",
      },
    })

    await transporter.sendMail({
      from: '"new task for you " <admin@admin.com>', // sender address
      to: sendReq.email, // list of receivers
      subject: "A task has been added for you", // Subject line

      html: `Please complete the tasks assigned to you as soon as possible.`, // html body
    })
    res.json(sendReq)
  } catch (error) {
    console.log(error)
    res.status(500).send(error.message)
  }
})

router.get("/boss/:taskId/:empolyeIT", checkTokenBoss, validateId("taskId", "empolyeIT"), async (req, res) => {
  try {
    const task = await TaskBoss.findById(req.params.taskId)
    if (!task) return res.status(404).send("The task not Found")

    const user = await UserEmpolyeeIT.findById(req.params.empolyeIT)

    if (!user) return res.status(404).send("The user not Found")
    const checkReq = user.requestsBoss

    // console.log(task)
    // return console.log(checkReq)

    const sendReq = await UserEmpolyeeIT.findByIdAndUpdate(
      req.params.empolyeIT,
      { $addToSet: { requestsBoss: req.params.taskId } },
      { new: true }
    )

    await TaskBoss.findByIdAndUpdate(req.params.taskId, { $set: { taskDo: req.params.empolyeIT } }, { new: true })

    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 587,
      secure: false,
      auth: {
        user: "testtesrt54@gmail.com",
        pass: "Mosab123",
      },
    })

    await transporter.sendMail({
      from: '"new task for you " <admin@admin.com>', // sender address
      to: sendReq.email, // list of receivers
      subject: "A task has been added for you", // Subject line

      html: `Please complete the tasks assigned to you as soon as possible.`, // html body
    })
    res.json(sendReq)
  } catch (error) {
    console.log(error)
    res.status(500).send(error.message)
  }
})

router.delete("/:id", checkToken, CheckId, async (req, res) => {
  try {
    await Task.findById(req.params.id)
    const task = await Task.findById(req.params.id)
    if (!task) return res.status(404).json("task not found not found")

    if (!req.admin && req.userId != task.demander) return res.status(404).json("you are not send task")

    await UserEmpolyeeIT.updateMany({ $in: { requests: task._id } }, { $pull: { requests: task._id } })

    await task.remove()

    res.json("task is  removed")
  } catch (error) {
    console.log(error)
    res.status(500).send(error.message)
  }
})
module.exports = router
