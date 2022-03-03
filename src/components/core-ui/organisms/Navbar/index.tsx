import React from 'react'
import { ButtonOutlined } from '../../atoms/Button/index.styles'
import { NavMenu, Nav, Bars, NavLink } from './index.styles'
import Logo from "../../../../assets/images/logo.png"
import { NavLink as Link  } from "react-router-dom";

const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/">
        <img src={Logo} alt="logo" />
      </NavLink>
      <NavMenu>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </NavMenu>
      <Link to="/contact">
        <ButtonOutlined>Contact</ButtonOutlined>
      </Link>
      <Bars />
    </Nav>
  )
}

export default Navbar;