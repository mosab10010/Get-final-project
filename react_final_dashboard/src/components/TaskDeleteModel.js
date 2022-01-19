import { useContext } from "react"
import { Button, Image, ListGroup, Modal } from "react-bootstrap"
import TasksContext from "../utils/TasksContext"

function DeleteDeleteModal(props) {
  const { deleteTask } = useContext(TasksContext)
  const { show, setShow, taskId } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this task ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deleteTask(taskId)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default DeleteDeleteModal
