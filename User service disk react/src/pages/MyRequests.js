import { useContext } from "react"
import { Col, Container, Row, Table } from "react-bootstrap"
import Navbar from "../components/Navbar"
import ListAltIcon from "@mui/icons-material/ListAlt"
import TasksContext from "../utils/TasksContext"
import Moment from "react-moment"

function MyRequests() {
  const { profile, tasks } = useContext(TasksContext)

  return (
    <>
       <Navbar />
    <section>
  <h1>My requests
  <ListAltIcon sx={{ fontSize: 50 }} />
  
  </h1>
  <div class="tbl-header">
    <table cellpadding="0" cellspacing="0" border="0">
      <thead>
        <tr>
          <th style={{textAlign:"center"}}>itle Of The Request</th>
          <th style={{textAlign:"center"}}>Description Of The Request</th>
          <th style={{textAlign:"center"}}>Completion Rate %</th>
          <th style={{textAlign:"center"}}>Process progress</th>
          <th style={{textAlign:"center"}}>Date Of Request</th>
          <th style={{textAlign:"center"}}>Task Do</th>
        </tr>
      </thead>
    </table>
  </div>
  <div class="tbl-content">
    <table cellpadding="0" cellspacing="0" border="0">
    <tbody>
              {profile.requests?.map(request => (
                <tr style={{ color: "black" }}>
                  <td style={{textAlign:"center"}}> {request.title}</td>
                  <td style={{textAlign:"center"}}>{request.decscription}</td>
                  <td style={{textAlign:"center"}}> {request.CompletionRrate}</td>
                  <td style={{textAlign:"center"}}>{request.progress}</td>
                  <td style={{textAlign:"center"}}>
                    <Moment>
                    {request.createdDate}
                    </Moment>
                    </td>
                  {request.taskDo ? (
                    <td style={{ textAlign: "center" }}>
                      {request.taskDo.firstName} {request.taskDo.lastName}
                    </td>
                  ) : (
                    <td style={{ textAlign: "center" }}>-</td>
                  )}
                </tr>
              ))}
            </tbody>
    </table>
  </div>
</section>
      {/* <div
        style={{
          backgroundColor:"#FFF8F3",
          backgroundAttachment: "fixed",
          height: "100vh",
          backgroundSize: "cover",
        }}
      >
        <Navbar />
        <Container>
          <div style={{ marginTop: "20px" }}>
            <center>
              <h1 style={{ fontFamily: "serif", color: "#4B6587" }}>
                My requests 
                <ListAltIcon sx={{ fontSize: 50 }} />
              </h1>
            </center>
          </div>

          <Table   style={{tableLayout: "fixed", color:"white", marginLeft: "10px", marginBottom: "50px", marginTop: "30px" }}>
            <thead>
              <tr   style={{borderRadius:"30px" , backgroundColor:"#4B6587" , borderRadius:"30px"}}>
                <td style={{ textAlign: "center", width: "30%" }}>Title Of The Request</td>
                <td style={{ textAlign: "center", width: "50%" }}>Description Of The Request</td>
                <td style={{ textAlign: "center", width: "25%" }}>Completion Rate</td>
                <td style={{ textAlign: "center", width: "30%" }}>Process progress</td>
                <td style={{ textAlign: "center", width: "40%" }}>Date Of Request</td>
                <td style={{ textAlign: "center", width: "20%" }}>Task Do</td>

              </tr>
            </thead>
            <tbody>
              {profile.requests?.map(request => (
                <tr style={{ color: "black" }}>
                  <th style={{ textAlign: "center",}}> {request.title}</th>
                  <th style={{ textAlign: "center",}}>{request.decscription}</th>
                  <th style={{ textAlign: "center",}}> {request.CompletionRrate}</th>
                  <th style={{ textAlign: "center",}}>{request.progress}</th>
                  <th style={{ textAlign: "center",}}>
                    <Moment>
                    {request.createdDate}
                    </Moment>
                    </th>
                  {request.taskDo ? (
                    <th style={{ textAlign: "center" }}>
                      {request.taskDo.firstName} {request.taskDo.lastName}
                    </th>
                  ) : (
                    <th style={{ textAlign: "center" }}>-</th>
                  )}
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </div> */}
    </>
  )
}

export default MyRequests
