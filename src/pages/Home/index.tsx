import React from 'react'
import NavMenu from '../../components/core-ui/organisms/NavMenu';
import useTextInput from '../../hooks/useTextInput'
import { Hero } from './index.styles';

const Home: React.FC = () => {
  const [value, onChange] = useTextInput();

  return (
    <div>
      <Hero>
        <NavMenu />
      </Hero>
     
    </div>
  )
}

export default Home