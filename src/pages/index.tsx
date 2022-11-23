import { CommonButton, CommonWrapper } from '@components/common'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Splash from './splash'

const Home: NextPage = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    window.localStorage.removeItem('GeoLocation')
  }, [])
  return (
    <Wrapper>
      {isLoading ? (
        <Splash />
      ) : (
        <>
          <HomeContainer>
            <div className='logo'>LOGO</div>
            <CommonBtn
              onClick={() => {
                router.push('map')
              }}
            >
              게스트로 들어가기
            </CommonBtn>
            <CommonBtn
              onClick={() => {
                router.push('login')
              }}
            >
              로그인
            </CommonBtn>
          </HomeContainer>
        </>
      )}
    </Wrapper>
  )
}

export default Home

const Wrapper = styled(CommonWrapper)`
  background-color: #fff;
`

const HomeContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo {
    margin: 3rem;
    min-width: 13rem;
    min-height: 13rem;
    background: #e6e6e6;
    text-align: center;
  }

  button {
    width: 75%;
    padding: 15px 25px;
    margin: 10px;
    border-radius: 25px;
    border: none;
    background: #5f3dc4;
    color: #fff;
    font-weight: 700;
    font-size: 14px;
  }
`

const CommonBtn = styled(CommonButton)``
