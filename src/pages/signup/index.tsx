// src/pages/signup/index.tsx
import React from 'react'
import styled from 'styled-components'
import { CommonButton, CommonWrapper, Header } from '@components/common'
import { LoginInput } from '@components/pages/login'
import { useRouter } from 'next/router'

function Signup() {
  const router = useRouter()
  // const { loginInfo, handleChangeLoginInfo, handleLoginSubmit } = useLogin()
  // const { id, password } = loginInfo

  return (
    <Wrapper>
      <Header title={'회원가입'} />
      <LoginContainer>
        <LoginInput
          id='email'
          title={'이메일'}
          placeHolderText={'예) numble@gmail.com'}
        />
        <LoginInput
          id='password'
          title={'비밀번호'}
          placeHolderText={'영문, 숫자 조합 8~20 자리'}
        />
        <LoginInput
          id='password'
          title={'비밀번호 확인'}
          placeHolderText={'비밀번호 재입력'}
        />
        <LoginInput
          id='password'
          title={'전화번호'}
          placeHolderText={'010-0000-0000'}
        />
        <LoginInput id='password' title={'이름'} placeHolderText={'김넘블'} />
        <LoginInput
          id='password'
          title={'닉네임'}
          placeHolderText={'김넘블 챌린지'}
        />
        <CommonBtn
          onClick={() => {
            router.push('/login')
          }}
        >
          로그인
        </CommonBtn>
      </LoginContainer>
    </Wrapper>
  )
}

export default Signup

const Wrapper = styled(CommonWrapper)`
  background-color: #fff;
`

const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  padding: 20px 16px;
  // justify-content: start;
  // align-items: center;
`

const CommonBtn = styled(CommonButton)`
  position: absolute;
  bottom: 2rem;
  margin: 1rem auto;
  width: 90%;
`
