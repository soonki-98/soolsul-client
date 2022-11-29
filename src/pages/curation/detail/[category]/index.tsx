import styled from 'styled-components';
import { BottomMenu, Line } from '@components/common';
import { CommonWrapper } from '@components/common/commonStyle';
import { CurationDetailContents } from '@components/pages/curation';
import InfoSection from '@components/pages/curation/InfoSection';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

type CategoryType = 'info' | 'review';
function Detail() {
  const imageSrc = 'https://ifh.cc/g/cLxwJ4.jpg';
  const [category, setCategory] = useState<CategoryType>('info');
  const router = useRouter();
  console.log(router);

  useEffect(() => {
    if (router.query.category) {
      setCategory(router.query.category as CategoryType);
    } else {
      setCategory('info');
    }
  }, [router]);

  return (
    <Wrapper>
      <div className="contentsContainer">
        <CurationImage src={imageSrc} />
        <CurationDetailContents />
        <Line thickness={6} width={'100%'} color={'#fafafa'} />
        <InfoSection category={category} />
      </div>
      <BottomMenu />
    </Wrapper>
  );
}

export default Detail;

const Wrapper = styled(CommonWrapper)`
  .contentsContainer {
    /* padding: 15px; */
    height: 100%;
    overflow: auto;
  }
`;

const CurationImage = styled.img`
  background-color: #d9d9d9;
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
`;
