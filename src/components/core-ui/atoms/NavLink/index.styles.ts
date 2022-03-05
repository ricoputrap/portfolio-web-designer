import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";


export const StyledLink = styled(Link)`
  font-family: 'Epilogue', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  color: #FFFFFF;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  
  &.active {
    color: #B550F8;
  }
`;