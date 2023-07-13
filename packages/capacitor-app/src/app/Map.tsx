import React from 'react';
import { LeafletMap } from '@hiking-app/leaflet-map';
import { TrailList } from '@hiking-app/ui';

export function Map() {
  return (
    <div className="box-border h-screen relative">
      <LeafletMap />
    </div>
  );
}

export default Map;
