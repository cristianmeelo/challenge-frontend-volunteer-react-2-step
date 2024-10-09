import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './features/favorites';
import filterReducer from './features/filter';

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    filter: filterReducer,
  },
});

export default store;
