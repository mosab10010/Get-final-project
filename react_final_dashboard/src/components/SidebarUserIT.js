import * as React from "react"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import CssBaseline from "@mui/material/CssBaseline"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import List from "@mui/material/List"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import InboxIcon from "@mui/icons-material/MoveToInbox"
import MailIcon from "@mui/icons-material/Mail"
import AssignmentIcon from "@mui/icons-material/Assignment"
import AddReactionIcon from "@mui/icons-material/AddReaction"
import RecentActorsIcon from "@mui/icons-material/RecentActors"
import GroupIcon from "@mui/icons-material/Group"
import TheatersIcon from "@mui/icons-material/Theaters"
import { createTheme, ThemeProvider } from "@mui/material"
import { Link } from "react-router-dom"
import LoginIcon from "@mui/icons-material/Login"
import GroupAddIcon from "@mui/icons-material/GroupAdd"
import { useContext } from "react"
import AppsIcon from "@mui/icons-material/Apps"
import HomeIcon from "@mui/icons-material/Home"
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted"
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle"
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline"
import TasksContext from "../utils/TasksContext"

const drawerWidth = 240

export default function PermanentDrawerLeft() {
  const { logout, profile } = useContext(TasksContext)
  if(!profile)return null
  return (
    <ThemeProvider
      theme={createTheme({
        components: {
          MuiListItemButton: {
            defaultProps: {
              disableTouchRipple: true,
            },
          },
        },
        palette: {
          mode: "light",
          primary: { main: "rgb(0, 0, 0)" },
          background: { paper: "#FFFAFA" },
        },
      })}
    >
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          <ListItem>
            <ListItemIcon>
              <AppsIcon />
            </ListItemIcon>
            <ListItemText primary="service Disk" sx={{ color: "black", textDecoration: "none" }} />
          </ListItem>
        </List>
        <List>
          <Link to="/Home" style={{ textDecoration: "none" }}>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" sx={{ color: "black", textDecoration: "none" }} />
            </ListItem>
          </Link>
        </List>
        <List>
          <Link to="/taskUserIT" style={{ textDecoration: "none" }}>
            <ListItem button>
              <ListItemIcon>
                <FormatListBulletedIcon />
              </ListItemIcon>
              <ListItemText primary="All employee requests" sx={{ color: "black", textDecoration: "none" }} />
            </ListItem>
          </Link>
        </List>
        <List>
          <Link to="/taskBossFromUserIT" style={{ textDecoration: "none" }}>
            <ListItem button>
              <ListItemIcon>
                <FormatListBulletedIcon />
              </ListItemIcon>
              <ListItemText primary="Tasks by the manager" sx={{ color: "black", textDecoration: "none" }} />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <center>
            <img class="rounded-circle" width={80} src={profile.avatar} data-holder-rendered="true" />
            <p>{profile.firstName}</p>
            <p>{profile.lastName}</p>
          </center>
        </List>
        {!localStorage.tokenDashboardTasks ? (
          <List style={{ marginTop: "auto" }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <ListItem button>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>

                <ListItemText primary="login" sx={{ color: "black", textDecoration: "none" }} />
              </ListItem>
            </Link>
          </List>
        ) : (
          <List style={{ marginTop: "auto" }}>
            <ListItem button onClick={logout}>
              <ListItemIcon>
                <LoginIcon />
              </ListItemIcon>

              <ListItemText primary="loguot" sx={{ color: "black", textDecoration: "none" }} />
            </ListItem>
          </List>
        )}
      </Drawer>
    </ThemeProvider>
  )
}
