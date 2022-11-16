import styled from "styled-components";

function ProfileImage() {
  return <ImageWrapper src="http://www.chemicalnews.co.kr/news/photo/202106/3636_10174_4958.jpg" />;
}

export default ProfileImage;

const ImageWrapper = styled.img`
  max-width: 150px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-color: #d9d9d9;
  margin-right: 32px;
  border: 1px solid #000;
`;
