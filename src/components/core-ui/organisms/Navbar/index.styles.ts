import styled from "styled-components";
import { ButtonOutlined } from '../../atoms/Button/index.styles'
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
  background: #28293E;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 16px 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    padding: 16px 23px;

    ${ButtonOutlined} {
      display: none;
    }
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 45%;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
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

export const NavToggle = styled.div`
  & svg {
    display: none;
    color: #FFFFFF;

    @media only screen and (max-width: 768px) {
      display: block;
      font-size: 16px;
      padding: 16px;
      border: 1px solid rgba(255, 255, 255, 0.2957);
      border-radius: 6px;
      cursor: pointer;
    }
  }
`;