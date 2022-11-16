import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import Header from "./Header";
import MyFavorite from "./MyFavorite";
import MyPost from "./MyPost";
import MyReply from "./MyReply";

type CategoryType = "post" | "reply" | "favorite";
interface IMainSectionProps {
  category: CategoryType;
}
function MainSection({ category }: IMainSectionProps) {
  const router = useRouter();

  const handleClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    router.push(`/mypage/${target.value as CategoryType}`);
  };

  return (
    <Main>
      <Header handleClickButton={handleClickButton} category={category} />
      {category === "post" && <MyPost />}
      {category === "reply" && <MyReply />}
      {category === "favorite" && <MyFavorite />}
    </Main>
  );
}

export default MainSection;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(85% - 140px);
`;
