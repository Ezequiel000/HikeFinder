import { configureStore } from '@reduxjs/toolkit';
import resultsReducer from './resultsSlice';

export const store = configureStore({
  reducer: {
    counter: resultsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
