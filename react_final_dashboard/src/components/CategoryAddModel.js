import { useContext } from "react"
import { Button, Col, Form, Image, ListGroup, Modal, Row } from "react-bootstrap"
import TasksContext from "../utils/TasksContext"

function CategoryAddModal(props) {
  const { show, setShow, category } = props
  const { AddCategory, bosstask, categorys } = useContext(TasksContext)

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={AddCategory}>
        <Modal.Header closeButton>
          <Modal.Title>Add category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="4">
              Name
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="name" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="4">
            decscription
            </Form.Label>
            <Col md="8">
              <Form.Control type="textarea" name="decscription" required />
            </Col>
          </Form.Group>



          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="4">
              Post
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="post" required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="4">
              type
            </Form.Label>
            <Col md="8">
              <Form.Select  name="type" required >

                <option value="empolyee">empolyee</option>
                <option value="empolyeeBoss"> empolyee Boss </option>




                </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3"></Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={() => setShow(false)}>
            Add Category
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default CategoryAddModal
