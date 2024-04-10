import { createSlice } from '@reduxjs/toolkit';
import { MoviesStateType } from '../types';

const moviesInitialState: MoviesStateType = {
  movies: [],
  activePage: 1,
  filters: {
    searchString: 'pokemon',
    year: null,
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
    setType: (state, action) => {
      state.filters.type = action.payload;
    },
    setYear: (state, action) => {
      state.filters.year = action.payload;
    },
    setSearchString: (state, action) => {
      state.filters.searchString = action.payload;
    },
  },
});

export const { setMovies, setType, setYear, setSearchString } =
  moviesSlice.actions;
