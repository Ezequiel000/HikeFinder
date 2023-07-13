import { useEffect, useRef } from 'react';
import { init } from './init';
import { Map } from 'leaflet';

import { useAppDispatch } from '../redux-store/hooks';
import { fetchYelpResults } from '../redux-store/resultsSlice'; // <-- import your thunk

export const LeafletMap = () => {
  const mapElement = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch(); // <-- use this to dispatch actions

  useEffect(() => {
    let map: null | Map = null;
    if (mapElement.current) {
      map = init(mapElement.current);

      // Add an event listener for user clicks
      map.on('click', function (e) {
        // Fetch Yelp results when the user clicks on the map
        dispatch(fetchYelpResults({ lat: e.latlng.lat, lng: e.latlng.lng }));
      });
    }
    return () => {
      if (map) {
        map.off('click'); // remove event listener when the component unmounts
        map.remove();
      }
    };
  }, [mapElement, dispatch]); // add dispatch to the dependency array

  return <div className="z-0 w-full h-full absolute" ref={mapElement}></div>;
};

export default LeafletMap;
