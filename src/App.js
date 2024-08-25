import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import { Navbar } from './component/Navbar'
import Register from './component/Register'
import Login from './component/Login'
const App = () => {
  return (
    <>  
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
    <Route path="login" element={<Login/>} />
    <Route path="register" element={<Register />} />



   </Routes>
   </>
  )
}

export default App