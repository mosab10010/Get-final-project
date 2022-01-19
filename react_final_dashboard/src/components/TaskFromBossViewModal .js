import { useContext } from "react"
import { Button, Image, ListGroup, Modal, Col, Row, Form } from "react-bootstrap"
import TasksContext from "../utils/TasksContext"

function TaskFromBossViewModal(props) {
  const { show, setShow, requestBoss, category } = props
  const { profile } = useContext
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form className="mt-5">
        <Modal.Header closeButton>
          <Modal.Title>View Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            <ListGroup.Item>
              <strong>Title:</strong> {requestBoss.title}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Description:</strong> {requestBoss.decscription}
            </ListGroup.Item>

            <ListGroup.Item>
              <strong>demander:</strong>
              <ListGroup>
                <ListGroup.Item>
                  <span style={{ marginLeft: 10 }}>
                    {requestBoss.demanderIT.firstName} {requestBoss.demanderIT.lastName}
                    <img
                      src={requestBoss.demanderIT.avatar}
                      roundedCircle
                      height={50}
                      width={50}
                      style={{ objectFit: "cover" }}
                    />
                  </span>
                </ListGroup.Item>
              </ListGroup>
              <strong>Email:</strong>
              <ListGroup>
                <ListGroup.Item>
                  <span style={{ marginLeft: 10 }}>{requestBoss.demanderIT.email}</span>
                </ListGroup.Item>
              </ListGroup>
              <strong>department:</strong>
              <ListGroup>
                <ListGroup.Item>
                  <span style={{ marginLeft: 10 }}>{requestBoss.demanderIT.department}</span>
                </ListGroup.Item>
              </ListGroup>

              <strong>progress:</strong>
              <ListGroup>
                <ListGroup.Item>
                  <span style={{ marginLeft: 10 }}>{requestBoss.progress}</span>
                </ListGroup.Item>
              </ListGroup>

              <strong>category:</strong>
              <ListGroup>
                <ListGroup.Item>
                  <span style={{ marginLeft: 10 }}>{requestBoss.category?.name}</span>
                </ListGroup.Item>
              </ListGroup>
            </ListGroup.Item>
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

export default TaskFromBossViewModal
