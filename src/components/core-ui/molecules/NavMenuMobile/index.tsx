import React from 'react'
import { Container, ContentWrapper } from './index.styles'

interface Props {
  open: boolean;
  children: React.ReactNode
}

const NavMenuMobile: React.FC<Props> = ({ open, children }) => {
  return (
    <Container open={open}>
      <ContentWrapper open={open}>
        {children}
      </ContentWrapper>
    </Container>
  )
}

export default NavMenuMobile