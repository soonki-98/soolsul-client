import apis from '@apis/index';
import Property from '@lib/utils/Properties';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { QueryClient, useQuery } from 'react-query';

const useMap = () => {
  const [barList, setBarList] = useState<any[] | null>(null);
  const [mapInfo, setMapInfo] = useState<{ lat: number; lng: number }>({ lat: 37.565314, lng: 126.992646 });
  const [myLocation, setMyLocation] = useState<GeolocationPosition | null>(Property.userInfo.location);
  const router = useRouter();
  const queryClient = new QueryClient();

  const handleBoundsChanged = (map: any) => {
    const center = map.getCenter();
    const [lat, lng] = [center.getLat(), center.getLng()];
    setMapInfo({ lat, lng });
  };

  const handleClickCurrentLocation = () => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        Property.setUserLocation(position);
        setMyLocation(position);
        setMapInfo({ lat: position.coords.latitude, lng: position.coords.longitude });
      },
      (err) => {
        console.log(err);
      },
      { maximumAge: Infinity, enableHighAccuracy: true, timeout: 10000 }
    );
  };

  useEffect(() => {
    window.navigator.geolocation.watchPosition((position) => {
      setMyLocation(position);
    });
  }, []);

  const { data, isLoading, error } = useQuery('barList', async () => {
    const { mood: moodTag, drink: drinkTag } = router.query as { mood?: string; drink?: string };
    await apis.bar.getBarList({ latitude: 37.565314, longitude: 126.992646, moodTag, drinkTag });
  });

  // useEffect(() => {
  //   (async () => {
  //     const { mood: moodTag, drink: drinkTag } = router.query as { mood?: string; drink?: string };
  //     useQuery()
  //     const result = await apis.bar.getBarList({
  //       latitude: 37.565314,
  //       longitude: 126.992646,
  //       moodTag,
  //       drinkTag,
  //     });
  //     setBarList(result.data.barList);
  //   })();
  // }, [router.query]);

  return { data, isLoading, mapInfo, myLocation, handleBoundsChanged, handleClickCurrentLocation };
};

export default useMap;
