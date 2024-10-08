import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './features';

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});

export default store;
