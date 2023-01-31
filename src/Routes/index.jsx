import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Auth/Login'
import Signup from '../Auth/Signup'
import About from '../Pages/About'
import Blog from '../Pages/Blog'
import Contact from '../Pages/Contact'
import FullBlog from '../Pages/FullBlog'
import Home from '../Pages/Home'
import Notfound from '../Pages/Notfound'
import Service from '../Pages/Service'

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/about' element={<About/>} ></Route>
        <Route path='/contact' element={<Contact />} ></Route>
        <Route path='/service' element={<Service />} ></Route>
        <Route path='/blog' element={<Blog />} ></Route>
        <Route path='/signup' element={<Signup />} ></Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='*' element={<Notfound />} ></Route>
        <Route path='/fullblog' element={<FullBlog />} ></Route>
      </Routes>
    </>
  )
}

export default Routing
