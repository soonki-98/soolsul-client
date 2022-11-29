import { Box } from '@components/common';
import { TextInput } from '@components/Input';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import searchIcon from '../../../assets/icons/search.svg';

function SearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();

  const handleChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/map/search?value=${searchValue}`);
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <LogoBox position="left">
        <Image src={searchIcon} />
      </LogoBox>
      <SearchInput
        id="search-place"
        value={searchValue}
        onChange={handleChangeSearchValue}
        placeholder="장소를 검색해 보세요"
        alt="장소 검색창"
      />
      <LogoBox position="right" />
    </Wrapper>
  );
}

export default SearchBar;

const Wrapper = styled.form`
  position: relative;
  z-index: 500;
  width: 100%;
`;

const SearchInput = styled(TextInput)`
  width: 100%;
  border-radius: 24px;
  background: #f5f5f5;
  border: 1px solid;
`;

const LogoBox = styled(Box)<{ position: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 8px;
  background: #f5f5f5;
  ${({ position }) => {
    switch (position) {
      case 'left':
        return css`
          left: 8px;
        `;
      case 'right':
        return css`
          right: 8px;
        `;
    }
  }}
`;
