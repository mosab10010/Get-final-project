import { useContext } from "react"
import { Form, Col, Row, Button } from "react-bootstrap"
import FilmsContext from "../utils/TasksContext"
import logo from"../assets/logo for final project.png"
import LoginIcon from '@mui/icons-material/Login';
import "../Stylee.css"


function Login() {
  const { login } = useContext(FilmsContext)

  return (
    <div style={{marginLeft:"300px"}} class="all">
      <center>
        <br /><br />
<div class="containerr" id="containerr">
	<div class="form-containerr sign-up-containerr">
	
	</div>
	<div  class="form-containerr sign-in-containerr">
		<Form onSubmit={login} action="#">
			<h1>Login</h1>
      <br /> <br />
			
		
      <label>Email</label>
      <br />
			<input style={{borderRadius:"10px"}} type="email" name="email" placeholder="Enter your email" required />
      <br />
      <label>password</label>
      <br />
			<input style={{borderRadius:"10px"}} type="password" name="password" placeholder="Enter your password" required />
		<br />
     
               <Button   type="submit" variant="outline-primary">Login
               < LoginIcon style={{marginLeft:"10px"}}/>
               
               </Button>{' '}

		</Form>
	</div>
	<div class="overlay-containerr">
		<div class="overlay">
      
			<div class="overlay-panel overlay-right">
				<h3>Department of Information Technology</h3>
		<img style={{width:"300px" }} src={logo} alt="" />
				<p>System manager login page</p>
			
			</div>
		</div>
	</div>
</div>

<footer>

</footer>
</center>
</div>
  //   <div
  
  //     style={{
  //       backgroundImage: `url("https://images.pexels.com/photos/370799/pexels-photo-370799.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")`,
  //       backgroundSize:"cover",
  //       height:"150vh",
        
  //     }}

  //   >
  //     <div className="ms-4">
  //       <h1>Login</h1>
  //       <center>
  //     <img  src={logo} alt="" />
  //       </center>
  //       <Form style={{alignItems:"center" , marginLeft:"350px"}} className="mt-5" onSubmit={login}>
          
  //         <Form.Group as={Row} className="mb-3">
  //           <Form.Label column md="1">
  //             Email
  //           </Form.Label>
  //           <Col md="6">
  //             <Form.Control type="email" name="email" required />
  //           </Col>
  //         </Form.Group>
  //         <Form.Group as={Row} className="mb-3">
  //           <Form.Label column md="1">
  //             Password
  //           </Form.Label>
  //           <Col md="6">
  //             <Form.Control type="password" name="password" required />
  //           </Col>
  //         </Form.Group>
          

  //         <Form.Group as={Row} className="my-4">
  //           <Col md={{ span: 10, offset: 2 }}>
  //             {/* <Button style={{marginLeft:"150px" , width:"100px"}} type="submit">Login
  //             < LoginIcon style={{marginLeft:"10px"}}/>
  //             </Button> */}
  //              <Button style={{marginLeft:"60px"}} type="submit" variant="outline-success" size="lg" active>
  //              Login
  //              < LoginIcon style={{marginLeft:"10px"}}/>
  // </Button>{' '}
  //           </Col>
  //         </Form.Group>
  //       </Form>
  //     </div>
  //   </div>
  )
}

export default Login
