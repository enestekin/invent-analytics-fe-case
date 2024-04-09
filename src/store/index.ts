import { configureStore } from '@reduxjs/toolkit';
import { moviesSlice } from './moviesSlice';

export const store = configureStore({
  reducer: {
    movies: moviesSlice.reducer,
  },
});

export type IRootState = ReturnType<typeof store.getState>;
