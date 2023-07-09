import React from 'react';
import { LeafletMap } from '@hiking-app/leaflet-map';

export function Map() {
  return (
    <div className="w-full h-full">
      {/* <div className="absolute z-10">
        <div className=" text-red-800">Hello World</div>
      </div> */}
      <LeafletMap />
      {/* <div className="absolute z-10 bottom-64">Hello</div> */}
    </div>
  );
}

export default Map;
