import React, { useState } from 'react'
import { ButtonOutlined } from '../../atoms/Button/index.styles'
import { NavMenu, Nav, NavToggle } from './index.styles'
import Logo from "../../../../assets/images/logo.png"
import { NavLink as Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import NavMenuContent from '../../molecules/NavMenuContent';
import { NavLink } from '../../molecules/NavMenuContent/index.styles';
import NavMenuMobile from '../../molecules/NavMenuMobile';

const Navbar = () => {
  const [isBarClicked, setIsBarClicked] = useState<boolean>(false);
  const toggleNav = () => setIsBarClicked(!isBarClicked);

  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={Logo} alt="logo" />
        </NavLink>

        <NavMenu>
          <NavMenuContent toggle={toggleNav} />
        </NavMenu>

        <Link to="/contact">
          <ButtonOutlined>Contact</ButtonOutlined>
        </Link>

        <NavToggle onClick={toggleNav}>
          {isBarClicked ? <FaTimes /> : <FaBars />}
        </NavToggle>
      </Nav>
      
      <NavMenuMobile open={isBarClicked}>
        <NavMenuContent toggle={toggleNav} />
      </NavMenuMobile>
    </>
  )
}

export default Navbar;