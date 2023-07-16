'use client';

import { useEffect, useState } from 'react';

const Map = () => {
  const [map, setMap] = useState<naver.maps.Map | null>(null);
  const [marker, setMarker] = useState<naver.maps.Marker | null>(null);

  useEffect(() => {
    const newMap = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(36.8039146, 127.1295619),
      zoom: 17,
    });

    const newMarker = new naver.maps.Marker({
      position: new naver.maps.LatLng(36.8039146, 127.1295619),
      map: newMap,
    });

    const contentString = [
      '<div class="iw_inner mapInfo">',
      '<div class="logo">',
      ' <Image src="/svg/Logo2.svg" width="100" height="55" alt="서울시청" />',
      '</div>',
      '<div class="storeInfo">',
      '<p class="address">충남 천안시 서북구 미라10길 14 1층</p>',
      '<a href="https://www.jetiamechicken.com" target="_blank">www.jetaimechicken.com</a>',
      '</div>',
      '</div>',
    ].join('');

    const infowindow = new naver.maps.InfoWindow({
      content: contentString,
      anchorSize: new naver.maps.Size(30, 30),
      maxWidth: 400,
      backgroundColor: '#eee',
      anchorColor: '#eee',
    });

    naver.maps.Event.addListener(newMarker, 'click', () => {
      if (infowindow.getMap()) {
        infowindow.close();
      } else {
        infowindow.open(newMap, newMarker);
      }
    });

    setMap(newMap);
    setMarker(newMarker);

    return () => {
      // Clean up the map and marker objects when the component unmounts
      newMarker.setMap(null);
      setMarker(null);
      setMap(null);
    };
  }, []);

  return <div className='h-[350px] w-full' id='map' />;
};

export default Map;
