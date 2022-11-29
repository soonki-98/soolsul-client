import { CustomOverlayMap, MapMarker } from 'react-kakao-maps-sdk';
import styled from 'styled-components';

function Marker({ latitude, longitude, name }: { latitude: number; longitude: number; name: string }) {
  return (
    <>
      <MapMarker position={{ lat: latitude as number, lng: longitude as number }} />
      <CustomOverlayMap position={{ lat: latitude as number, lng: longitude as number }}>
        <BarName>{name}</BarName>
      </CustomOverlayMap>
    </>
  );
}

export default Marker;

const BarName = styled.div`
  position: relative;
  top: 20px;
  display: flex;
  justify-content: center;
  padding: 3px 16px;
  color: #000;
  border: 1px solid #6c50cf;
  border-radius: 16px;
  background-color: #fff;
`;
