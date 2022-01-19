import { useState } from "react"
import { Button,ListGroup } from "react-bootstrap"
import ChangeProgress from "./progressChange"
import DeleteDeleteModal from "./TaskDeleteModel"
import TaskViewModal from "./TaskViewModal"
import UserITTaskViewModal from "./UserITTaskViewModal"
import UserChangeProgress from "./UserprogressChange"
import UserViewModal from "./UserViewModel"

function TaskUserITCell(props) {
  const {request,task} = props
  const [viewShow, setViewShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)
  const [editShow, setEditShow] = useState(false)

  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{request._id}</td>
      <td>{request.title}</td>
<th>{request.priority}</th>
      <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>{request.decscription}</td>
     
      <th>{request.demander.department}</th>
      <th>{request.CompletionRrate}</th>
     
        <td>
        <Button variant="info" className="me-2" onClick={() => setViewShow(true)}>
           Task
        </Button>
        <Button variant="success" className="me-2" onClick={() => setEditShow(true)}>
        status
        </Button>
        <Button variant="danger" onClick={() => setDeleteShow(true)}>
          Delete
        </Button>
      </td>
      <UserITTaskViewModal show={viewShow} setShow={setViewShow} request={request}  />
      <UserChangeProgress show={editShow} setShow={setEditShow} request={request} />
      
     
    </tr>
  )
}

export default TaskUserITCell
