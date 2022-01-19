import { useContext } from "react"
import { Button, Image, ListGroup, Modal } from "react-bootstrap"
import TasksContext from "../utils/TasksContext"

function DeleteCategoryModal(props) {
  const { deleteCategory } = useContext(TasksContext)
  const { show, setShow, category } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete category</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this category ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deleteCategory(category)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default DeleteCategoryModal
