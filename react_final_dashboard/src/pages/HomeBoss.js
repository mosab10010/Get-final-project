import * as React from "react"
import TaskIcon from "@mui/icons-material/Task"
import { useContext } from "react"
import { Button, Card, Table } from "react-bootstrap"
import TasksContext from "../utils/TasksContext"
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn"
import AssignmentLateIcon from "@mui/icons-material/AssignmentLate"
import WorkIcon from "@mui/icons-material/Work"
import LowPriorityIcon from "@mui/icons-material/LowPriority"
import Sidebar from "../components/Sidebar"
import imag from "../assets/pexels-lucas-pezeta-2398354.jpg"
import logo from"../assets/logo for final project.png"


import "../style.css"

function HomeBoss(props) {
  const { profile, bosstasks, users, task } = useContext(TasksContext)
  const { tasks } = useContext(TasksContext)
  // if (!profile) return <h1>loding</h1>
  const tasksNotFinished = tasks.filter(task => task.progress !== "The request has been completed successfully")
  const tasksFinished = tasks.filter(task => task.progress == "The request has been completed successfully")

  return (
    <>
      <Sidebar />

      <section id="content">
       
        <div class="content">
        <img style={{width:"200px" , position:"absolute" , bottom:"480px"}} src={logo}/>
          <center>
            <div style={{ backgroundColor: "white" }} class="content-header">
              <h1 style={{ color: "black" }}>service Disk</h1>
              <p style={{ color: "black" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </center>
          <div class="widget-box sample-widget">
            <div class="widget-header">
              <center>
                <h2>Tasks</h2>
              </center>

              <i class="fa fa-cog"></i>
            </div>
            <div class="widget-content">
              <center>
                <WorkIcon sx={{ fontSize: 150 }} />
                <span style={{ fontFamily: "serif", fontSize: "20px" }}>All Tasks</span>
                <span style={{ color: "black", fontSize: "20px" }}> ( {tasks.length} )</span>
              </center>
            </div>
          </div>
          <div class="widget-box sample-widget">
            <center>
              <div class="widget-header">
                <h2>Administration tasks </h2>
                <i class="fa fa-cog"></i>
              </div>
            </center>
            <center>
              <div class="widget-content">
                <LowPriorityIcon sx={{ fontSize: 150 }} />
                <span style={{ fontFamily: "serif", fontSize: "20px" }}>
                  Administration <span style={{ fontSize: "20px" }}>({bosstasks.length})</span>
                </span>
              </div>
            </center>
          </div>
          <div class="widget-box sample-widget">
            <center>
              <div class="widget-header">
                <h2>Completed</h2>
                <i class="fa fa-cog"></i>
              </div>
            </center>
            <center>
              <div class="widget-content">
                <AssignmentTurnedInIcon sx={{ fontSize: 150 }} />
                <span style={{ fontFamily: "serif" }} />
                Completed <span style={{ fontSize: "20px" }}>({tasksFinished.length})</span>
              </div>
            </center>
          </div>
          <div class="widget-box sample-widget">
            <center>
              <div class="widget-header">
                <h2>Processing</h2>
                <i class="fa fa-cog"></i>
              </div>
            </center>

            <center>
              <div class="widget-content">
                <AssignmentLateIcon sx={{ fontSize: 150 }} />
                <span style={{ fontFamily: "serif" }} />
                Processing <span style={{ fontSize: "20px" }}>({tasksNotFinished.length})</span>
              </div>
            </center>
          </div>
        </div>

        <div class="content">
          <center>
            <div style={{ backgroundColor: "#F7F7F7" }} class="content-header">
              <h1>All User IT</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </center>
          <center>
            <Table bordered style={{ marginLeft: "10px", marginBottom: "50px" }}>
              <thead>
                <tr>
                  <td style={{width:"7%"}}> id</td>
                  <td style={{width:"20%"}}>First Name</td>
                  <td style={{width:"20%"}}>Last Name</td>
                  <td>Photo</td>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr style={{ backgroundColor: "#14274E", color: "white" }}>
                    <th>{user._id}</th>
                    <th> {user.firstName}</th>
                    <th>{user.lastName}</th>
                    <th>
                      <img class="rounded-circle" width={50} src={user.avatar} data-holder-rendered="true"></img>
                    </th>
                  </tr>
                ))}
              </tbody>
            </Table>
          </center>
          {/* {users.map(user => (
            <>
              <div >
                <div class="widget-header">
                  <h2>
                    {user.firstName} {user.lastName}{" "}
                  </h2>
                  <i class="fa fa-cog"></i>
                </div>
                <div class="widget-content">
                  <img class="rounded-circle" width={90} src={user.avatar} data-holder-rendered="true"></img>
                  <span style={{ fontFamily: "serif" }}>
                    All Task from manger <span style={{ color: "red" }}>({bosstasks.length})</span>
                  </span>
                </div>
              </div>
            </>
          ))}*/}
        </div>
      </section>

      {/*      
<Card className="text-center" style={{marginTop:"200px",marginLeft:"50px"}}>
  <Card.Header>All employee requests</Card.Header>
  <Card.Body>
  <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/1935/1935389.png" />
    <Card.Title> <TaskIcon/>{tasks.length}</Card.Title>
    <Card.Text>
       
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
   
  </Card.Body>
  <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card> */}
    </>
  )
}

export default HomeBoss
