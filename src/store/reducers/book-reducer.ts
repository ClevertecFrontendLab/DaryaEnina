import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl, config } from '../../api/api';
import { IBook } from '../../interfaces';

interface BookState {
  book: IBook | null;
  loading: boolean;
  error: null | string;
}

const initialState: BookState = {
  book: null,
  loading: false,
  error: '',
};

export const fetchBook = createAsyncThunk('bookSlice/fetchBook', async (bookId: string | undefined) => {
  const { data } = await axios.get(`${baseUrl}/api/books/${bookId}`, config);

  return data;
});

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBook.pending, (state: BookState) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchBook.fulfilled, (state: BookState, action) => {
      state.book = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchBook.rejected, (state: BookState, action) => {
      state.loading = false;
      state.error = action.error.message || 'Ooops... Something wrong';
    });
  },
});

export const bookReducer = bookSlice.reducer;
