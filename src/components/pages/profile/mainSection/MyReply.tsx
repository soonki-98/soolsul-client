import { Box } from "@components/common";
import styled from "styled-components";
import Empty from "./Empty";

function MyReply() {
  const arr = " ".repeat(25).split(" ");
  return (
    <>
      {arr.length === 0 ? (
        <Empty description="작성한 댓글이 없습니다. <br/> 다름사람에게 의견을 남겨주세요." />
      ) : (
        <Wrapper>
          {arr.map(() => {
            return (
              <Reply>
                <Title>친하게 지내요!!! :)</Title>
                <Time>방금 전 작성</Time>
                <ReplyMenu />
              </Reply>
            );
          })}
        </Wrapper>
      )}
    </>
  );
}

export default MyReply;

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  gap: 8px;
  margin-top: 3px;
  bottom: 15px;
  max-height: 100%;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Reply = styled.li`
  position: relative;
  background-color: #fff;
  padding: 16px;
  box-shadow: 1px 4px 10px 1px #c4c4c4af;
  p {
    color: #000;
  }
`;

const Title = styled.p`
  font-size: 16px;
  margin: 0;
  margin-bottom: 16px;
`;

const Time = styled.p`
  margin: 0;
  font-size: 12px;
`;

const ReplyMenu = styled(Box)`
  position: absolute;
  right: 16px;
  top: 16px;
`;
