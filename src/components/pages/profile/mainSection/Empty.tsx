import styled from "styled-components";

function Empty({ description }: { description: string }) {
  return (
    <Wrapper>
      <Container>
        <EmptyImage />
        <Description dangerouslySetInnerHTML={{ __html: description }} />
      </Container>
    </Wrapper>
  );
}

export default Empty;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const EmptyImage = styled.div`
  width: 130px;
  height: 130px;
  background: #d9d9d9;
`;

const Description = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.15px;
  color: #bfbfbf;
`;
