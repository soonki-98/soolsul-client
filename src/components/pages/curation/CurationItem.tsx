import styled from 'styled-components';
import storeImg from '@assets/images/curation/storeIcon.png';
import Image from 'next/image';
import { TagItem } from '@components/pages/curation';

interface ICurationProps {
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

function CurationItem({ onClick }: ICurationProps) {
  const imageSrc = 'https://ifh.cc/g/cLxwJ4.jpg';

  return (
    <PostItemWrapper onClick={onClick}>
      <div className="coverBox"></div>
      <CurationImage src={imageSrc} />
      <ContentBox>
        <p className="title">드므</p>
        <ul>
          <TagItem />
          <TagItem />
        </ul>
        <p className="description">포스트 내용 포스트 내용 포스트 내용 포스트 내용</p>
      </ContentBox>
      <StoreBtnBox>
        <StoreIcon src={storeImg} width={'16px'} />
      </StoreBtnBox>
    </PostItemWrapper>
  );
}

export default CurationItem;

const PostItemWrapper = styled.li`
  width: 100%;
  height: 450px;
  margin: 16px 0;
  border-radius: 20px;
  position: relative;

  .coverBox {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgb(0, 0, 0, 0), rgb(0, 0, 0, 0.8));
    border-radius: 20px;
  }
`;

const CurationImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
`;

const ContentBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  bottom: 20px;
  padding: 10px 24px;
  color: #fff;

  .title {
    font-size: 24px;
    font-weight: 500;
  }

  ul {
    display: flex;
    padding: 8px 0;
    color: #000;
  }

  .description {
    font-size: 16px;
  }
`;

const StoreBtnBox = styled.div`
  position: absolute;
  top: 17px;
  right: 20px;
  display: flex;
  justify-content: 'center';
`;

const StoreIcon = styled(Image)`
  width: 16px;
  height: 22px;
`;
