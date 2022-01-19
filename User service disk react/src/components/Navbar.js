import { useContext } from "react"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"
import FilmsContext from "../utils/TasksContext"
import AddIcon from '@mui/icons-material/Add';
import logo from"../assets/logo for final project.png"
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import AssignmentIcon from '@mui/icons-material/Assignment';

function NavbarItem() {
  const { logout } = useContext(FilmsContext)
  return (
    <Navbar style={{backgroundColor:"#E6E6E6"}} variant="dark" expand="lg">
      <Container>
      <Nav className="me-auto">
        <img style={{width:"100px" , position:"absolute" , top:"0" , left:"0"}} src={logo} alt="" />
            <Link style={{color:"#00394d" , marginLeft:"20px"}} className="nav-link" to="/Home">
              Service Disk{" "}
              <HomeIcon/>
          
            </Link>
              </Nav>
     

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{marginLeft:"30px"}} className="me-auto">
            <Link style={{color:"#00394d"}} className="nav-link" to="/AddNewTikts">
              Add New Tickets
              <AddIcon/>
            </Link>
          </Nav>
          {localStorage.tokenTasks ? (
            <Nav className="ms-auto">
              <Link style={{color:"#00394d"}} className="nav-link" to="/Myrequests">
              My requests
                <AssignmentIcon/>
              </Link>
              <Link style={{color:"#00394d"}} className="nav-link" to="/profile">
                Profile
                <AccountCircleIcon/>
              </Link>
              <Link style={{color:"#00394d"}} className="nav-link" to="/" onClick={logout}>
                Logout
                <LogoutIcon/>
              </Link>
            </Nav>
          ) : (
            <Nav className="ms-auto">
              <Link style={{color:"#00394d"}} className="nav-link" to="/">
                Login
              </Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarItem
