import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { CustomOverlayMap, Map, MapMarker } from 'react-kakao-maps-sdk';
import styled from 'styled-components';

import { BottomMenu } from '@components/common';
import { CommonWrapper } from '@components/common/commonStyle';
import { AddFeedButton, Error, SearchBar } from '@components/pages/map';
import Property from '@lib/utils/Properties';
import apis from '@apis/index';

function MapPage() {
  const [barList, setBarList] = useState<any[] | null>(null);
  const [location, setLocation] = useState<GeolocationPosition | null>(Property.userInfo.location);

  useEffect(() => {
    window.navigator.geolocation.watchPosition((position) => {
      setLocation(position);
    });
  }, []);

  useEffect(() => {
    if (!location) return;
    (async () => {
      const result = await apis.bar.getBarList({ latitude: 37.565214, longitude: 126.994546 });
      setBarList(result.data.barList);
    })();
  }, [location]);

  if (!location) {
    return <Error />;
  } else {
    return (
      <CommonWrapper>
        <StyledMap
          center={{
            lat: 37.565314,
            lng: 126.992646,
            // lat: location.coords.latitude,
            // lng: location.coords.longitude,
          }}
        >
          <span style={{ position: 'fixed', top: '0', zIndex: '999', color: '#000' }}>
            {location.coords.latitude} {location.coords.longitude}
          </span>
          <SearchBar />
          {barList?.map((bar) => {
            return (
              <>
                <MapMarker position={{ lat: bar.latitude as number, lng: bar.longitude as number }} />
                <CustomOverlayMap position={{ lat: bar.latitude as number, lng: bar.longitude as number }}>
                  <BarName>{bar.barName}</BarName>
                </CustomOverlayMap>
              </>
            );
          })}
          <MapMarker
            position={{
              lat: location.coords.latitude,
              lng: location.coords.longitude,
            }}
          />
          <CustomOverlayMap
            position={{
              lat: location.coords.latitude,
              lng: location.coords.longitude,
            }}
          >
            <BarName>현위치</BarName>
          </CustomOverlayMap>
          <AddFeedButton />
          <BottomMenu />
        </StyledMap>
      </CommonWrapper>
    );
  }
}

export default dynamic(() => Promise.resolve(MapPage), { ssr: false });

const StyledMap = styled(Map)`
  height: 100%;
  width: 100%;
`;

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
