import { Line, ProfileImage } from "@components/common";
import { useRouter } from "next/router";
import styled from "styled-components";

function UserInfo() {
  const router = useRouter();

  const handleClickButton = () => {
    router.push("/mypage/edit");
  };
  return (
    <Wrapper>
      <ProfileImage src="http://www.chemicalnews.co.kr/news/photo/202106/3636_10174_4958.jpg" />
      <StyledUserInfo>
        <div className="nickname">
          <p>닉네임</p>
        </div>
        <div className="following">
          <p>팔로워 n명</p>
          <Line direction="vertical" thickness={0.5} width={14} />
          <p>팔로잉 n명</p>
        </div>
        <button onClick={handleClickButton}>프로필 편집</button>
      </StyledUserInfo>
    </Wrapper>
  );
}

export default UserInfo;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 15%;
  padding: 16px;
`;

const StyledUserInfo = styled.section`
  width: 60%;
  p {
    margin: 0;
  }
  .nickname {
    color: #000;
    margin: 4px 0;
  }
  .following {
    display: flex;
    align-items: center;
    color: #595959;
    margin-bottom: 16px;
    hr {
      margin: 0 8px;
    }
  }
  button {
    width: 100%;
    padding: 7px 0;
    border-radius: 15px;
    background-color: #d9d9d9;
    color: #000;
    border: none;
    cursor: pointer;
  }
`;
