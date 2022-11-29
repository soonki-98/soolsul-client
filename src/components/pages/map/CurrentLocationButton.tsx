import Image from 'next/image';
import styled from 'styled-components';
import locationImg from '../../../assets/icons/location.svg';

function CurrentLocationButton({ onClick }: { onClick: () => void }) {
  return (
    <StyledButton onClick={onClick}>
      <Image src={locationImg} />
    </StyledButton>
  );
}

export default CurrentLocationButton;

const StyledButton = styled.button`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 80px;
  right: 16px;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background-color: #ffffff;
  border: none;
  z-index: 200;
  cursor: pointer;
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 24px;
    height: 24px;
    z-index: 201;
  }
`;
