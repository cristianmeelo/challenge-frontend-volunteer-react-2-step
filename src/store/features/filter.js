import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    author: '', // Adicione esta linha para armazenar o autor
  },
  reducers: {
    setAuthor: (state, action) => {
      state.author = action.payload; // Adiciona a lógica para alterar o autor
    },
    resetFilters: (state) => {
      state.author = ''; // Reseta o autor
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
