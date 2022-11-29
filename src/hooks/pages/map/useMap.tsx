import apis from '@apis/index';
import Property from '@lib/utils/Properties';
import { useEffect, useState } from 'react';

const useMap = () => {
  const [barList, setBarList] = useState<any[] | null>(null);
  const [mapInfo, setMapInfo] = useState<{ lat: number; lng: number }>({ lat: 37.565314, lng: 126.992646 });
  const [myLocation, setMyLocation] = useState<GeolocationPosition | null>(Property.userInfo.location);

  const handleBoundsChanged = (map: any) => {
    const center = map.getCenter();
    const [lat, lng] = [center.getLat(), center.getLng()];
    setMapInfo({ lat, lng });
  };

  const handleClickCurrentLocation = () => {
    window.navigator.geolocation.getCurrentPosition((position) => {
      Property.setUserLocation(position);
      setMyLocation(position);
      setMapInfo({ lat: position.coords.latitude, lng: position.coords.longitude });
    });
  };

  useEffect(() => {
    window.navigator.geolocation.watchPosition((position) => {
      setMyLocation(position);
    });
  }, []);

  useEffect(() => {
    (async () => {
      const result = await apis.bar.getBarList({ latitude: 37.565314, longitude: 126.992646 });
      setBarList(result.data.barList);
    })();
  }, []);

  return { barList, mapInfo, myLocation, handleBoundsChanged, handleClickCurrentLocation };
};

export default useMap;
