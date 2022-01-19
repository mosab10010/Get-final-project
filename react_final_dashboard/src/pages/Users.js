import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import TasksContext from "../utils/TasksContext"
import AddIcon from "@mui/icons-material/Add"
import UserCell from "../components/UserCell"
import UserITAddModal from "../components/UserITAddModel"
import Sidebar from "../components/Sidebar"
import logo from"../assets/logo for final project.png"


function Users() {
  const { users } = useContext(TasksContext)
  const [show, setShow] = useState(false)
  return (
    <>
          <Sidebar/>
          <section >
      <div>
       <img style={{width:"200px" , position:"absolute" , bottom:"490px"}} src={logo}/>
        <center>
       
       <div >
           <div style={{ backgroundColor: "#F8F8FF" }}>
             <h1 style={{ color: "black" }}>service Disk</h1>
             <p style={{ color: "black" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
           </div>
           </div>
          <div >

          <h1 style={{fontFamily:"monospace" ,}}>IT department employees</h1>
          </div>
        </center>
     <Button onClick={() => setShow(true)} variant="outline-primary">
          <AddIcon /> add users
        </Button>
          
        <Table bordered hover style={{ tableLayout: "fixed" }}>
          <thead>
            <tr style={{ backgroundColor: "#14274E", color: "white" }}>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Avtart</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {users.map(user => (
            <UserCell key={user._id} user={user} />
          ))}
      <UserITAddModal show={show} setShow={setShow} />
       </tbody>
        </Table>
       
          </div>
          </section>
    </>
  )
}

export default Users
