import styled from 'styled-components';

function CurationDetailContents() {
  return (
    <Wrapper>
      <h2>드므</h2>
      <p>을지로</p>
      <p className="description">포스트 내용 포스트 내용 포스트 내용 포스트 내용 포스트 내용 포스트 내용 포스트 내용</p>
    </Wrapper>
  );
}

export default CurationDetailContents;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 28px;
    font-weight: 500;
    margin-bottom: 5px;
  }
  p {
    font-size: 12px;
    margin-bottom: 5px;
  }
  .description {
    font-size: 16px;
    line-height: 24px;
    width: 100%;
    padding: 16px;
    min-height: 8rem;
  }
`;
