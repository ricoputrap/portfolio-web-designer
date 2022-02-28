import React from 'react'
import { ButtonPrimary } from '../../components/core-ui/atoms/Button';
import { Heading1, Heading5 } from '../../components/core-ui/atoms/Headings';
import { Text } from '../../components/core-ui/atoms/Text';
import NavMenu from '../../components/core-ui/organisms/NavMenu';
import useTextInput from '../../hooks/useTextInput'
import { Hero } from './index.styles';
import HeroImage from "../../assets/images/pic.png";

const Home: React.FC = () => {
  const [value, onChange] = useTextInput();

  return (
    <div>
      <Hero>
        <NavMenu />
        <div className="hero__wrapper">
          <div className="hero__wrapper__text">
            <Heading5>GABRIEL PIRES</Heading5>
            <Heading1 isLight>The Simple, Clean Design</Heading1>
            <Text isLightGray>Agency provides a full service range including technical skills, design, business understanding.</Text>
            <ButtonPrimary onClick={() => console.log("")}>See My Work</ButtonPrimary>
          </div>
          <div>
            <img src={HeroImage} alt="hero-image" />
          </div>
        </div>
      </Hero>
     
    </div>
  )
}

export default Home