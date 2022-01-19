import { Button, Row } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table, Col } from "react-bootstrap"
import TasksContext from "../utils/TasksContext"
import AddIcon from "@mui/icons-material/Add"
import TaskCell from "../components/TaskCell"
import Sidebar from "../components/Sidebar"
import logo from"../assets/logo for final project.png"

function Tasks() {
  const { tasks, users } = useContext(TasksContext)
  const [show, setShow] = useState(false)
  const tasksFinished = tasks.filter(task => task.progress == "The request has been completed successfully")
  const tasksNotFinished = tasks.filter(task => task.progress !== "The request has been completed successfully")

  return (
    <>
      <Sidebar />

          <section >
      <div>
       <img style={{width:"200px" , position:"absolute" , bottom:"490px"}} src={logo}/>
        <center>
       
       <div >
           <div style={{ backgroundColor: "#F8F8FF" }}>
             <h1 style={{ color: "black" }}>service Disk</h1>
             <p style={{ color: "black" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
           </div>
           </div>
          <div >

          <h1 style={{fontFamily:"monospace" ,}}>All Task not finsh</h1>
          </div>
        </center>
        <center>
        <Table striped bordered hover style={{tableLayout: "fixed", marginLeft: "10px", backgroundColor: "#F1F6F9", textAlign: "center" }}>
          <thead>
            <tr style={{ backgroundColor: "#14274E", color: "white" }}>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th>department</th>
              <th>category</th>
              <th style={{width:"30%"}} >Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasksNotFinished.map(task => (
              <TaskCell key={task._id} task={task} users={users} />
            ))}
          </tbody>
        </Table>
          </center>
        <br />
        <br />
        <br />
        <br />
        <center>
          <h1>All Task finsh</h1>
        </center>
        <Table bordered variant="grey" style={{ marginLeft: "10px", backgroundColor: "#F1F6F9", textAlign: "center" }}>
          <thead>
            <tr style={{ backgroundColor: "#14274E", color: "white", textAlign: "center" }}>
              <th>ID</th>

              <th>Title</th>
              <th>Description</th>
              <th>department</th>
              <th>category</th>
              <th >Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasksFinished.map(task => (
              <TaskCell key={task._id} task={task} users={users} />
            ))}
          </tbody>
        </Table>
      </div>
        </section>
    </>
  )
}

export default Tasks
