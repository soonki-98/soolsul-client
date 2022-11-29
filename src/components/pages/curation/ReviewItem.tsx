import styled from 'styled-components';
import { ProfileImage } from '@components/common';
import Image from 'next/image';

import heartIcon from '@assets/images/curation/heart.svg';

function ReviewItem() {
  return (
    <Wrapper>
      <WriterInfo>
        <div>
          <StyledProfileImage />
          <WriterDescription>
            <p id="name">이름</p>
          </WriterDescription>
        </div>
        <div>
          <HeartIcon src={heartIcon} />
        </div>
      </WriterInfo>
      <ImageBox>
        <li>
          <ReviewImage src="https://ifh.cc/g/boqmzy.jpg" />
          <ReviewImage src="https://ifh.cc/g/boqmzy.jpg" />
          <ReviewImage src="https://ifh.cc/g/boqmzy.jpg" />
          <ReviewImage src="https://ifh.cc/g/boqmzy.jpg" />
        </li>
      </ImageBox>
      <ReviewText>피드 내용 피드 내용 피드 내용</ReviewText>
      <hr />
    </Wrapper>
  );
}

export default ReviewItem;

const Wrapper = styled.div`
  padding: 16px 0px;

  li {
    display: flex;
    align-items: center;
    padding: 10px 16px;
  }
  p {
    font-size: 16px;
  }
  hr {
    height: 0.8px;
    background-color: #d9d9d9;
    border: none;
  }
`;

const WriterInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    margin: 0 16px;
  }
`;

const StyledProfileImage = styled(ProfileImage)`
  width: 36px;
  height: 36px;
  margin-right: 5px;
  border: none;
`;

const WriterDescription = styled.div`
  p {
    margin: 0;
  }
  #name {
    color: #000;
    font-size: 14px;
  }
`;

const HeartIcon = styled(Image)`
  width: 22px;
  height: 22px;
  justify-self: flex-end;
`;

const ImageBox = styled.ul`
  display: flex;
  align-items: center;
  overflow-x: auto;
  padding: 10px 0 10px 16px;
  &::-webkit-scrollbar {
    display: none;
  }

  li {
    padding: 5px 0;
  }
`;

const ReviewImage = styled.img`
  width: 128px;
  height: 128px;
  object-fit: cover;
  border-radius: 6px;
  padding: 0;
  margin: 0;
  margin-right: 8px;
`;

const ReviewText = styled.p`
  margin: 0 16px;
  padding: 3px 0;
  font-size: 16px;
`;
