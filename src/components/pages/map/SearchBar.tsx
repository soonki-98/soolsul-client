import { Box } from "@components/common";
import { TextInput } from "@components/Input";
import React, { useState } from "react";
import styled, { css } from "styled-components";

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");

  const handleChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <Wrapper>
      <LogoBox position="left" />
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
  position: fixed;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 500;
  width: 90%;
`;

const SearchInput = styled(TextInput)`
  width: 100%;
`;

const LogoBox = styled(Box)<{ position: "left" | "right" }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 8px;
  ${({ position }) => {
    switch (position) {
      case "left":
        return css`
          left: 8px;
        `;
      case "right":
        return css`
          right: 8px;
        `;
    }
  }}
`;
