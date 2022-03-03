import React from 'react'
import { ButtonOutlined } from '../../atoms/Button/index.styles'
import { MenuText, NavMenu, Nav, Bars, NavLink } from './index.styles'
import Logo from "../../../../assets/images/logo.png"

const Navbar = () => {
  return (
    <Nav>
      {/* <NavContent> */}
        <NavLink to="/">
          <img src={Logo} alt="logo" />
        </NavLink>
        <NavMenu>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </NavMenu>
        <NavLink to="/contact">
          <ButtonOutlined>Contact</ButtonOutlined>
        </NavLink>
        <Bars />
      {/* </NavContent> */}
    </Nav>
  )
}

export default Navbar;