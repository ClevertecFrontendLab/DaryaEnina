import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { baseUrl, config } from '../../api/api';
import { BooksState, IBooks } from '../../interfaces';

const initialState: BooksState = {
  books: [] as IBooks[],
  loading: false,
  error: '',
};

export const fetchBooks = createAsyncThunk('/', async () => {
  const { data } = await axios.get(baseUrl, config);

  return data;
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.books = [];
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.loading = false;
      state.books = action.payload;
      state.error = null;
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Ooops... Something wrong';
      state.books = [];
    });
  },
});

export const booksReducer = booksSlice.reducer;