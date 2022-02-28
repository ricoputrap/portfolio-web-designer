import React from 'react'
import { ButtonPrimary, ButtonPrimaryDark, ButtonSecondary, ButtonSecondaryDark } from '../../components/core-ui/atoms/Button';
import TextInput from '../../components/core-ui/atoms/TextInput'
import useTextInput from '../../hooks/useTextInput'

const Home: React.FC = () => {
  const [value, onChange] = useTextInput();

  return (
    <div>
      <TextInput value={value} onChange={onChange} />
      <ButtonSecondaryDark onClick={() => console.log("haha")}>
        Makan
      </ButtonSecondaryDark>
    </div>
  )
}

export default Home