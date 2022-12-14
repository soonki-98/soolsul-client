import dynamic from 'next/dynamic';
import { Map } from 'react-kakao-maps-sdk';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import { BottomMenu, Shadow } from '@components/common';
import { CommonWrapper } from '@components/common/commonStyle';
import { Marker, CurrentLocationButton, Header, FilterMenu } from '@components/pages/map';
import { useMap } from '@hooks/pages/map';
import { filterAtom } from '@recoil/map';

function MapPage() {
  const { data, isLoading, mapInfo, myLocation, handleBoundsChanged, handleClickCurrentLocation } = useMap();
  const filterState = useRecoilValue(filterAtom);
  return (
    <CommonWrapper>
      <StyledMap center={{ ...mapInfo }} onBoundsChanged={handleBoundsChanged} isPanto={true} tileAnimation={true}>
        <Header />
        {/* {barList?.map((bar) => {
            return <Marker {...bar} name={bar.barName} />;
          })} */}
        <Marker
          latitude={myLocation?.coords.latitude || 0}
          longitude={myLocation?.coords.longitude || 0}
          name="현위치"
        />
        <CurrentLocationButton onClick={handleClickCurrentLocation} />
        <BottomMenu />
        <FilterMenu />
      </StyledMap>
      {filterState.isOpen && <Shadow />}
    </CommonWrapper>
  );
}

export default dynamic(() => Promise.resolve(MapPage), { ssr: false });

const StyledMap = styled(Map)`
  height: 100%;
  width: 100%;
  transition: 0.5s;
`;
