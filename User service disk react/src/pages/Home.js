import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import RunningWithErrorsIcon from "@mui/icons-material/RunningWithErrors"
import AssignmentIcon from "@mui/icons-material/Assignment"
import AddchartIcon from "@mui/icons-material/Addchart"
import AddCommentIcon from "@mui/icons-material/AddComment"
import { Card, Container, Row, Table, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

import TasksContext from "../utils/TasksContext"
import { useContext } from "react"
import Navbar from "../components/Navbar"
import AddIcon from "@mui/icons-material/Add"
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"

function Home() {
  const { profile } = useContext(TasksContext)
  if (!profile) return null

  const tasksNotFinished = profile.requests?.filter(
    task => task.progress !== "The request has been completed successfully"
  )
  const tasksFinished = profile.requests?.filter(task => task.progress == "The request has been completed successfully")
  return (
    <div style={{ backgroundColor: "#FEFBF3", height: "170vh" }}>
      <Navbar />
      <div>
        <Card className="bg-dark text-white">
          <Card.Img
            style={{ opacity: "0.1", height: "500px" }}
            src="https://images.pexels.com/photos/2058128/pexels-photo-2058128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Card image"
          />
          <Card.ImgOverlay>
            <Card.Title style={{ textAlign: "center", marginTop: "150px", fontSize: "40px" }}>Service Disk</Card.Title>
            <Card.Text style={{ textAlign: "center" }}>
              Submit your request from the Information Technology Department.
            </Card.Text>
            <Link style={{ color: "#00394d" }} className="nav-link" to="/AddNewTikts">
              <Button style={{ marginLeft: "540px" }} variant="outline-secondary">
                Apply here
                <AddIcon />
              </Button>{" "}
            </Link>
          </Card.ImgOverlay>
        </Card>
      </div>

      <div style={{ marginTop: "20px" }}>
        
        <Container>
          <div>
            {/* <Table
              bordered
              style={{ color:"white",  borderRadius: "20px", marginBottom: "50px", marginTop: "30px", backgroundColor: "#548CA8" }}
            >
              <thead>
                <tr>
                  <td style={{ width: "20%", textAlign: "center" }}> task Number</td>
                  <td style={{ width: "20%", textAlign: "center" }}>Title of the request</td>
                  <td style={{ width: "20%", textAlign: "center" }}>description of the request</td>
                  <td style={{ width: "20%", textAlign: "center" }}>Order status</td>
                  <td style={{ width: "20%", textAlign: "center" }}>Task Do</td>
                </tr>
              </thead>
              <tbody>
                {tasksFinished?.map(request => (
                  <tr style={{ backgroundColor: "#FFF9F9", color: "white" }}>
                    <th style={{color:"black", textAlign: "center" }}>{request.taskNumber}</th>
                    <th style={{ color:"black",textAlign: "center" }}> {request.title}</th>
                    <th style={{ color:"black",textAlign: "center" }}>{request.decscription}</th>
                    <th style={{ color:"black",textAlign: "center" }}>{request.progress}</th>
                    {request.taskDo ? (
                      <th style={{color:"black", textAlign: "center" }}>
                        {request.taskDo.firstName} {request.taskDo.lastName}
                      </th>
                    ) : (
                      <th style={{ textAlign: "center" }}>-</th>
                    )}
                  </tr>
                ))}
              </tbody>
            </Table> */}
            <Container>
              <Row style={{ marginLeft: "5px", marginBottom: "30px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "19px",
                    marginBottom: "25px",
                    justifyContent: "center",
                  }}
                >
                  <h2 style={{ fontSize: "40px" }}>Task Stats</h2>
                  <AssignmentIcon sx={{ fontSize: 70 }} />
                </div>
                <Col md={4}>
                  <Card style={{ backgroundColor: "white" }}>
                    <Card.Header style={{ backgroundColor: "#548CA8" }}>
                      <Card.Text style={{ color: "white", textAlign: "center", fontSize: "20px" }}>Tasks</Card.Text>
                    </Card.Header>
                    <Card.Body style={{ display: "flex", justifyContent: "space-around" }}>
                      <div style={{ fontSize: "29px" }}>
                        <center>
                          <Card.Title>Tasks</Card.Title>
                          <Card.Text>{profile.requests?.length}</Card.Text>
                        </center>
                      </div>
                      <AddchartIcon sx={{ fontSize: 70 }} />
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card style={{ backgroundColor: "white", color: "black" }}>
                    <Card.Header style={{ backgroundColor: "#548CA8" }}>
                      <Card.Text style={{ color: "white", textAlign: "center", fontSize: "20px" }}>
                        Completed Tasks
                      </Card.Text>
                    </Card.Header>
                    <Card.Body style={{ display: "flex", justifyContent: "space-around" }}>
                      <div style={{ fontSize: "29px" }}>
                        <center>
                          <Card.Title>Completed</Card.Title>
                          <Card.Text>{tasksFinished?.length}</Card.Text>
                        </center>
                      </div>
                      <CheckCircleIcon sx={{ fontSize: 70 }} />
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card.Header style={{ backgroundColor: "#548CA8" }}>
                    <Card.Text style={{ color: "white", textAlign: "center", fontSize: "20px" }}>
                      Tasks in Progress
                    </Card.Text>
                  </Card.Header>
                  <Card style={{ backgroundColor: "white", color: "black" }}>
                    <Card.Body style={{ display: "flex", justifyContent: "space-around" }}>
                      <div style={{ fontSize: "29px" }}>
                        <center>
                          <Card.Title>Processing</Card.Title>
                          <Card.Text>{tasksNotFinished?.length}</Card.Text>
                        </center>
                      </div>
                      <RunningWithErrorsIcon sx={{ fontSize: 70 }} />
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </div>
      <br /> <br />
    </div>
  )
}

export default Home
