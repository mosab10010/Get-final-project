import { useState } from "react"
import { Button } from "react-bootstrap"
import UserViewModal from "./UserViewModel"

function UserEmpCell(props) {
  const { userEmp } = props
  const [viewShow, setViewShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)
  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{userEmp._id}</td>
      <td>{userEmp.firstName}</td>
      <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>{userEmp.lastName}</td>
      <td>
        <img src={userEmp.avatar} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
      </td>
      <td>{userEmp.department}</td>
      <td>
       {userEmp.email}
       
          <>
           
          </>
      </td>
      {/* <UserViewModal show={viewShow} setShow={setViewShow} user={user} /> */}
      {/* <UserDeleteModal show={deleteShow} setShow={setDeleteShow} userId={user._id} /> */}
    </tr>
  )
}

export default UserEmpCell
