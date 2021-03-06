import React from 'react'
import { ButtonPrimary } from '../../components/core-ui/atoms/Button';
import { Heading1, Heading5 } from '../../components/core-ui/atoms/Headings';
import { Text } from '../../components/core-ui/atoms/Text';
import { ContentWrapper, Hero, ImageContainer, TextContainer } from './index.styles';
import HeroImage from "../../assets/images/pic.png";

const Home: React.FC = () => {
  return (
    <main>
      <Hero>
        <ContentWrapper>
          <TextContainer>
            <Heading5>GABRIEL PIRES</Heading5>
            <Heading1 isLight>The Simple, Clean Design</Heading1>
            <Text isLightGray>Agency provides a full service range including technical skills, design, business understanding.</Text>
            <ButtonPrimary onClick={() => console.log("")}>See My Work</ButtonPrimary>
          </TextContainer>
          <ImageContainer>
            <img src={HeroImage} alt="hero" />
          </ImageContainer>
        </ContentWrapper>
      </Hero>
     
    </main>
  )
}

export default Home