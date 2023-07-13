import React from 'react';
import { LeafletMap } from '@hiking-app/leaflet-map';
import { TrailList } from '@hiking-app/ui';

export function Map() {
  return (
    <div className="w-full h-full flex">
      <LeafletMap />
      <TrailList />
    </div>
  );
}

export default Map;
