import { useState } from "react"
import { Button } from "react-bootstrap"
import UserBossViewModal from "./UserBossViewModel"
import UserDeleteViewModel from "./UserDeleteViewModel"
import UserViewModal from "./UserViewModel"

function UserBossCell(props) {
  const { userBoss } = props
  const [viewShow, setViewShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)
  return (
    

    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{userBoss._id}</td>
      <td>{userBoss.firstName}</td>
      <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>{userBoss.lastName}</td>
      <td>
        <img src={userBoss.avatar} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
      </td>
      <td>{userBoss.role}</td>
      <td>
        <Button variant="info" className="me-2" onClick={() => setViewShow(true)}>
          View
        </Button>
       
          <>
            
         
          </>
      </td>
      <UserBossViewModal show={viewShow} setShow={setViewShow} userBoss={userBoss} />
      {/* <UserDeleteViewModel show={deleteShow} setShow={setDeleteShow} taskId={user._id} /> */}
    </tr>
  )
}

export default UserBossCell
