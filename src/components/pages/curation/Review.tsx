import styled from 'styled-components';
import ReviewItem from './ReviewItem';

function Review() {
  return (
    <Wrapper>
      <ReviewItem />
    </Wrapper>
  );
}

export default Review;

const Wrapper = styled.ul`
  li {
    display: flex;
    align-items: center;
    padding: 10px 16px;
  }
  p {
    font-size: 16px;
  }
`;
