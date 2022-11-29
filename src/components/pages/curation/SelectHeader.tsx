import React from 'react';
import styled, { css } from 'styled-components';

type CategoryType = 'info' | 'review';

interface ISelectHeaderProps {
  handleClickButton: (e: React.MouseEvent<HTMLButtonElement>) => void;

  category: CategoryType;
}
function SelectHeader({ category, handleClickButton }: ISelectHeaderProps) {
  return (
    <CategorySection>
      <CategoryButton value="info" onClick={handleClickButton} isActive={category === 'info'}>
        정보
      </CategoryButton>
      <CategoryButton value="review" onClick={handleClickButton} isActive={category === 'review'}>
        피드
      </CategoryButton>
    </CategorySection>
  );
}

export default SelectHeader;

const CategorySection = styled.div`
  display: flex;
`;

const CategoryButton = styled.button<{ isActive: boolean }>`
  width: 100%;
  padding: 12px 0;
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
