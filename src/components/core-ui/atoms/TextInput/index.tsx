import React from 'react'
import { Input, Wrapper } from './index.styles';

interface Props {
  width?: string;
  placeholder?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const TextInput: React.FC<Props> = ({ width, value, onChange, placeholder = "Placeholder" }) => {

  return (
    <Wrapper width={width}>
      <Input value={value} onChange={onChange} type="text" placeholder={placeholder} />
    </Wrapper>
  )
}

export default TextInput