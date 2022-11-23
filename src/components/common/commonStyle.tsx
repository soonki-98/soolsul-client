import styled from 'styled-components'

export const CommonWrapper = styled.div`
  left: 50%;
  transform: translateX(-50%);
  max-width: 480px;
  position: relative;
  overflow: hidden;
  height: 100vh;
`;

export const Box = styled.div`
  width: 24px;
  height: 24px;
  background-color: #ffdada;
`;

export const CommonButton = styled.button`
  width: 100%;
  padding: 15px 25px;
  margin: 10px;
  border-radius: 25px;
  border: none;
  background: #5f3dc4;
  color: #fff;
  font-weight: 700;
  font-size: 14px;
`;
