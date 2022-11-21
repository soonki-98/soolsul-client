import styled from "styled-components";
import PostItem from "./PostItem";

function Post() {
  return (
    <PostWrapper>
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
    </PostWrapper>
  );
}

export default Post;

const PostWrapper = styled.ul`
  display: grid;
  width: 100%;
  gap: 8px;
  background-color: #f5f5f5;
  padding: 0;
  margin: 0;
  max-height: 100%;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
