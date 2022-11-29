import React from 'react';
import styled from 'styled-components';

import { BottomMenu, Box, CommonWrapper } from '@components/common';
import { CurationItem } from '@components/pages/curation';
import { useRouter } from 'next/router';

function Curation() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/curation/detail/info');
  };

  return (
    <Wrapper>
      <div className="contentsContainer">
        <h1>Soolsul 의 추천 맛집</h1>
        <ul>
          <CurationItem onClick={handleClick} />
          <CurationItem onClick={handleClick} />
        </ul>
        <Box />
      </div>
      <BottomMenu />
    </Wrapper>
  );
}

export default Curation;

const Wrapper = styled(CommonWrapper)`
  padding: 20px;

  h1 {
    margin: 30px 0;
  }

  .contentsContainer {
    padding: 15px;
    height: 100%;
    overflow: auto;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  .contentsContainer::-webkit-scrollbar {
    display: none;
  }
`;
