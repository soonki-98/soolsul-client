import React from "react";
import styled, { css } from "styled-components";

type CategoryType = "post" | "reply" | "favorite";

interface IHeaderProps {
  handleClickButton: (e: React.MouseEvent<HTMLButtonElement>) => void;
  category: CategoryType;
}
function Header({ handleClickButton, category }: IHeaderProps) {
  return (
    <CategorySection>
      <CategoryButton value="post" onClick={handleClickButton} isActive={category === "post"}>
        내 게시물
      </CategoryButton>
      <CategoryButton value="reply" onClick={handleClickButton} isActive={category === "reply"}>
        내 댓글
      </CategoryButton>
      <CategoryButton value="favorite" onClick={handleClickButton} isActive={category === "favorite"}>
        관심 목록
      </CategoryButton>
    </CategorySection>
  );
}

export default Header;

const CategorySection = styled.div`
  display: flex;
`;

const CategoryButton = styled.button<{ isActive: boolean }>`
  width: 100%;
  padding: 16px 0;
  background: none;
  border: none;
  cursor: pointer;
  ${({ isActive }) => {
    if (isActive) {
      return css`
        color: #000;
        border-bottom: 2px solid #000;
      `;
    } else {
      return css`
        color: #bfbfbf;
        border-bottom: 1px solid #d9d9d9; ;
      `;
    }
  }}
`;
