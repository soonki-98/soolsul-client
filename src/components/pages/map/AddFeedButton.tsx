import styled from "styled-components";

function AddFeedButton() {
  return <StyledButton onClick={() => alert("피드 작성 페이지 나올거임")} />;
}

export default AddFeedButton;

const StyledButton = styled.button`
  position: fixed;
  bottom: 80px;
  right: 16px;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background-color: #727272;
  border: none;
  z-index: 200;
  cursor: pointer;
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 24px;
    height: 24px;
    background-color: #ffdada;
    z-index: 201;
  }
`;
