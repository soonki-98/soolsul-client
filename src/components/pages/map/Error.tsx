import { Spinner } from "@components/Loader";
import Property from "@lib/utils/Properties";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";

function Error() {
  const router = useRouter();
  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition((position) => {
      Property.setUserLocation(position);
      router.reload();
    });
  }, []);
  return (
    <Wrapper>
      <Spinner />
      <p>위치정보 가져오는 중...</p>
    </Wrapper>
  );
}

export default Error;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  max-width: 480px;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
`;
