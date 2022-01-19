import { useState } from "react"
import { Button,ListGroup } from "react-bootstrap"
import ChangeProgress from "./progressChange"
import DeleteDeleteModal from "./TaskDeleteModel"
import TaskViewModal from "./TaskViewModal"
import UserViewModal from "./UserViewModel"

function TaskCell(props) {
  const { task,users } = props
  const [viewShow, setViewShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)
  const [editShow, setEditShow] = useState(false)

  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{task._id}</td>
      <td>{task.title}</td>
      <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>{task.decscription}</td>
     
      <td>{task.demander.department}</td>
      
      <td>
               <>{task.category?.name}</>
              </td>
      <td>
        
        <Button variant="outline-primary" className="me-2" onClick={() => setViewShow(true)}>
           Task
        </Button>
        <Button variant="outline-success" className="me-2" onClick={() => setEditShow(true)}>
        status
        </Button>
        <Button variant="outline-danger" onClick={() => setDeleteShow(true)}>
          Delete
        </Button>
      </td>
      <TaskViewModal show={viewShow} setShow={setViewShow} task={task} users={users} />
      <ChangeProgress show={editShow} setShow={setEditShow} task={task} />
      <DeleteDeleteModal show={deleteShow} setShow={setDeleteShow} taskId={task._id} />
      
     
    </tr>
  )
}

export default TaskCell
