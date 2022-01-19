import Home from "./pages/Home"
import "./App.css"
import { Route, Routes, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import TasksContext from "./utils/TasksContext"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import { toast, ToastContainer } from "react-toastify"

import EmailVerified from "./pages/EmailVerified"
import RequestNewService from "./pages/RequestNewService"
import MyRequests from "./pages/MyRequests"

function App() {
  const [films, setFilms] = useState([])
  const [actors, setActors] = useState([])
  const [directors, setDirectors] = useState([])
  const [profile, setProfile] = useState([])
  const [category, setcategory] = useState([])

  const navigate = useNavigate()

  const getProfile = async () => {
    const response = await axios.get("http://localhost:5000/api/auth/profile", {
      headers: {
        Authorization: localStorage.tokenTasks,
      },
    })
    setProfile(response.data)
  }

  useEffect(() => {
    getProfile()
    getcategory()
  }, [])

  const login = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }

      const response = await axios.post("http://localhost:5000/api/auth/login", userBody)

      const token = response.data
      localStorage.tokenTasks = token

      getProfile()
      console.log("login success")

      navigate("/Home")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const logout = () => {
    localStorage.removeItem("tokenTasks")
    console.log("logout success")
    navigate("/")
  }

  const addTask = async (e, categoryId) => {
    e.preventDefault()
    try {
      const form = e.target
      const textBody = {
        title: form.elements.title.value,
        decscription: form.elements.decscription.value,
        // department: form.elements.department.value,
        category: categoryId,
      }
      await axios.post(`http://localhost:5000/api/tasks/NewTask`, textBody, {
        headers: {
          Authorization: localStorage.tokenTasks,
        },
      })

      getProfile()
      toast.success("add Task success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const getcategory = async () => {
    const response = await axios.get("http://localhost:5000/api/categorys", {
      headers: {
        Authorization: localStorage.tokenTasks,
      },
    })
    setcategory(response.data.filter(category=>category.type=="empolyee"))
  }

  const store = {
    login,
    logout,
    profile,
    getProfile,
    addTask,
    getcategory,
    category,
  }

  return (
    <TasksContext.Provider value={store}>
      <ToastContainer />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/AddNewTikts" element={<RequestNewService />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Myrequests" element={<MyRequests />} />

      </Routes>
    </TasksContext.Provider>
  )
}

export default App
