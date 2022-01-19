import { Button, Image, ListGroup, Modal, Col, Row } from "react-bootstrap"
import TasksContext from "../utils/TasksContext"
import { useContext } from "react"

function UserViewModal(props) {
  const { show, setShow, user, users } = props

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong>Title:</strong> {user.firstName}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Description:</strong> {user.lastName}
          </ListGroup.Item>

          <ListGroup.Item>
            <strong>department:</strong> {user.department}
          </ListGroup.Item>

          <ListGroup.Item>
            <strong>All requests in this user:</strong>
            <Col md="8">
              {user.requests?.map(request => (
                <ListGroup>
                  <ListGroup.Item>
                    <strong>Title:</strong> {request.title}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>decscription:</strong> {request.decscription}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>progress:</strong> {request.progress}
                  </ListGroup.Item>
                  ـــــــــــــــــــــــــــــــــــــــــــ
                </ListGroup>
              ))}
              <strong>All requests From Manger To You:</strong>
            <Col md="8">
               {user.requestsBoss?.map(request => (
                <ListGroup>
                  <ListGroup.Item>
                    <strong>Title:</strong> {request.title}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>decscription:</strong> {request.decscription}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>progress:</strong> {request.progress}
                  </ListGroup.Item>
                  ـــــــــــــــــــــــــــــــــــــــــــ
                </ListGroup>
              ))}
              </Col>
            </Col>
          </ListGroup.Item>
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default UserViewModal
