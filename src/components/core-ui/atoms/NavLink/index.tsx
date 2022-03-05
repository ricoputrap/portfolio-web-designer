import React from 'react'
import { StyledLink } from './index.styles'

interface Props {
  to: string;
  onClick?: () => void
  children: React.ReactNode
}

const NavLink: React.FC<Props> = ({ children, to = "/", onClick = () => {} }) => {
  return (
    <StyledLink 
      to={to} 
      onClick={onClick}
    >
      {children}
    </StyledLink>
  )
}

export default NavLink