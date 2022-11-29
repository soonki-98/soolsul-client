import { CommonButton, CommonWrapper } from '@components/common';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Splash from './splash';

const Home: NextPage = () => {
  const router = useRouter();
  const [isFirstTime, setIsFirstTime] = useState(true);

  useEffect(() => {
    // 앱 시작하자마자 sessionstorage 확인해서 isFirstTime 존재하는지 체크
    if (sessionStorage.getItem('isFirstTime') === null) {
      sessionStorage.setItem('isFirstTime', 'false');
      console.log('퍼스트 타임');
      setTimeout(() => {
        setIsFirstTime(false);
      }, 1500);
    } else {
      setIsFirstTime(false);
      console.log('퍼스트 타임 아님');
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.removeItem('GeoLocation');
  }, []);

  return (
    <Wrapper>
      {isFirstTime ? (
        <Splash />
      ) : (
        <>
          <HomeContainer>
            <div className="logo">LOGO</div>
            <div className="buttonBox">
              <CommonBtn
                onClick={() => {
                  router.push('map');
                }}
              >
                게스트로 들어가기
              </CommonBtn>
              <CommonBtn
                onClick={() => {
                  router.push('login');
                }}
              >
                로그인
              </CommonBtn>
            </div>
          </HomeContainer>
        </>
      )}
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled(CommonWrapper)`
  background-color: #fff;
`;

const HomeContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;

  .logo {
    margin: 3rem;
    width: 13rem;
    height: 13rem;
    background: #e6e6e6;
    text-align: center;
    position: absolute;
    top: 13rem;
  }

  .buttonBox {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 6rem;
  }

  button {
    width: 358px;
    border-radius: 25px;
    border: none;
    background: #5f3dc4;
    color: #fff;
    font-weight: 700;
    font-size: 14px;
    height: 52px;
  }
`;

const CommonBtn = styled(CommonButton)`
  margin: 10px 0px;
`;
