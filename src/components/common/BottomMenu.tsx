import { CategoryType } from "@lib/types";
import dynamic from "next/dynamic";
import React from "react";
import styled from "styled-components";
import Category from "../pages/map/Category";

function BottomMenu() {
  return (
    <Wrapper>
      <CategoryWrapper>
        <Category value={CategoryType.CategoryEnum.MAP} />
        <Category value={CategoryType.CategoryEnum.CURATION} />
        <Category value={CategoryType.CategoryEnum.FEED} />
        <Category value={CategoryType.CategoryEnum.MY_PAGE} />
      </CategoryWrapper>
    </Wrapper>
  );
}

export default dynamic(() => Promise.resolve(BottomMenu), { ssr: false });

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  border-radius: 6px 6px 0 0;
  background-color: #fff;
  transform: translateX(-50%);
  z-index: 500;
  left: 50%;
  top: calc(var(--vh, 1vh) * 100 - 70px);
`;

const CategoryWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  box-shadow: 1px 4px 10px 1px #c4c4c4af;
`;
