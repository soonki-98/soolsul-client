import styled from "styled-components";
import Empty from "./Empty";

function MyPost() {
  // const arr = " ".repeat(25).split(" ");
  const arr: any[] = [];

  return (
    <>
      {arr.length === 0 ? (
        <Empty
          description="추가하신 게시물 없습니다. <br/>
          게시물을 올려보세요."
        />
      ) : (
        <Wrapper>
          {arr.map(() => {
            return <Post />;
          })}
        </Wrapper>
      )}
    </>
  );
}

export default MyPost;

const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0;
  margin: 0;
  gap: 3px;
  margin-top: 3px;
  bottom: 15px;
  max-height: 100%;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Post = styled.li`
  aspect-ratio: 1/1;
  background: #d9d9d9;
  border-radius: 6px;
  border: none;
`;
