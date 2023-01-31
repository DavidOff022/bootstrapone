import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
<nav className="navbar navbar-expand-lg  bg-info">
  <div className="container-fluid">
    <Link className="navbar-brand" to={"/about"}>Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to={"/"}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/blog"}>Blog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/service"}>Service</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/contact"}>Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/about"}>About</Link>
        </li>
      </ul>
      <ul className="navbar-nav  mb-2 mb-lg-0" >
      <li className="nav-item">
          <Link className="nav-link" to={"/signup"}><b>SignUp</b></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/login"}><b>LogIn</b></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
