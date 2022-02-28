import React from 'react'
import TextInput from '../../components/core-ui/atoms/TextInput'
import useTextInput from '../../hooks/useTextInput'

const Home: React.FC = () => {
  const [value, onChange] = useTextInput();

  return (
    <div>
      <TextInput value={value} onChange={onChange} />
    </div>
  )
}

export default Home