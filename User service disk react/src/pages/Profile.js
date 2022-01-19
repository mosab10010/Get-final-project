import { useContext } from "react"
import { Col, Container, Row, Table } from "react-bootstrap"
import Navbar from "../components/Navbar"

import TasksContext from "../utils/TasksContext"

function Profile() {
  const { profile, tasks } = useContext(TasksContext)
  
  const tasksNotFinished = profile.requests?.filter(
    task => task.progress !== "The request has been completed successfully"
  )
  const tasksFinished = profile.requests?.filter(task => task.progress == "The request has been completed successfully")

  return (
    <div>
      <Navbar />
      <div class="container">
        <div class="main-body">
          <br />

          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img
                      src={profile.avatar}
                      alt="Admin"
                      class="rounded-circle"
                      width="150"
                    />
                    <div class="mt-3">
                      <h4>{profile.firstName}</h4>
                      <p class="text-secondary mb-1">{profile.department}</p>
                      <p class="text-muted font-size-sm">Tuwaiq Academy</p>
                     
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mt-3">
                
              </div>
            </div>
            <div class="col-md-8">
              <div class="card mb-3">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Full Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">{profile.firstName} {profile.lastName}</div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">{profile.email}</div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">department</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">{profile.department}</div>
                  </div>
                  <hr />
                  
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Address</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">Riyadh, Tuwaiq Academy</div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-12">
                     
                    </div>
                  </div>
                </div>
              </div>

              <div class="row gutters-sm">
                <div class="col-sm-6 mb-3">
                  <div class="card h-100">
                    <div class="card-body">
                      <h6 class="d-flex align-items-center mb-3">
                        <i class="material-icons text-info mr-2">My requests</i>
                      </h6>
                      <small> my requests</small>
                      <div class="progress mb-3">
                    

                        <p style={{textAlign:"center" , marginLeft:"150px"}}>{profile.requests?.length}</p>
                    
                        
                      </div>
                      <small>completed</small>
                      <div class="progress mb-3">
                      <p style={{textAlign:"center" , marginLeft:"150px"}}>{tasksFinished?.length}</p>
                        <div
                          class="progress-bar bg-primary"
                          role="progressbar"
                         
                          aria-valuenow="72"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <small>Processing</small>
                      <div class="progress mb-3" >
                      <p style={{textAlign:"center" , marginLeft:"150px"}}>{tasksNotFinished?.length}</p>
                        <div
                          class="progress-bar bg-primary"
                          role="progressbar"
                        
                          aria-valuenow="89"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                     
                     
                      
                    </div>
                  </div>
                </div>
                
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    
  )
}

export default Profile
