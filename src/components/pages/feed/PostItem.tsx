import { Box, ProfileImage } from "@components/common";
import styled from "styled-components";

function PostItem() {
  const description = "피드 내용 설명 피드 내용 설명 피드 내용 설명".repeat(10);
  return (
    <PostItemWrapper>
      <PostHeader>
        <WriterInfo>
          <StyledProfileImage />
          <WriterDescription>
            <p id="name">이름</p>
            <p id="location">동네/가게 위치</p>
          </WriterDescription>
        </WriterInfo>
        <Box />
      </PostHeader>
      <Image />
      <PostBottom>
        <p className="description">{description.length > 250 ? `${description.slice(0, 250)}.....` : description}</p>
        <p className="write-time">3 시간 전</p>
        <LikeWrapper>
          <div className="wrapper">
            <Box />
            <span>3</span>
          </div>
          <div className="wrapper">
            <Box />
            <span>9</span>
          </div>
        </LikeWrapper>
      </PostBottom>
    </PostItemWrapper>
  );
}

export default PostItem;

const PostItemWrapper = styled.li`
  width: 100%;
  background-color: #fff;
  padding: 16px 18px 16px 24px;
  img {
    width: 100%;
  }
`;

const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const WriterInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const WriterDescription = styled.div`
  p {
    margin: 0;
  }
  #name {
    color: #000;
  }
  #location {
    color: #595959;
    font-size: 12px;
    line-height: 16px;
  }
`;

const StyledProfileImage = styled(ProfileImage)`
  max-width: 36px;
  max-height: 36px;
  margin-right: 10px;
`;

const Image = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  background-image: url("http://www.chemicalnews.co.kr/news/photo/202106/3636_10174_4958.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  border-radius: 12px;
`;

const PostBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  margin-top: 16px;
  color: #000;
  .description {
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.1px;
  }
  .write-time {
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0.25px;
  }
`;

const LikeWrapper = styled.div`
  display: flex;
  gap: 16px;
  .wrapper {
    display: inherit;
    vertical-align: middle;
  }
  span {
    line-height: 24px;
    margin-left: 4px;
  }
`;
