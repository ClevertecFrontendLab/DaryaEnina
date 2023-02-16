import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ViewState {
  isWindow: boolean;
}

const initialState: ViewState = {
  isWindow: true,
};
const viewSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    changView: (state, action: PayloadAction<boolean>) => {
      // eslint-disable-next-line no-param-reassign
      state.isWindow = action.payload;
    },
  },
});

export const { changView } = viewSlice.actions;
export const listReducer = viewSlice.reducer;
