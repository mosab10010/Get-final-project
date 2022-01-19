import { useContext } from "react"
import { Button, Col, Form, Image, ListGroup, Modal, Row } from "react-bootstrap"
import TasksContext from "../utils/TasksContext"

function UserChangeProgress(props) {
  const { show, setShow, req, request, task } = props
  const { changeProgress, changeRate } = useContext(TasksContext)
  const progress = [
    "request sent",
    "The request is under review",
    "The request has been completed successfully",
    "Sorry, the request cannot be processed",
  ]

  const rete = ["0%", "20%", "40%", "70%", "90%", "100%"]
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form
        className="mt-5"
        onSubmit={e => {
          changeProgress(e, request._id)
          changeRate(e, request._id)

        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit progress</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              progress
            </Form.Label>
            <Col>
              <Form.Select name="progress" defaultValue={request.progress} required>
                {progress.map(type => (
                  // defaultChecked={type == request.progress}
                  <option value={type}>{type}</option>
                ))}
              </Form.Select>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              rate
            </Form.Label>
            <Col>
              <Form.Select name="CompletionRrate" defaultValue={request.CompletionRrate} required>
                {rete.map(type => (
                  // defaultValue={type == request.progress}

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

export default UserChangeProgress
