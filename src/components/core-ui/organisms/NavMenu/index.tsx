import React from 'react'
import { ButtonOutlined } from '../../atoms/Button/index.styles'
import { Text } from '../../atoms/Text'
import { MenuWrapper, Wrapper } from './index.styles'
import Logo from "../../../../assets/images/logo.png"

const NavMenu = () => {
  return (
    <Wrapper>
      <img src={Logo} alt="logo" />
      <MenuWrapper>
        <Text isLight>About</Text>
        <Text isLight>Services</Text>
        <Text isLight>Portfolio</Text>
        <Text isLight>Blog</Text>
      </MenuWrapper>
      <ButtonOutlined onClick={() => console.log("CONTACT")}>Contact</ButtonOutlined>
    </Wrapper>
  )
}

export default NavMenu