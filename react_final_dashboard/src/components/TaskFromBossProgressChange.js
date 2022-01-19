import { useContext } from "react"
import { Button, Col, Form, Image, ListGroup, Modal, Row } from "react-bootstrap"
import TasksContext from "../utils/TasksContext"

function TaskFromBossProgressChange(props) {
  const { show, setShow, req, requestBoss, task , request} = props
  const { changeBossProgress ,changePriority } = useContext(TasksContext)
  const progress = [
    "request sent",
    "The request is under review",
    "The request has been completed successfully",
    "Sorry, the request cannot be processed",
  ]

  const priority = [
    "Low",
    "Normal",
    "Urgent",
  ]
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form className="mt-5" onSubmit={e => changeBossProgress(e, requestBoss._id)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit progress</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
            progress
            </Form.Label>
            <Col>
              <Form.Select name="progress" defaultValue={requestBoss.progress} required>
              {progress.map(type => (
              
            
                  <option value={type}>{type}</option>
                ))}
              </Form.Select>
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="success" type="submit" onClick={() => setShow(false)}>
            Confirm Edit
          </Button>
        </Modal.Footer>
      </Form>
    
    </Modal>
  )
}

export default TaskFromBossProgressChange
