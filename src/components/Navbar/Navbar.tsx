import React from 'react'
import "./Navbar.css"
import Logo from '../../Assets/LOGO.svg'
import { BiGlobe } from "react-icons/bi"
import { BiChevronDown } from "react-icons/bi"

const Navbar = () => {
  return (
    <div className="navbar_wrapper">
      <div className="left_navItems">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <p>Home</p>
        <p>About</p>
        <p>Features</p>
      </div>
      <div className="right_navItems">
        <div className="right_navItems_left">
          <BiGlobe />
          <p>ENG</p>
          <BiChevronDown/>
        </div>
        <div className="right_navItems_right">
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar