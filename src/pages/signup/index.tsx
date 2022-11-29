import React from 'react';
import styled from 'styled-components';
import { CommonButton, CommonWrapper, Header } from '@components/common';
import { LoginInput } from '@components/pages/login';
import useSignup from '@hooks/pages/signup/useSignup';

function Signup() {
  const { data, invalidText, errorPart, handleSignSubmit, handleInputValue } = useSignup();
  console.log(data);
  console.log(errorPart, invalidText);

  return (
    <Wrapper>
      <Header title={'회원가입'} />
      <LoginContainer>
        <LoginInput
          id="email"
          title={'이메일'}
          placeHolderText={'예) numble@gmail.com'}
          onChange={handleInputValue}
          value={data.email}
          invalidText={invalidText}
          errorPart={errorPart}
        />
        <LoginInput
          id="password"
          title={'비밀번호'}
          placeHolderText={'영문, 숫자 조합 8~20 자리'}
          onChange={handleInputValue}
          value={data.password}
          invalidText={invalidText}
          errorPart={errorPart}
        />
        <LoginInput
          id="confirmPassword"
          title={'비밀번호 확인'}
          placeHolderText={'비밀번호 재입력'}
          onChange={handleInputValue}
          value={data.confirmPassword}
          invalidText={invalidText}
          errorPart={errorPart}
        />
        <LoginInput
          id="phoneNumber"
          title={'전화번호'}
          placeHolderText={'010-0000-0000'}
          onChange={handleInputValue}
          value={data.phoneNumber}
          invalidText={invalidText}
          errorPart={errorPart}
        />
        <LoginInput
          id="name"
          title={'이름'}
          placeHolderText={'김넘블'}
          onChange={handleInputValue}
          value={data.name}
          invalidText={invalidText}
          errorPart={errorPart}
        />

        <LoginInput
          id="nickname"
          title={'닉네임'}
          placeHolderText={'김넘블 챌린지'}
          onChange={handleInputValue}
          value={data.nickname}
          invalidText={invalidText}
          errorPart={errorPart}
        />
        <CommonBtn onClick={handleSignSubmit}>로그인</CommonBtn>
      </LoginContainer>
    </Wrapper>
  );
}

export default Signup;

const Wrapper = styled(CommonWrapper)`
  background-color: #fff;
`;

const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  padding: 20px 16px;
  // justify-content: start;
  // align-items: center;
`;

const CommonBtn = styled(CommonButton)`
  position: absolute;
  bottom: 2rem;
  margin: 1rem auto;
  width: 90%;
`;
