import React, { useEffect, useRef } from 'react';
import { init } from './init';
import { Map } from 'leaflet';

export const LeafletMap = () => {
  const mapElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let map: null | Map = null;
    if (mapElement.current) {
      map = init(mapElement.current);
    }
    return () => {
      if (map) map.remove();
    };
  }, [mapElement]);

  return <div className="z-0 w-full h-full absolute" ref={mapElement}></div>;
};

export default LeafletMap;
