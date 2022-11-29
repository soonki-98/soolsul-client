import React from 'react';
import styled from 'styled-components';
import { CommonButton, CommonWrapper } from '@components/common';
import { LoginInput } from '@components/pages/login';
import { useLogin } from '@hooks/pages/login';

function Login() {
  const { loginInfo, handleChangeLoginInfo, handleLoginSubmit } = useLogin();
  const { email, password } = loginInfo;

  console.log(Object.values(loginInfo).includes(''));

  const handleClick = () => {
    if (Object.values(loginInfo).includes('')) {
      alert('로그인에 필요한 모든 정보를 입력해주세요');
    } else {
      handleLoginSubmit();
    }
  };

  return (
    <Wrapper>
      <LoginContainer>
        <div className="logoBox">로고 마크</div>
        <LoginInput
          id="email"
          title={'이메일'}
          placeHolderText={'예) numble@gmail.com'}
          onChange={handleChangeLoginInfo}
          value={email}
          invalidText={''}
          errorPart={'email'}
        />
        <LoginInput
          id="password"
          title={'비밀번호'}
          placeHolderText={'영문, 숫자 조합 8~20 자리'}
          onChange={handleChangeLoginInfo}
          value={password}
          invalidText={''}
          errorPart={'password'}
        />
        <CommonBtn onClick={handleClick}>로그인</CommonBtn>
      </LoginContainer>
    </Wrapper>
  );
}

export default Login;

const Wrapper = styled(CommonWrapper)`
  background-color: #fff;
`;

const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  padding: 16px;

  .logoBox {
    width: 100%;
    height: 5rem;
    background: #cec1f4;
    text-align: center;
    margin: 3rem auto;
  }
`;

const CommonBtn = styled(CommonButton)`
  margin: 3rem auto;
  width: 100%;
`;
