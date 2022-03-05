import React from 'react'
import NavLink from '../../atoms/NavLink'

interface Props {
  toggle: () => void;
}

const NavMenuContent: React.FC<Props> = ({ toggle }) => {
  return (
    <>
      <NavLink to="/about" onClick={toggle}>About</NavLink>
      <NavLink to="/services" onClick={toggle}>Services</NavLink>
      <NavLink to="/portfolio" onClick={toggle}>Portfolio</NavLink>
      <NavLink to="/blog" onClick={toggle}>Blog</NavLink>
    </>
  )
}

export default NavMenuContent