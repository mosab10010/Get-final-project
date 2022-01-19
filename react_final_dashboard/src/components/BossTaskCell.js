import { useState } from "react"
import { Button,ListGroup } from "react-bootstrap"
import BossTaskViewModal from "./BossTaskViewModel"
import ChangeProgress from "./progressChange"
import DeleteTaskBossModal from "./TaskBossDeleteModel"
import DeleteDeleteModal from "./TaskDeleteModel"
import TaskViewModal from "./TaskViewModal"
import UserViewModal from "./UserViewModel"
import AddIcon from "@mui/icons-material/Add"


function BossTaskCell(props) {
  const { bosstask,users } = props
  const [viewShow, setViewShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)
  const [editShow, setEditShow] = useState(false)
  const [show, setShow] = useState(false)

  return (
    <tr style={{ tableLayout: "fixed",padding:"20px", wordWrap: "break-word" }}>
      <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>{bosstask.title}</td>
      <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>{bosstask.decscription}</td>
     
     
      
     
      <td style={{width:"30%"}}>
        
        <Button variant="outline-primary" className="me-2" onClick={() => setViewShow(true)}>
           Task
        </Button>
        <Button variant="outline-danger" onClick={() => setDeleteShow(true)}>
          Delete
        </Button>
      </td>
      <BossTaskViewModal show={viewShow} setShow={setViewShow} bosstask={bosstask} users={users} />
      <DeleteTaskBossModal show={deleteShow} setShow={setDeleteShow} taskId={bosstask._id} />
      {/* <TaskAddModal show={deleteShow} setShow={setDeleteShow} bosstaskId={bosstask._id} /> */}
      
     
    </tr>
  )
}

export default BossTaskCell
