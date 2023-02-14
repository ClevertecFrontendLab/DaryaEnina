import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ModalState {
  isShown: boolean;
}

const initialState: ModalState = {
  isShown: false,
};
const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal: (state, action: PayloadAction<boolean>) => {
      state.isShown = action.payload;
    },
  },
});

export const { showModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
