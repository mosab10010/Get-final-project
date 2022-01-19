import { useContext } from "react"
import { Button, Image, ListGroup, Modal } from "react-bootstrap"
import TasksContext from "../utils/TasksContext"

function DeleteTaskBossModal(props) {
  const { deleteTaskBoss } = useContext(TasksContext)
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
        <Button variant="danger" onClick={() => deleteTaskBoss(taskId)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default DeleteTaskBossModal
