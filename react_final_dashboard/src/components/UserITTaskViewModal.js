import { useContext } from "react"
import { Button, Image, ListGroup, Modal, Col, Row, Form } from "react-bootstrap"
import TasksContext from "../utils/TasksContext"

function UserITTaskViewModal(props) {
  const { show, setShow, request } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form className="mt-5">
        <Modal.Header closeButton>
          <Modal.Title>View Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            <ListGroup.Item>
              <strong>Title:</strong> {request.title}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Description:</strong> {request.decscription}
            </ListGroup.Item>

            <ListGroup.Item>
              <strong>department:</strong> {request.department}
            </ListGroup.Item>

            <ListGroup.Item>
              <strong>demander:</strong>
              <ListGroup>
                <ListGroup.Item>
                  <span style={{ marginLeft: 10 }}>
                    {request.demander.firstName} {request.demander.lastName}
                    <img src={request.demander.avatar} roundedCircle height={50} width={50} style={{ objectFit: "cover" }} />
                  </span>
                </ListGroup.Item>
              </ListGroup>
              <strong>Email:</strong>
              <ListGroup>
                <ListGroup.Item>
                  <span style={{ marginLeft: 10 }}>{request.demander.email}</span>
                </ListGroup.Item>
              </ListGroup>
              <strong>department:</strong>
              <ListGroup>
                <ListGroup.Item>
                  <span style={{ marginLeft: 10 }}>{request.demander.department}</span>
                </ListGroup.Item>
              </ListGroup>
              <strong>category:</strong>
              <ListGroup>
                <ListGroup.Item>
                {request.categorys?.map(category => (
                <ListGroup.Item>{category.name}</ListGroup.Item>
              ))}
                </ListGroup.Item>
              </ListGroup>
              <strong>progress:</strong>
              <ListGroup>
                <ListGroup.Item>
                  <span style={{ marginLeft: 10 }}>{request.progress}</span>
                </ListGroup.Item>
              </ListGroup>
           
            </ListGroup.Item>
            <center>
              <h4>IT staff:
              </h4>
              </center>
              <ListGroup>
                <ListGroup.Item>
                  <center style={{ marginLeft: 10 }}>Who do you want the employees IT to take over?</center>
                </ListGroup.Item>
              </ListGroup>
          </ListGroup>
        </Modal.Body>
       
      
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default UserITTaskViewModal
