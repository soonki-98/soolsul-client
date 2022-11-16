import { BottomMenu, CommonWrapper } from "@components/common";
import { ProfileHeader, ProflieUserInfo } from "@components/pages/profile";
import { ProfileMain } from "@components/pages/profile/mainSection";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

type CategoryType = "post" | "reply" | "favorite";

function MyPage() {
  const [category, setCategory] = useState<CategoryType>("post");
  const router = useRouter();

  useEffect(() => {
    try {
      setCategory(router.query.category as CategoryType);
    } catch (err) {
      alert(err);
      setCategory("post");
    }
  }, [router]);

  return (
    <Wrapper>
      <ProfileHeader />
      <ProflieUserInfo />
      <ProfileMain category={category} />
      <BottomMenu />
    </Wrapper>
  );
}

export default MyPage;

const Wrapper = styled(CommonWrapper)`
  background-color: #fff;
`;
