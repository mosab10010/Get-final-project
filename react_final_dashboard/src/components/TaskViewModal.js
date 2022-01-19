import { useContext } from "react"
import { Button, Image, ListGroup, Modal, Col, Row, Form } from "react-bootstrap"
import TasksContext from "../utils/TasksContext"

function TaskViewModal(props) {
  const { show, setShow, task, users } = props
  const{sendTask} = useContext(TasksContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form className="mt-5" onSubmit={e => sendTask(e, task._id)}>
        <Modal.Header closeButton>
          <Modal.Title>View Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            <ListGroup.Item>
              <strong>Title:</strong> {task.title}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Description:</strong> {task.decscription}
            </ListGroup.Item>

            <ListGroup.Item>
              <strong>department:</strong> {task.department}
            </ListGroup.Item>

            <ListGroup.Item>
              <strong>demander:</strong>
              <ListGroup>
                <ListGroup.Item>
                  <span style={{ marginLeft: 10 }}>
                    {task.demander.firstName} {task.demander.lastName}
                    <img src={task.demander.avatar} roundedCircle height={50} width={50} style={{ objectFit: "cover" }} />
                  </span>
                </ListGroup.Item>
              </ListGroup>
              <strong>Email:</strong>
              <ListGroup>
                <ListGroup.Item>
                  <span style={{ marginLeft: 10 }}>{task.demander.email}</span>
                </ListGroup.Item>
              </ListGroup>
              <strong>department:</strong>
              <ListGroup>
                <ListGroup.Item>
                  <span style={{ marginLeft: 10 }}>{task.demander.department}</span>
                </ListGroup.Item>
              </ListGroup>
              <strong>category:</strong>
              <ListGroup>
                <ListGroup.Item>
              
                <ListGroup.Item>{task.category?.name}</ListGroup.Item>
            
                </ListGroup.Item>
              </ListGroup>
              <strong>progress:</strong>
              <ListGroup>
                <ListGroup.Item>
                  <span style={{ marginLeft: 10 }}>{task.progress}</span>
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
        <Col md="8">
          {users.map(user => (
            <Row style={{ height: 55, display: "flex", alignItems: "center" }}>
              <Col md="2">
                <Form.Check
                  type="radio"
                  name="employeeIT"
                  defaultChecked={task.taskDo === user._id}
                  value={user._id}
                />
              </Col>
              <Col md="8">
                <Image src={user.avatar} roundedCircle height={50} width={50} style={{ objectFit: "cover" }} />
                <span style={{ marginLeft: 10 }}>
                  {user.firstName} {user.lastName}
                </span>

                <span style={{ marginLeft: 10 }}>{user.requests.id}</span>
              </Col>
            </Row>
          ))}
        </Col>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="success" type="submit" onClick={() => setShow(false)}>
            Confirm Send
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default TaskViewModal
