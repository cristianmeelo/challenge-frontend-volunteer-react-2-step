import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    category: '',
    color: '',
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setColor: (state, action) => {
      state.color = action.payload;
    },
    resetFilters: (state) => {
      state.category = '';
      state.color = '';
    },
  },
});

export const filterImages = (images, filters) => {
  return images.filter((image) => {
    const matchesCategory = filters.category
      ? image.category === filters.category
      : true;
    const matchesColor = filters.color ? image.color === filters.color : true;
    return matchesCategory && matchesColor;
  });
};

export const { setCategory, setColor, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;
