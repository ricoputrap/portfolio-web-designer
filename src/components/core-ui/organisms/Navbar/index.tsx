import React, { useState } from 'react'
import { ButtonOutlined } from '../../atoms/Button/index.styles'
import { NavMenu, Nav, NavLink, NavToggle } from './index.styles'
import Logo from "../../../../assets/images/logo.png"
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im"

const Navbar = () => {
  const [isBarClicked, setIsBarClicked] = useState<boolean>(false);
  const toggleNav = () => setIsBarClicked(isBarClicked);

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

      <NavToggle onClick={toggleNav}>
        {isBarClicked ? <ImCross /> : <FaBars />}
      </NavToggle>

    </Nav>
  )
}

export default Navbar;