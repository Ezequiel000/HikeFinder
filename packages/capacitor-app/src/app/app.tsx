import React from 'react';
import Map from './Map';
import { TrailList } from '@hiking-app/ui';

export function App() {
  return (
    <div className="flex flex-col">
      <Map />
      <TrailList />
    </div>
  );
}

export default App;
