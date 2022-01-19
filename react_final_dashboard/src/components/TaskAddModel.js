import { useContext } from "react"
import { Button, Col, Form, Image, ListGroup, Modal, Row } from "react-bootstrap"
import TasksContext from "../utils/TasksContext"

function TaskAddModal(props) {
  const { show, setShow, category } = props
  const { addTask, bosstask, categorys } = useContext(TasksContext)
  const cotegoryBoss = categorys?.filter(categorys => categorys.type == "empolyeeBoss")
  return (
    <Modal show={show} onHide={() => setShow(false)}>
     
      <Form onSubmit={e => addTask(e)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Title
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="title" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Description
            </Form.Label>
            <Col md="8">
              <Form.Control as="textarea" name="decscription" required />
            </Col>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column md="4">
                type
              </Form.Label>
              <Col md="8">
                <Form.Select  name="category" required >
                {cotegoryBoss?.map(cotegoryManger => (

                 <option value={cotegoryManger._id}>{cotegoryManger.name}</option>
                 
 
 
 
 
                 ))}
                 </Form.Select>
              </Col>
            </Form.Group>
          </Form.Group>

          <Form.Group as={Row} className="mb-3"></Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={() => setShow(false)}>
            Add film
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default TaskAddModal
