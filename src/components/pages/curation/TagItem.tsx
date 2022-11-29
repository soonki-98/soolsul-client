import styled from 'styled-components';

const TagItem = () => {
  return (
    <Tag>
      <div className="icon" />
      <p>tag</p>
    </Tag>
  );
};

export default TagItem;

const Tag = styled.li`
  display: flex;
  align-items: center;
  border-radius: 12px;
  background-color: #d9d9d9;
  font-size: 12px;
  min-width: 70px;
  height: 24px;
  margin-right: 8px;

  .icon {
    width: 20px;
    height: 20px;
    border-radius: 10px;
    margin: 4px;
    background-color: #bfbfbf;
  }
  p {
    line-height: 16px;
    overflow: hidden;
  }
`;
