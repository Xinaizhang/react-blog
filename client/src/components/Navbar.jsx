//Navbar.jsx
import {
  Link,
} from "react-router-dom";
import React from 'react'
import Logo from "../img/logo.png"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <img src={Logo} alt="" />
        </div>
        <div className='links'>
          <Link className='link' to="/?cat=art">
            <h6>ART</h6>
          </Link>
          <Link className='link' to="/?cat=art">
            <h6>SCIENCE</h6>
          </Link>
          <Link className='link' to="/?cat=art">
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className='link' to="/?cat=art">
            <h6>DESIGN</h6>
          </Link>

          <span>Xinai</span>
          <span>Logout</span>
          <span className="write">
            <Link className='link' to="/write">Write</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar