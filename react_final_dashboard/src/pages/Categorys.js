import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import TasksContext from "../utils/TasksContext"
import AddIcon from "@mui/icons-material/Add"
import CategoryCall from "../components/CategoryCall"
import Sidebar from "../components/Sidebar"
import CategoryAddModal from "../components/CategoryAddModel"
import logo from"../assets/logo for final project.png"


function Categorys() {
  const { categorys } = useContext(TasksContext)
  const [show, setShow] = useState(false)

  return (
    <>
      <Sidebar />
      <section >
      <div>
       <img style={{width:"200px" , position:"absolute" , bottom:"490px"}} src={logo}/>
        <center>
       
       <div >
           <div style={{ backgroundColor: "#F8F8FF" , width:"160vh" }}>
             <h1 style={{ color: "black" }}>service Disk</h1>
             <p style={{ color: "black" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
           </div>
           </div>
          <div >

          <h1 style={{fontFamily:"monospace" ,}}>All sections</h1>
          </div>
        </center>

          
        <tbody>
         
          <div style={{ display: "flex", justifyContent: "flex-end" , marginTop:"30px" }}>
            <Button onClick={() => setShow(true)} variant="outline-primary">
              <AddIcon /> add New Category
            </Button>
          </div>
          <br />
          
          {categorys.map(category => (
            <CategoryCall key={category._id} category={category} />
          ))}
        </tbody>
      <CategoryAddModal show={show} setShow={setShow} />
      </div>
      </section>
    </>

    
  )
}

export default Categorys
