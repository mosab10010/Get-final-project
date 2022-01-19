import { useContext } from "react"
import { Button, Col, Form, Image, ListGroup, Modal, Row } from "react-bootstrap"
import TasksContext from "../utils/TasksContext"

function TaskAddModal(props) {
  const { show, setShow, categor } = props
  const { addTask } = useContext(TasksContext)

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={e => addTask(e, categor._id)}>
        <Modal.Header closeButton>
          <Modal.Title>Add {categor.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Title
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="title" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-4">
            <Form.Label column md="3">
              Description
            </Form.Label>
            <Col md="8">
              <Form.Control as="textarea" name="decscription" required />
            </Col>
          </Form.Group> */}
          <label>Title</label>
          <br />
          <input style={{ borderRadius: "10px" }} type="text" name="title" required />
          <br />
          <br />
          <label>Description</label>
          <br />
          <input style={{ borderRadius: "10px" , height:"80px" }} type="textarea" name="decscription" required />
          <br />

          <Form.Group as={Row} className="mb-3"></Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="outline-primary" type="submit" onClick={() => setShow(false)}>
            Add new Request 
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default TaskAddModal
