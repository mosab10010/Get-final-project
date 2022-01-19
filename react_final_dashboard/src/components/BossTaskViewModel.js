import { useContext } from "react"
import { Button, Image, ListGroup, Modal, Col, Row, Form } from "react-bootstrap"
import TasksContext from "../utils/TasksContext"

function BossTaskViewModal(props) {
  const { show, setShow, bosstask, users, task } = props
  const { sendTaskBoss } = useContext(TasksContext)

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form className="mt-5" onSubmit={e => sendTaskBoss(e, bosstask._id)}>
        <Modal.Header closeButton>
          <Modal.Title>View Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            <ListGroup.Item>
              <strong>Title:</strong> {bosstask.title}
            </ListGroup.Item>
            <ListGroup.Item></ListGroup.Item>
            <ListGroup.Item></ListGroup.Item>
            <ListGroup.Item>
              <strong>demander:</strong>
              <ListGroup>
                <ListGroup.Item>
                  <span style={{ marginLeft: 10 }}>
                    {bosstask.demanderIT.firstName} {bosstask.demanderIT.lastName}
                    <img
                      src={bosstask.demanderIT.avatar}
                      roundedCircle
                      height={50}
                      width={50}
                      style={{ objectFit: "cover" }}
                    />
                  </span>
                </ListGroup.Item>
                <strong>Email:</strong>
                <ListGroup>
                  <ListGroup.Item>
                    <span style={{ marginLeft: 10 }}>{bosstask.demanderIT.email}</span>
                  </ListGroup.Item>
                </ListGroup>
                <strong>department:</strong>
                <ListGroup>
                  <ListGroup.Item>
                    <span style={{ marginLeft: 10 }}>{bosstask.demanderIT.department}</span>
                  </ListGroup.Item>
                  <strong>progress:</strong>

                  <ListGroup.Item>
                    <span style={{ marginLeft: 10 }}>{bosstask.progress}</span>
                  </ListGroup.Item>
                </ListGroup>
              </ListGroup>
              <ListGroup>
                <ListGroup.Item>
                  <span style={{ marginLeft: 10 }}>{bosstask.demanderIT.department}</span>
                </ListGroup.Item>
                <strong>category:</strong>

                <ListGroup.Item>
                  <span style={{ marginLeft: 10 }}>{bosstask.category?.name}</span>
                </ListGroup.Item>
              </ListGroup>
            </ListGroup.Item>
          </ListGroup>
          <ListGroup>
            <center>
              <h4>IT staff:</h4>
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
                  defaultChecked={bosstask.taskDo === user._id}
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

export default BossTaskViewModal
