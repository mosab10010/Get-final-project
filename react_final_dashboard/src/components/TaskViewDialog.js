import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"

export default function TaskViewDialog(props) {
  const { open, setOpen, task } = props
  if (!task) return <h1>Loading...</h1>
  return (
    <Dialog open={open} onClose={() => setOpen(false)} hideBackdrop>
      <DialogTitle>View task</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography component="span" color="black" fontWeight="bold">
            Title:
          </Typography>
          <Typography component="p" color="black">
            {task.title}
          </Typography>
          <Typography component="span" color="black" fontWeight="bold">
            Description:
          </Typography>
          <Typography component="p" color="black">
            {task.description}
          </Typography>
          <Typography component="span" color="black" fontWeight="bold">
          demander:
          </Typography>
          <img src={task.demander.avatar} width="100%" style={{ maxHeight: 200 }} />
         
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>Disagree</Button>
        <Button onClick={() => setOpen(false)} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  )
}
