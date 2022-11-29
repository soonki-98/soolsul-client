import { uuid } from '@lib/utils';
import { filterAtom } from '@recoil/map';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import styled, { css } from 'styled-components';
import closeImg from '../../../assets/icons/close.svg';
import FilterSection from './FilterSection';

function FilterMenu() {
  const [filterState, setFilterState] = useRecoilState(filterAtom);
  const filterRef = useRef<HTMLDivElement>(null);
  const moodList = ['시끌벅적한', '고급스러운', '격식있는', '이색적인', '깔끔한', '조용한', '뷰가 이쁜'];
  const drinkList = ['소주', '맥주', '와인', '칵테일', '샴페인', '위스키', '사케', '기타'];

  const closeClickOutSide = (e: MouseEvent) => {
    if (!filterRef.current) return;
    if (filterState.isOpen && !filterRef.current.contains(e.target as HTMLElement)) {
      closeFilter();
    }
  };

  const closeFilter = () => {
    setFilterState({ drinkTag: null, moodTag: null, isOpen: false });
  };

  useEffect(() => {
    document.addEventListener('click', closeClickOutSide);
    return () => document.removeEventListener('click', closeClickOutSide);
  }, [filterState.isOpen]);

  return (
    <Wrapper {...filterState} ref={filterRef}>
      <Title>
        <LogoBox onClick={closeFilter}>
          <Image src={closeImg} className="close-icon" />
        </LogoBox>
        <h1>필터</h1>
      </Title>
      <SectionWrapper>
        <FilterSection filterType="mood">
          {moodList.map((mood) => {
            return (
              <MoodFilter key={uuid()} isActive={filterState.moodTag === mood}>
                <button
                  value={mood}
                  onClick={(e) => {
                    e.stopPropagation();
                    setFilterState({ ...filterState, moodTag: mood });
                  }}
                >
                  {mood}
                </button>
              </MoodFilter>
            );
          })}
        </FilterSection>
        <FilterSection filterType="drink">
          {drinkList.map((drink) => {
            return (
              <DrinkFilter key={uuid()} isActive={filterState.drinkTag === drink}>
                <button
                  value={drink}
                  onClick={(e) => {
                    e.stopPropagation();
                    setFilterState({ ...filterState, drinkTag: drink });
                  }}
                >
                  {drink}
                </button>
              </DrinkFilter>
            );
          })}
        </FilterSection>
      </SectionWrapper>
      <ButtonWrapper>
        <Button className="cancel" onClick={closeFilter}>
          취소
        </Button>
        <Button className="submit" onClick={closeFilter}>
          적용
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default FilterMenu;

const Wrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #fafafa;
  z-index: 500;
  transition: 0.5s;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
  border-radius: 16px 16px 0px 0px;
  max-height: 80vh;
  ${({ isOpen }) => {
    if (isOpen) {
      return css`
        bottom: 0;
      `;
    } else {
      return css`
        bottom: -100%;
      `;
    }
  }}
`;

const Title = styled.header`
  position: relative;
  padding: 12px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
  color: #000;
  text-align: center;
  background: #fff;
  border-radius: 16px 16px 0px 0px;
  h1 {
    font-size: 18px;
    line-height: 24px;
    margin: 0;
  }

  .close-icon {
    position: absolute;
    top: 50%;
    left: 16px;
    z-index: 400;
    width: 18px;
    height: 18px;
  }
`;

const LogoBox = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #fff;
  left: 16px;
  border: 1px solid;
  cursor: pointer;
`;

const SectionWrapper = styled.div`
  padding: 16px;
`;

const DrinkFilter = styled.li<{ isActive: boolean }>`
  aspect-ratio: 1/1;
  background-color: #fff;
  border: 1px solid #f0f0f0;
  border-radius: 50%;
  button {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #fff;
    border: 1px solid #fff;
    color: #000;
    cursor: pointer;
    &:hover {
      color: #715ae4;
      border: 1px solid #715ae4;
    }
    ${({ isActive }) => {
      if (isActive) {
        return css`
          border: 1px solid #715ae4;
          color: #715ae4;
        `;
      } else {
        return css`
          border: 1px solid #f0f0f0;
          color: #000;
        `;
      }
    }}
  }
`;

const MoodFilter = styled.li<{ isActive: boolean }>`
  button {
    padding: 8px 16px;
    background-color: #fff;
    border-radius: 24px;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    cursor: pointer;
    &:hover {
      border: 1px solid #715ae4;
      color: #715ae4;
    }
    ${({ isActive }) => {
      if (isActive) {
        return css`
          border: 1px solid #715ae4;
          color: #715ae4;
        `;
      } else {
        return css`
          border: 1px solid #f0f0f0;
          color: #000;
        `;
      }
    }}
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

const Button = styled.button`
  width: 100%;
  padding: 14px 0;
  border-radius: 26px;
  border: 1px solid #f0f0f0;
  cursor: pointer;
  &.cancel {
    background: #f0f0f0;
    color: #000;
  }
  &.submit {
    background: #715ae4;
    color: #f0f0f0;
  }
`;
