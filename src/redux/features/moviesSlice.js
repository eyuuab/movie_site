// features/moviesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
  loading: false,
  error: null,
  selectedCategory: 'new', // Initial selected category
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    fetchMoviesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchMoviesSuccess(state, action) {
      state.loading = false;
      state.movies = action.payload;
    },
    fetchMoviesFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    setSelectedCategory(state, action) {
      state.selectedCategory = action.payload;
    },
  },
});

export const {
  fetchMoviesStart,
  fetchMoviesSuccess,
  fetchMoviesFailure,
  setSelectedCategory,
} = moviesSlice.actions;

export default moviesSlice.reducer;
