import styled, { css } from 'styled-components';

interface IFilterSectionProps {
  filterType: 'mood' | 'drink';
  children: React.ReactNode;
}

function FilterSection({ filterType, children }: IFilterSectionProps) {
  return (
    <Wrapper>
      <FilterName>{filterType === 'mood' ? '술집 분위기' : '술 종류'}</FilterName>
      <FilterList filterType={filterType}>{children}</FilterList>
    </Wrapper>
  );
}

export default FilterSection;

const Wrapper = styled.section`
  padding: 8px 0 24px 0;
  border-bottom: 0.5px solid #d9d9d9;
`;

const FilterName = styled.h2`
  margin: 0;
  color: #000;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

const FilterList = styled.ul<{ filterType: 'mood' | 'drink' }>`
  margin-top: 16px;
  ${({ filterType }) => {
    switch (filterType) {
      case 'drink':
        return css`
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 26px;
        `;
      case 'mood':
        return css`
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        `;
      default:
        return css`
          gap: 12px;
        `;
    }
  }}
`;
