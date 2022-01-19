import Login from "./pages/Login"
import { CssBaseline } from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios"
import { useEffect, useState } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import Sidebar from "./components/Sidebar"
import Tasks from "./pages/Tasks"

import Users from "./pages/Users"
import TasksContext from "./utils/TasksContext"
import BossTasks from "./pages/BossTasks"
import UsersEmp from "./pages/UserEmp"
import HomeBoss from "./pages/HomeBoss"
import HomeIT from "./pages/HomeIT"
import TasksUserIT from "./pages/TaskUserIT"
import TaskFromMangear from "./pages/TaskFromMangear"
import Categorys from "./pages/Categorys"
import Administration from "./pages/Administration"
function App() {
  const [tasks, setTasks] = useState([])
  const [bosstasks, setbossTasks] = useState([])
  const [users, setusers] = useState([])
  const [usersBoss, setusersBoss] = useState([])

  const [usersEmp, setusersEmp] = useState([])
  const [profile, setProfile] = useState(null)

  const [sendIT, setSendIT] = useState([])
  const [sendBossIT, setBossSendIT] = useState([])
  const [categorys, setcategorys] = useState([])

  const navigate = useNavigate()

  const getTasks = async () => {
    const response = await axios.get("http://localhost:5000/api/tasks/Alltasks")
    setTasks(response.data)
    console.log(getTasks)
  }
  const getProfile = async () => {
    const response = await axios.get("http://localhost:5000/api/auth/it/profile", {
      headers: {
        Authorization: localStorage.tokenDashboardTasks,
      },
    })
    setProfile(response.data)
    console.log(getTasks)
  }

  useEffect(() => {
    getTasks()
    getAllUsers()
    getProfile()
    getUsers()
    getcategorys()
    getBossTasks()
    getBossUsers()
  }, [])

  const AddUserIT = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const AddBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        department: form.elements.department.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        avatar: form.elements.avatar.value,
      }
      await axios.post(`http://localhost:5000/api/auth/it/signupIT`, AddBody, {
        headers: {
          Authorization: localStorage.tokenDashboardTasks,
        },
      })
      getUsers()
      toast.success("add Task success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const AddBossUserIT = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const AddBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        department: form.elements.department.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        avatar: form.elements.avatar.value,
      }
      await axios.post(`http://localhost:5000/api/auth/it/signupIT`, AddBody, {
        headers: {
          Authorization: localStorage.tokenDashboardTasks,
        },
      })
      getBossUsers()
      toast.success("add Task success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const AddCategory = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const AddBody = {
        name: form.elements.name.value,
        decscription: form.elements.decscription.value,
        post: form.elements.post.value,
        type: form.elements.type.value,
      }
      await axios.post(`http://localhost:5000/api/categorys`, AddBody, {
        headers: {
          Authorization: localStorage.tokenDashboardTasks,
        },
      })
      getcategorys()
      toast.success("add category success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const AddEmpUser = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const AddBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        department: form.elements.department.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        avatar: form.elements.avatar.value,
      }
      await axios.post(`http://localhost:5000/api/auth/signup`, AddBody, {
        headers: {
          Authorization: localStorage.tokenDashboardTasks,
        },
      })
      getUsers()
      toast.success("add Task success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const getcategorys = async () => {
    const response = await axios.get("http://localhost:5000/api/categorys")
    setcategorys(response.data)
  }

  const getBossTasks = async () => {
    const response = await axios.get("http://localhost:5000/api/tasks/Alltasks/BossIT")
    setbossTasks(response.data)
    console.log(getTasks)
  }

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/api/auth/it/usersEmpolyeeIT")
    setusers(response.data)
  }

  const getBossUsers = async () => {
    const response = await axios.get("http://localhost:5000/api/auth/it/usersBoss")
    setusersBoss(response.data)
  }

  const getAllUsers = async () => {
    const response = await axios.get("http://localhost:5000/api/auth/usersEmpolyee")
    setusersEmp(response.data)
  }
  const sendTask = async (e, taskId) => {
    e.preventDefault()
    try {
      const form = e.target
      const empolyeIT = form.elements.employeeIT.value

      // const sendBody = {
      //   firstName: form.elements.firstName.value,
      //   lastName: form.elements.lastName.value,

      // }
      const response = await axios.get(`http://localhost:5000/api/tasks/${taskId}/${empolyeIT}`, {
        headers: {
          Authorization: localStorage.tokenDashboardTasks,
        },
      })
      setSendIT(response.data)
      getTasks()

      toast.success("edit success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const sendTaskBoss = async (e, taskId) => {
    e.preventDefault()
    try {
      const form = e.target
      const empolyeIT = form.elements.employeeIT.value

      // const sendBody = {
      //   firstName: form.elements.firstName.value,
      //   lastName: form.elements.lastName.value,

      // }
      const response = await axios.get(`http://localhost:5000/api/tasks/boss/${taskId}/${empolyeIT}`, {
        headers: {
          Authorization: localStorage.tokenDashboardTasks,
        },
      })
      setBossSendIT(response.data)
      getTasks()

      toast.success("edit success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const changeProgress = async (e, taskId) => {
    e.preventDefault()
    try {
      const form = e.target
      const progressBody = {
        progress: form.elements.progress.value,
      }

      // const sendBody = {
      //   firstName: form.elements.firstName.value,
      //   lastName: form.elements.lastName.value,

      // }
      const response = await axios.put(`http://localhost:5000/api/tasks/${taskId}`, progressBody, {
        headers: {
          Authorization: localStorage.tokenDashboardTasks,
        },
      })
      getTasks()
      getProfile()

      toast.success("The Thsk change status ")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const changeBossProgress = async (e, taskId) => {
    e.preventDefault()
    try {
      const form = e.target
      const progressBody = {
        progress: form.elements.progress.value,
      }

      // const sendBody = {
      //   firstName: form.elements.firstName.value,
      //   lastName: form.elements.lastName.value,

      // }
      const response = await axios.put(`http://localhost:5000/api/tasks/Boss/${taskId}`, progressBody, {
        headers: {
          Authorization: localStorage.tokenDashboardTasks,
        },
      })
      getTasks()
      getProfile()

      toast.success("The Thsk change status ")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const changeRate = async (e, taskId) => {
    e.preventDefault()
    try {
      const form = e.target
      const rateBody = {
        CompletionRrate: form.elements.CompletionRrate.value,
      }

      // const sendBody = {
      //   firstName: form.elements.firstName.value,
      //   lastName: form.elements.lastName.value,

      // }
      const response = await axios.put(`http://localhost:5000/api/tasks/rate/${taskId}`, rateBody, {
        headers: {
          Authorization: localStorage.tokenDashboardTasks,
        },
      })
      getTasks()
      getProfile()

      toast.success("The Thsk change rate ")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const changePriority = async (e, taskId) => {
    e.preventDefault()
    try {
      const form = e.target
      const PriorityBody = {
        priority: form.elements.priority.value,
      }

      // const sendBody = {
      //   firstName: form.elements.firstName.value,
      //   lastName: form.elements.lastName.value,

      // }
      const response = await axios.put(`http://localhost:5000/api/tasks/priority/${taskId}`, PriorityBody, {
        headers: {
          Authorization: localStorage.tokenDashboardTasks,
        },
      })
      getTasks()
      getProfile()

      toast.success("The Thsk change rate ")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const addTask = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const textBody = {
        title: form.elements.title.value,
        decscription: form.elements.decscription.value,
        // department: form.elements.department.value,
        category: form.elements.category.value,
      }
      await axios.post(`http://localhost:5000/api/tasks/NewTask/BossIT`, textBody, {
        headers: {
          Authorization: localStorage.tokenDashboardTasks,
        },
      })

      getTasks()
      toast.success("add Task success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const deleteTask = async taskId => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${taskId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardTasks,
        },
      })
      toast.success("Task deleted")
      getTasks()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const deleteCategory = async CategoryId => {
    try {
      await axios.delete(`http://localhost:5000/api/categorys/${CategoryId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardTasks,
        },
      })
      toast.success("category deleted")
      getcategorys()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const deleteTaskBoss = async taskId => {
    try {
      await axios.delete(`http://localhost:5000/api/auth/it/${taskId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardTasks,
        },
      })

      toast.success("Task deleted")
      getBossTasks()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const deleteUserIT = async taskId => {
    try {
      await axios.delete(`http://localhost:5000/api/auth/it/userIT/${taskId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardTasks,
        },
      })

      toast.success("Task deleted")
      getUsers()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const login = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const adminBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }
      const response = await axios.post("http://localhost:5000/api/auth/it/login", adminBody)
      localStorage.tokenDashboardTasks = response.data
      toast.success("login success")
      getProfile()
      navigate("/Home")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const logout = () => {
    localStorage.removeItem("tokenDashboardTasks")
    navigate("/")
  }
  const store = {
    tasks,
    users,
    sendTask,
    sendTaskBoss,
    sendIT,
    sendBossIT,
    deleteTask,
    deleteTaskBoss,
    deleteUserIT,
    login,
    getBossTasks,
    bosstasks,
    addTask,
    categorys,
    AddUserIT,
    AddEmpUser,
    usersEmp,
    getAllUsers,
    profile,
    changeProgress,
    changeBossProgress,
    logout,
    AddCategory,
    changeRate,
    changePriority,
    deleteCategory,
    usersBoss,
    AddBossUserIT,
  }
  return (
    <>
      <TasksContext.Provider value={store}>
        <ToastContainer />
        <CssBaseline />
        <Box sx={{ display: "flex" }}>
          <Routes>
            <Route path="/Home" element={profile?.role === "SuperAdmin" ? <HomeBoss /> : <HomeIT />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/taskUserIT" element={<TasksUserIT />} />
            <Route path="/taskBossFromUserIT" element={<TaskFromMangear />} />
            <Route path="/categorys" element={<Categorys />} />

            <Route path="/users" element={<Users />} />
            <Route path="/Administration" element={<Administration />} />

            <Route path="/AllusersEmp" element={<UsersEmp />} />
            <Route path="/" element={<Login />} />
            <Route path="/BossTasks" element={<BossTasks />} />
          </Routes>

          <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}></Box>
        </Box>
      </TasksContext.Provider>
    </>
  )
}

export default App
