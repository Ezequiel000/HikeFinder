import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

// First, create the async thunk
export interface Cordinates {
  lat?: number;
  lng?: number;
}
export interface YelpResult {
  name: string;
  location: {
    address1: string;
  };
  phone: string;
  rating: number;
  review_count: number;
  image_url: string;
  id: string;
}
export const fetchYelpResults = createAsyncThunk(
  'results/fetchYelpResults',
  async (coordinates: Cordinates) => {
    try {
      const response = await axios.get(
        `http://localhost:3333/search?lat=${coordinates.lat}&lng=${coordinates.lng}`
      );
      return response.data.businesses;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
);

interface ResultsState {
  data: YelpResult[];
  status: string;
  error: null | string;
}

const initialState: ResultsState = {
  data: [],
  status: 'idle',
  error: null,
};

// Then, create the slice
export const resultsSlice = createSlice({
  name: 'results',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchYelpResults.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchYelpResults.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Add any fetched results to the array
        state.data = action.payload;
      })
      .addCase(fetchYelpResults.rejected, (state, action) => {
        state.status = 'failed';
        console.log('Yelp fetch failed');
      });
  },
});

export default resultsSlice.reducer;
