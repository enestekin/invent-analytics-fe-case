import { createSlice } from '@reduxjs/toolkit';
import { MoviesStateType } from '../types';

const moviesInitialState: MoviesStateType = {
  movies: [],
  activePage: 1,
  filters: {
    searchString: 'pokemon',
    year: '',
    type: '',
  },
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: moviesInitialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const { setMovies } = moviesSlice.actions;
