import { filterAtom } from '@recoil/map';
import Image from 'next/image';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import filterImg from '../../../assets/icons/filter.svg';

function Header() {
  const setFilterState = useSetRecoilState(filterAtom);
  return (
    <Wrapper>
      <FilterWrapper>
        <IconButton
          className="filterIcon"
          onClick={(e) => {
            e.stopPropagation();
            setFilterState((prev) => {
              return { ...prev, isOpen: !prev.isOpen };
            });
          }}
        >
          <Image src={filterImg} />
          <span>필터</span>
        </IconButton>
      </FilterWrapper>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  position: fixed;
  gap: 16px;
  top: 0;
  width: 100%;
  padding: 16px;
  background-color: #fff;
  z-index: 100;
`;

const FilterWrapper = styled.div`
  display: flex;
`;

const IconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #000;
  border-radius: 42px;
  border: 1px solid #000;
  padding: 6px 12px;
  font-size: 12px;
  border: 0.5px solid #d9d9d9;
  background-color: #fff;
  cursor: pointer;
  img {
    width: 15px;
    height: 15px;
  }
`;
