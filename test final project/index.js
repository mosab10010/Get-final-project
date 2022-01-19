const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")
const { response } = require("express")
const Joi = require("joi")
const JoiObjectId=require("joi-objectid")
Joi.ObjectId = JoiObjectId(Joi)
const userEmpolyee = require("./routes/usersEmpolyes")
const userEmpolyeeIT = require("./routes/usersEmpolyesIT")
const userBoss = require("./routes/usersBoss")
const tasks = require("./routes/tasks")
const categorys = require("./routes/categorys")


require("dotenv").config()
mongoose.connect("mongodb://localhost:27017/TaskManagementsDB").then(() => {
  console.log("tha moongos is connect")
}).catch(error=>{
  console.log("this error is"+error)
})

const app=express()

app.use(express.json())
app.use(cors())
app.use("/api/auth",userEmpolyee)
app.use("/api/auth/it",userEmpolyeeIT)
app.use("/api/auth/it",userBoss)
app.use("/api/tasks",tasks)
app.use("/api/categorys",categorys)






app.listen(5000 , ()=>{
  console.log("the srver is coonect" , 5000)

})