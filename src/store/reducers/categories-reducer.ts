import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { baseUrl, config } from '../../api/api';

interface CategoriesState {
  categories: [];
  loading: boolean;
  error: string | null;
}

const initialState: CategoriesState = {
  categories: [],
  loading: false,
  error: '',
};

export const fetchCategories = createAsyncThunk('categories', async () => {
  const { data } = await axios.get(`${baseUrl}/api/categories`, config);

  return data;
});

const categoriesSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.categories = [];
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.categories = action.payload;
      state.error = null;
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Ooops... Something wrong';
      state.categories = [];
    });
  },
});

export const categoriesReducer = categoriesSlice.reducer;
