import styled, { css } from "styled-components";

export const Wrapper = styled.div<{
  width?: string;
}>`
  width: ${(props) => props.width || "100%"};
  position: relative;
  margin: 0 auto;
  .icon-wrapper {
    font-size: 25px;
  }
`;

export const Container = styled.div<{
  len: number;
  transition: number;
  showIndex: number;
  slideToShow: number;
}>`
  overflow: hidden;
  .carousel-wrapper {
    width: 100%;
  }
  .carousel-container {
    display: flex;
    position: relative;
    ${({ transition, len, showIndex, slideToShow }) => {
      return css`
        transition: ${transition / 1000}s;
        width: calc(${len} * 100%);
        transform: translateX(${(-showIndex * 100) / len / slideToShow}%);
      `;
    }}
  }
`;

export const ChildrenWrapper = styled.div<{
  slideToShow: number;
  len: number;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  ${({ len, slideToShow }) => {
    if (slideToShow === 1) {
      return css`
        width: 100%;
      `;
    } else {
      return css`
        width: calc(100% / ${len * slideToShow});
      `;
    }
  }}
`;
