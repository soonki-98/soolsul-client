import styled, { keyframes } from 'styled-components'
import { CommonWrapper } from '@components/common'
import wineImg from '../assets/images/wine.png'
import Image from 'next/image'

function Splash() {
  return (
    <Wrapper id='splashScreen'>
      <AnimateImage src={wineImg} width={'200px'} height={'200px'} />
      <p>SOOLSUL</p>
    </Wrapper>
  )
}

export default Splash

const animate = keyframes`
  0% {margin-top: 0px;}
	20% {margin-top: 0px;}
	40% {margin-top: 10px;}
	60% {margin-top: 0px;}
	80% {margin-top: 10px;}
	100% {margin-top: 0px;}

  /* 0%{
    transform: left(2px);
    border-radius: 0px;
}
50%{ 
    border-radius: 100px;
}
100%{
    transform:left(-2px);
    border-radius: 0px;
} */

`

const Wrapper = styled(CommonWrapper)`
  background-color: #300b79;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  Image {
    animation: ${animate} 1s linear infinite;
  }

  p {
    color: white;
    font-weight: 600;
    font-size: 18px;
  }
`

const AnimateImage = styled(Image)`
  animation: ${animate} 0.7s linear infinite;
`
