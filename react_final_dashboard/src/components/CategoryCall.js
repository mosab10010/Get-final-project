import { useState } from "react"
import { Button , Card} from "react-bootstrap"
import CategoryAddModal from "./CategoryAddModel"
import DeleteCategoryModal from "./CategoryDeleteModel"

function CategoryCall(props) {
  const { category } = props
  const [viewShow, setViewShow] = useState(false)
  const [show, setShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)



  return (
    <center>
    <div style={{ marginLeft:"200px" }}>
<Card border="primary" style={{ width: '30rem'}}>
<Card.Img style={{width:"600px" , height:"200px"}} variant="top" src={category.post} />
  
    <Card.Body>
      <Card.Title>{category.name}</Card.Title>
      <Card.Text>
       {category.decscription}
      </Card.Text>
  <Button variant="outline-danger" onClick={() => setDeleteShow(true)}>
          Delete
        </Button>
    </Card.Body>
  </Card>
  <br />

        <DeleteCategoryModal show={deleteShow} setShow={setDeleteShow} category={category._id} />

     {/* <td> <img src={category.post} style={{ objectFit: "contain", height: "100px", width: "100%" }} /></td> */}
    
      {/* <TaskAddModal show={deleteShow} setShow={setDeleteShow} bosstaskId={bosstask._id} /> */}
    </div>
  </center>
  )
}

export default CategoryCall
