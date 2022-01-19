import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import TasksContext from "../utils/TasksContext"
import AddIcon from "@mui/icons-material/Add"
import UserCell from "../components/UserCell"
import UserITAddModal from "../components/UserITAddModel"
import UserEmpCell from "../components/UsersEmpCell"
import Sidebar from "../components/Sidebar"
import UserEmpAddModal from "../components/UserEmpAddModel"
import logo from"../assets/logo for final project.png"


function UsersEmp() {
  const { usersEmp } = useContext(TasksContext)
  const [show, setShow] = useState(false)
  console.log(usersEmp)
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

          <h1 style={{fontFamily:"monospace" ,}}>All company employees</h1>
          </div>
        </center>
    <div>
      <br />
     <Button style={{marginLeft: "800px", marginTop:"7px",position:"absolute" }} onClick={() => setShow(true)} variant="outline-primary">
          <AddIcon />
          Add Users
        </Button>
        </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <br /> <br />
      </div>
      
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
        
          <tr>
            <th style={{ width: "9%" }}>#</th>
            <th style={{ width: "18%" }}>first name</th>
            <th style={{ width: "18%" }}>last name</th>
            <th style={{ width: "18%" }}>avatar</th>
            <th style={{ width: "9%" }}>Dept.</th>
            <th style={{ width: "36%" }}>Email</th>
          </tr>
        </thead>
        <tbody>
          {usersEmp.map(userEmp => (
            <UserEmpCell key={userEmp._id} userEmp={userEmp} />
          ))}
        </tbody>
      </Table>
      <UserEmpAddModal show={show} setShow={setShow} />
      </div>
      </section>
    </>
  )
}

export default UsersEmp
