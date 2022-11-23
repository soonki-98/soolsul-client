import styled from 'styled-components'
import { useRouter } from 'next/router'

type headerType = {
  title: string
}

function Header({ title }: headerType) {
  const router = useRouter()

  const handleClick = () => {
    // 이전 페이지로 이동
    router.back()
  }

  return (
    <Wrapper>
      <button className='backButtonIcon' onClick={handleClick} />
      <p>{title}</p>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.div`
  border-bottom: 1px solid #d9d9d9;
  width: 100%;
  height: 48px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    position: absolute;
    left: 10px;
    padding: 10px;
    background-color: pink;
    border: none;
  }

  p {
    font-size: 18px;
  }
`
