import { Button, Row } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table, Col } from "react-bootstrap"
import TasksContext from "../utils/TasksContext"
import AddIcon from "@mui/icons-material/Add"
import TaskCell from "../components/TaskCell"
import SidebarUserIT from "../components/SidebarUserIT"
import TaskUserITCell from "../components/TaskUserITCell "
import TaskBossFroomUserITCell from "../components/TaskBossFroomUserITCell"
import logo from"../assets/logo for final project.png"


function TaskFromMangear(props) {
  const { profile, tasks } = useContext(TasksContext)

  const [show, setShow] = useState(false)
  if (!profile) return null
  const tasksFinished = profile.requestsBoss.filter(
    task => task.progress == "The request has been completed successfully"
  )
  const tasksNotFinished = profile.requestsBoss.filter(
    task => task.progress !== "The request has been completed successfully"
  )

  return (
    <>
      <SidebarUserIT />

     
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
        <Table bordered hover style={{ tableLayout: "fixed" }}>
          <thead>
            <tr>
              <th style={{ width: "9%" ,textAlign:"center" }}>ID</th>
              <th style={{ width: "18%" ,textAlign:"center" }}>Title</th>
              <th style={{ width: "30%",textAlign:"center" }}>Description</th>
              <th style={{ width: "20%" ,textAlign:"center" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasksNotFinished.map(requestBoss => (
              <TaskBossFroomUserITCell key={requestBoss._id} requestBoss={requestBoss} />
            ))}
          </tbody>
        </Table>
        <br />
        <br />
        <br />
        <br />
        <center>
          <h1>All Task finsh</h1>
        </center>

        <Table bordered hover style={{ tableLayout: "fixed" }}>
          <tr  >
            <th style={{ width: "9%" ,textAlign:"center" }}>ID</th>
            <th style={{ width: "18%" ,textAlign:"center" }}>Title</th>
            <th style={{ width: "30%" ,textAlign:"center" }}>Description</th>
            <th style={{ width: "36%" ,textAlign:"center" }}>Actions</th>
          </tr>
          <tbody>
            {tasksFinished.map(requestBoss => (
              <TaskBossFroomUserITCell key={requestBoss._id} requestBoss={requestBoss} />
            ))}
          </tbody>
        </Table>
      </div>
      </section>
    </>
  )
}

export default TaskFromMangear
