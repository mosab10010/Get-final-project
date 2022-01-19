import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import TasksContext from "../utils/TasksContext"
import AddIcon from "@mui/icons-material/Add"
import TaskCell from "../components/TaskCell"
import BossTaskCell from "../components/BossTaskCell"
import TaskAddModal from "../components/TaskAddModel"
import Home from "./HomeBoss"
import Sidebar from "../components/Sidebar"
import logo from"../assets/logo for final project.png"


function BossTasks() {
  const { bosstasks , users} = useContext(TasksContext)
  const [show, setShow] = useState(false)
  return (
    <>
      
     <Sidebar/>
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

          <h1 style={{fontFamily:"monospace" ,}}>Administration tasks</h1>
          </div>
        </center>
     <Button style={{marginLeft: "850px", marginTop:"1px" }} onClick={() => setShow(true)} variant="outline-primary">
          <AddIcon />
          Add Task
        </Button>
     <div>
        </div>
     <Table   striped bordered hover size="sm"  style={{ tableLayout: "fixed",backgroundColor: "#F1F6F9", textAlign: "center" , width:"100%" }}>
          <thead>
            <tr>
              <th style={{ width: "10%" }}>Title</th>
              <th style={{ width: "30%" }}>Description</th>
              <th style={{ width: "30%" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
          {bosstasks.map(bosstask => (
            <BossTaskCell key={bosstask._id}  bosstask={bosstask} users={users}/>

            // <Home key={bosstask._id}  bosstask={bosstask} users={users}/>



            ))}
            
            </tbody>
        </Table>
      <TaskAddModal show={show} setShow={setShow} />
      </div>
    </section>
    </>
  )
}

export default BossTasks
