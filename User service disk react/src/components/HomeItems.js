import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import RunningWithErrorsIcon from "@mui/icons-material/RunningWithErrors"
import AssignmentIcon from "@mui/icons-material/Assignment"
import AddchartIcon from "@mui/icons-material/Addchart"
import AddCommentIcon from "@mui/icons-material/AddComment"
import { Card, Container, Row, Table, Col, Button } from "react-bootstrap"
import TasksContext from "../utils/TasksContext"
import { useContext } from "react"
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"

function HomeItems(props) {
    const{request}=props
    const { profile ,addTask } = useContext(TasksContext)
  if (!profile) return null

  const tasksNotFinished = profile.requests?.filter(
    task => task.progress !== "The request has been completed successfully"
  )
  const tasksFinished = profile.requests?.filter(task => task.progress == "The request has been completed successfully")
    return (   <Col md={6}>
        <Card style={{ backgroundColor: "white" }}>
          <Card.Header style={{ backgroundColor: "#ECB365" }}>
            <Card.Text style={{ color: "white", textAlign: "center", fontSize: "20px" }}>
              All My Requests
            </Card.Text>
          </Card.Header>
          <Card.Body style={{ display: "flex", justifyContent: "space-around" }}>
            <div style={{ fontSize: "29px" }}>
              <center>
                <Card.Title> Tasks</Card.Title>
                <Card.Text>{tasksFinished?.length}</Card.Text>
              </center>
            </div>
            <AddCommentIcon sx={{ fontSize: 70 }} />
          </Card.Body>
        </Card>
      </Col>
   );
}

export default HomeItems;