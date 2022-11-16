import { BottomMenu, CommonWrapper, ProfileImage } from "@components/common";
import { useRouter } from "next/router";
import styled from "styled-components";

function Edit() {
  const router = useRouter();
  const handleSubmit = () => {
    router.back();
  };
  return (
    <Wrapper>
      <Header>
        <PinkButton />
        <p>프로필 편집</p>
        <button className="complete" onClick={handleSubmit}>
          완료
        </button>
      </Header>
      <ProfileImageSection>
        <ProfileImage />
        <button>사진 변경하기</button>
      </ProfileImageSection>
      <EditUserInfoSection>
        <div className="nickname">
          <p>닉네임</p>
          <form>
            <input placeholder="닉네임" />
            <button>중복 확인</button>
          </form>
        </div>
        <div className="email">
          <p>가입 이메일</p>
          <input placeholder="닉네임" />
        </div>
      </EditUserInfoSection>
      <BottomMenu />
    </Wrapper>
  );
}

export default Edit;

const Wrapper = styled(CommonWrapper)`
  background-color: #fff;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  width: 100%;
  border-bottom: 1px solid #d9d9d9;
  p {
    margin: 0;
    font-size: 18px;
    font-weight: 500;
    color: #000;
  }
  .complete {
    color: #000;
    background: none;
    border: none;
    line-height: 20px;
    font-size: 14px;
    cursor: pointer;
  }
`;

const PinkButton = styled.button`
  width: 24px;
  height: 24px;
  background: #ffdada;
  border: none;
`;

const ProfileImageSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0;
  border-bottom: 1px solid #d9d9d9;
  img {
    margin: 0;
  }
  button {
    margin-top: 24px;
    padding: 7px 49px;
    border-radius: 15px;
    background-color: #d9d9d9;
    color: #000;
    border: none;
    cursor: pointer;
  }
`;

const EditUserInfoSection = styled.section`
  font-size: 16px;

  div {
    padding: 16px;
  }
  p {
    color: #000;
    margin: 8px 0;
  }
  form {
    display: flex;
    gap: 8px;
    button {
      width: 110px;
      padding: 10px 0;
      border-radius: 6px;
      background: #d9d9d9;
      color: #bfbfbf;
      text-align: center;
      border: none;
      cursor: pointer;
    }
  }
  input {
    border: none;
    width: 100%;
    padding: 10px 12px;
    background: #f0f0f0;
    border-radius: 6px;
    color: #000;
  }
`;
