//// src/component/pages/login/LoginInput.tsx
import { TextInput } from '@components/Input'
import React, { useState } from 'react'
import styled from 'styled-components'

interface IInputProps {
  id: 'email' | 'password'
  title: string
  placeHolderText: string
}

function LoginInput({ id, title, placeHolderText }: IInputProps) {
  const [inputValue, setInputValue] = useState('')

  const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <Wrapper>
      <div className='title'>{title}</div>
      <Input
        id={'search' + id}
        value={inputValue}
        onChange={handleChangeInputValue}
        placeholder={placeHolderText}
        alt={'입력창'}
      />
    </Wrapper>
  )
}

export default LoginInput

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 0;
  margin: 10px;

  .title {
    margin-bottom: 10px;
    font-size: 14px;
  }
`

const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #e6e6e6;
  border-radius: 0px;
  text-align: start;
  padding: 12px 0px;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 5px;
`
