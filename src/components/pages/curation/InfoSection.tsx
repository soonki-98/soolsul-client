import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import Info from './Info';
import Review from './Review';
import SelectHeader from './SelectHeader';

type CategoryType = 'info' | 'review';
interface ISelectSectionProps {
  category: CategoryType;
}
function InfoSection({ category }: ISelectSectionProps) {
  const router = useRouter();

  const handleClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    console.log(target.value);
    router.push(`/curation/detail/${target.value as CategoryType}`);
  };
  return (
    <Main>
      <SelectHeader handleClickButton={handleClickButton} category={category} />
      {category === 'info' && <Info />}
      {category === 'review' && <Review />}
    </Main>
  );
}

export default InfoSection;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(85% - 250px);
`;
