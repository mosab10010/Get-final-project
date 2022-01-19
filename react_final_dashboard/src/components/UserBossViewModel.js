import { Button, Image, ListGroup, Modal, Col, Row } from "react-bootstrap"
import TasksContext from "../utils/TasksContext"
import { useContext } from "react"

function UserBossViewModal(props) {
  const { show, setShow, userBoss } = props

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <ListGroup.Item>
            <strong>First Name:</strong> {userBoss.firstName}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Last Name:</strong> {userBoss.lastName}
          </ListGroup.Item>

          <ListGroup.Item>
            <strong>department:</strong> {userBoss.department}
          </ListGroup.Item>

         
                   
             
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default UserBossViewModal
