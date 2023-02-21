import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { baseUrl, config } from '../../api/api';
import { Categories } from '../../interfaces';

interface CategoriesState {
  categories: Categories[];
  loadCategories: boolean;
  errorCategories: string | null;
}

const initialState: CategoriesState = {
  categories: [],
  loadCategories: false,
  errorCategories: '',
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
      state.loadCategories = true;
      state.errorCategories = null;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.loadCategories = false;
      state.categories = action.payload;
      state.errorCategories = null;
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.loadCategories = false;
      state.errorCategories = action.error.message || 'Ooops... Something wrong';
      state.categories = [];
    });
  },
});

export const categoriesReducer = categoriesSlice.reducer;
