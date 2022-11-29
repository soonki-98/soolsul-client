import React from 'react';
import styled, { css } from 'styled-components';

interface ILineProps {
  direction?: 'vertical' | 'horizontal';
  thickness?: number;
  width?: number | string;
  color?: string;
  attrs?: React.HTMLAttributes<HTMLHRElement>;
}

const Line = styled.hr<ILineProps>`
  margin: 0;
  ${({ direction }) => {
    switch (direction) {
      case 'vertical':
        return css`
          transform: rotate(90deg);
        `;
    }
  }}
  ${({ thickness, width, color }) => {
    return css`
      height: ${thickness || 1}px;
      width: ${width || 10}px;
      background-color: ${color || '#000'};
    `;
  }}
`;

export default Line;
