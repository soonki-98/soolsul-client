import { CategoryType } from "@lib/types";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

interface ICategoryProps {
  value: CategoryType.CategoryEnum;
}

const CATEGORY_NAME = {
  1: "지도",
  2: "큐레이션",
  3: "피드",
  4: "마이 페이지",
};

function Category({ value }: ICategoryProps) {
  const router = useRouter();

  const handleRoute = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget as HTMLButtonElement;

    switch (Number(target.value)) {
      case CategoryType.CategoryEnum.MAP:
        router.push("/map");
        break;
      case CategoryType.CategoryEnum.CURATION:
        router.push("/curation");
        break;
      case CategoryType.CategoryEnum.FEED:
        router.push("/feed");
        break;
      case CategoryType.CategoryEnum.MY_PAGE:
        router.push("/mypage/post");
        break;
    }
  };

  return (
    <CategoryButton value={value} onClick={handleRoute}>
      <Icon />
      <p>{CATEGORY_NAME[value]}</p>
    </CategoryButton>
  );
}

export default Category;

const CategoryButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 18px 10px;
  background: none;
  border: none;
  max-height: 70px;
  cursor: pointer;
  p {
    margin: 0;
    color: #000;
    font-size: 12px;
  }
`;

const Icon = styled.div`
  width: 24px;
  height: 24px;
  background-color: #ffdada;
`;
