import { createSlice } from '@reduxjs/toolkit';
import { MoviesStateType } from '../types';

const moviesInitialState: MoviesStateType = {
  movies: [],
  activePage: 1,
  totalPages: 0,
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
      state.movies = action.payload.Search;
      state.totalPages = Math.ceil(action.payload.totalResults / 10);
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
    setActivePage: (state, action) => {
      state.activePage = action.payload;
    },
  },
});

export const { setMovies, setType, setYear, setSearchString, setActivePage } =
  moviesSlice.actions;
