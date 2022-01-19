import { Padding } from "@mui/icons-material"
import { useState } from "react"
import { Card, Container, Row, Table, Col } from "react-bootstrap"
import { Button } from "react-bootstrap"
import TaskAddModal from "./AddTaskViewModel"

function CategoryItem(props) {
  const [show, setShow] = useState(false)
  const { categor } = props
  return (
    <>
      <center>
{/*         
        <div style={{ backgroundColor: "#FFF9F9", width: "650px", height: "200px" }} class="card mb-4">
          <div class="row g-8">
            <div class="col-md-4">
              <center>

              <Card.Img style={{ height: "180px" }} variant="top" src={categor.post} />
              </center>
            </div>
            <div class="col-md-4">
              <div class="card-body">
                <h5 style={{position:"relative" , left:"60px"}} class="card-title">
                  {categor.name}
                </h5>

                <p style={{position:"relative" , left:"60px"}} class="card-text">
                  {categor.decscription}
                </p>
          <Button style={{position:"relative" , left:"60px"}} variant="outline-success" onClick={() => setShow(true)}>
          Add request
              </Button>
              </div>
            </div>
          </div>
        </div> */}

        <div  class="container">
          <div class="row">
            <div class="col-md-12">
              <div style={{backgroundImage:`url("https://image.freepik.com/free-vector/white-background-with-hexagonal-line-pattern-design_1017-28442.jpg")` , opacity:"0.9" , backgroundSize:"cover"}} class="card-box text-center">
                <div class="user-pic">
                  <img
                   src={categor.post}
                    class="img-fluid"
                    alt="User Pic"
                  />
                </div>
                <h4> {categor.name}</h4>
               
                <hr />
                <p>
                {categor.decscription}
                </p>
                <hr />
                <Button  variant="outline-success" onClick={() => setShow(true)}>
          Add request
              </Button>
              </div>
            </div>
          </div>
        </div>
        <TaskAddModal show={show} setShow={setShow} key={categor._id} categor={categor} />
      </center>
    </>
  )
}

export default CategoryItem
