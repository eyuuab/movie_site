// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './features/category/catergorySlice';

const store = configureStore({
  reducer: {
    category: categoryReducer,
  },
});

export default store;
