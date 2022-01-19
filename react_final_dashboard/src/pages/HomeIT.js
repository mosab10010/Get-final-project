import * as React from "react"
import TaskIcon from "@mui/icons-material/Task"
import { useContext } from "react"
import { Button, Card ,Row,Col} from "react-bootstrap"
import TasksContext from "../utils/TasksContext"
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn"
import AssignmentLateIcon from "@mui/icons-material/AssignmentLate"
import WorkIcon from "@mui/icons-material/Work"
import LowPriorityIcon from "@mui/icons-material/LowPriority"
import SidebarUserit from "../components/SidebarUserIT"
import PeopleIcon from "@mui/icons-material/Work"
import ApartmentIcon from "@mui/icons-material/Work"
import PhotoIcon from "@mui/icons-material/Work"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RunningWithErrorsIcon from '@mui/icons-material/RunningWithErrors';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AddTaskIcon from '@mui/icons-material/AddTask';
import AddchartIcon from '@mui/icons-material/Addchart';
import AddCommentIcon from '@mui/icons-material/AddComment';
import logo from"../assets/logo for final project.png"




import "../style.css"

function HomeIT(props) {
  const { profile, bosstasks, users, task,requestsBoss } = useContext(TasksContext)
  const { requestBoss } = props

  const { tasks } = useContext(TasksContext)
  if (!profile) return <h1>lodifng</h1>
  const tasksFinished = profile.requests.filter(task => task.progress == "The request has been completed successfully")
  const tasksNotFinished = profile.requests.filter(
    task => task.progress !== "The request has been completed successfully"
  )

  return (
    <>
      <SidebarUserit />

      <section id="content">
       
        <div class="content">
          <img style={{width:"200px" , position:"absolute"}} src={logo}/>
        <center>
          <div style={{backgroundColor:"white"}} class="content-header">
            <h1>service Disk</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          </center>
          <Row style={{marginLeft:"5px" , marginBottom:"30px"}}>
        <div
          style={{ display: "flex", alignItems: "center", gap: "19px", marginBottom: "25px", justifyContent: "center" }}
        >
          <h2 style={{ fontSize: "40px" }}>Task stats</h2>
          <AssignmentIcon sx={{ fontSize: 70 }} />
        </div>
        <Col md={6}>
          <Card style={{ backgroundColor: "white" }}>
            <Card.Header style={{ backgroundColor: "#ECB365" }}>
              <Card.Text style={{ color: "white", textAlign: "center", fontSize: "20px" }}>Tasks</Card.Text>
            </Card.Header>
            <Card.Body style={{ display: "flex", justifyContent: "space-around" }}>
              <div style={{ fontSize: "29px" }}>
                <center>
                  <Card.Title>Tasks</Card.Title>
                  <Card.Text>{profile.requests.length}</Card.Text>
                </center>
              </div>
              <AddchartIcon sx={{ fontSize: 70 }} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card style={{ backgroundColor: "white" }}>
            <Card.Header style={{ backgroundColor: "#ECB365" }}>
              <Card.Text style={{ color: "white", textAlign: "center", fontSize: "20px" }}>Administration tasks</Card.Text>
            </Card.Header>
            <Card.Body style={{ display: "flex", justifyContent: "space-around" }}>
              <div style={{ fontSize: "29px" }}>
                <center>
                  <Card.Title> mangear</Card.Title>
                  <Card.Text>{profile.requestsBoss.length}</Card.Text>
                </center>
              </div>
              <AddCommentIcon sx={{ fontSize: 70 }} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="g-3">
          <Card style={{ backgroundColor: "white", color: "black" }}>
            <Card.Body style={{ display: "flex", justifyContent: "space-around" }}>
              <div style={{ fontSize: "29px" }}>
                <center>
                  <Card.Title>completed</Card.Title>
                  <Card.Text>{tasksFinished.length}</Card.Text>
                </center>
              </div>
              <CheckCircleIcon sx={{ fontSize: 70 }} />
            </Card.Body>
            <Card.Header style={{ backgroundColor: "#ECB365" }}>
              <Card.Text style={{ color: "white", textAlign: "center", fontSize: "20px" }}>Completed tasks</Card.Text>
            </Card.Header>
          </Card>
        </Col>
        <Col md={6} className="g-3">
          <Card style={{ backgroundColor: "white", color: "black" }}>
            <Card.Body style={{ display: "flex", justifyContent: "space-around" }}>
              <div style={{ fontSize: "29px" }}>
                <center>
                  <Card.Title>processing</Card.Title>
                  <Card.Text>{tasksNotFinished.length}</Card.Text>
                </center>
              </div>
              <RunningWithErrorsIcon sx={{ fontSize: 70 }} />
            </Card.Body>
            <Card.Header style={{ backgroundColor: "#ECB365" }}>
              <Card.Text style={{ color: "white", textAlign: "center", fontSize: "20px" }}>tasks in progress</Card.Text>
            </Card.Header>
          </Card>
        </Col>
      </Row>
      
          {/* <div class="widget-box sample-widget">
            <div class="widget-header">
              <h2>All Task From user</h2>

              <i class="fa fa-cog"></i>
            </div>
           

            <div class="widget-content">
              <WorkIcon sx={{ fontSize: 200 }} />
              <span style={{ fontFamily: "serif", fontSize: "20px" }}>All Task from user</span>
              <span style={{ color: "black", fontSize: "20px" }}> ( {tasks.length} )</span>
            </div>
          </div>

          <div class="widget-box sample-widget">
            <div class="widget-header">
              <h2>All Task From Manger </h2>
              <i class="fa fa-cog"></i>
            </div>
            <div class="widget-content">
              <LowPriorityIcon sx={{ fontSize: 200 }} />
              <span style={{ fontFamily: "serif" }}>
                All Task from manger <span style={{ color: "red" }}>({profile.requestsBoss.length})</span>
              </span>
            </div>
          </div>
          <div class="widget-box sample-widget">
            <div class="widget-header">
              <h2>All Task finished</h2>
              <i class="fa fa-cog"></i>
            </div>
            <div class="widget-content">
              <AssignmentTurnedInIcon sx={{ fontSize: 200 }} />
              <span style={{ fontFamily: "serif" }} />
              All Task from manger <span style={{ color: "red" }}>({tasksFinished.length})</span>
            </div>
          </div>
          <div class="widget-box sample-widget">
            <div class="widget-header">
              <h2>All task not Finshed</h2>
              <i class="fa fa-cog"></i>
            </div>
            <div class="widget-content">
              <AssignmentLateIcon sx={{ fontSize: 200 }} />
              <span style={{ fontFamily: "serif" }} />
              All Task from manger <span style={{ color: "red" }}>({tasksNotFinished.length})</span>
            </div>
          </div>
        // </div> */}
        </div>

        
      </section>
      {/* <Card border="secondary" style={{ width: '18rem' }}>
    <Card.Header style={{backgroundColor:"#1A374D"}}>Header</Card.Header>
    <Card.Body>
      <Card.Title>Primary Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  <br /> */}
    </>
  )
}

export default HomeIT
