import { Card, Container, Row, Table, Col } from "react-bootstrap"
import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import TasksContext from "../utils/TasksContext"
import AddIcon from "@mui/icons-material/Add"
import TaskAddModal from "../components/AddTaskViewModel"
import CategoryItem from "../components/CategoryItem"
import Navbar from "../components/Navbar"
import AssignmentIcon from "@mui/icons-material/Assignment"

function RequestNewService() {
  const { category } = useContext(TasksContext)

  return (
    <div style={{backgroundImage:`url("https://image.freepik.com/free-vector/network-mesh-wire-digital-technology-background_1017-27428.jpg")` , backgroundRepeat:"no-repeat",backgroundSize:"cover" , backgroundAttachment:"fixed"}}>
      <Navbar />
      <div style={{ backgroundColor: "#0000", height: "210vh" }}>
        <br />
        <div class="row">
          <div class="col-sm-6 offset-sm-3 mt-4 mb-4">
            <h2 class="text-center">
              Request a new service
              <AssignmentIcon sx={{ fontSize: 35 }} />
            </h2>
            <p class="text-center">You can request a new service from the Information Technology Department</p>
          </div>
        </div>
        {/* <center>
        <h1>
          Request a new service..
           <AssignmentIcon sx={{ fontSize: 35 }} />
        </h1>
      </center> */}
      
          <Container>
          <Row xs={1} md={3} className="g-4">

              {category.map(categor => (
                <CategoryItem categor={categor} />
              ))}
              </Row>
          </Container>
        
      </div>
    </div>
  )
}

export default RequestNewService
