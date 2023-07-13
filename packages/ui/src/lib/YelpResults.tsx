import React from 'react';

import { useAppSelector } from '@hiking-app/leaflet-map';
const YelpResults = () => {
  // Use a selector to get the Yelp results from the Redux store
  // Replace 'results' with the actual path in the Redux store where the results are stored
  const results = useAppSelector((state) => state.counter.data);

  return (
    <div>
      {/* Display each result in a list */}
      <ul>
        {results.map((result, index) => (
          <div className="card card-side bg-base-100 shadow-xl">
            <figure>
              <img src={result.image_url} alt="Movie" className="h-24 w-24" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{result.name}</h2>
              <p> Location: {result.location.address1}</p>
              <p> Rating: {result.rating}</p>
              <p>Click the button to watch on Jetflix app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">details</button>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default YelpResults;
