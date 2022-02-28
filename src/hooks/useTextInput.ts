import React, { useState } from 'react'

const useTextInput = (): [string, React.ChangeEventHandler<HTMLInputElement>] => {
  const [value, setValue] = useState<string>("");
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  return [value, onChange];
}

export default useTextInput