import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    author: '', 
  },
  reducers: {
    setAuthor: (state, action) => {
      state.author = action.payload;
    },
    resetFilters: (state) => {
      state.author = '';
    },
  },
});

export const filterImages = (images, filters) => {
  return images.filter((image) => {
    const matchesAuthor = filters.author
      ? image.author === filters.author
      : true;
    return matchesAuthor;
  });
};

export const { setAuthor, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;
