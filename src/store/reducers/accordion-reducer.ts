import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AccordionState {
  accordionSet: boolean;
}
const initialState: AccordionState = {
  accordionSet: true,
};

const accordionSlice = createSlice({
  name: 'accordion',
  initialState,
  reducers: {
    changAccordionSetState: (state, action: PayloadAction<boolean>) => {
      state.accordionSet = action.payload;
    },
  },
});

export const { changAccordionSetState } = accordionSlice.actions;
export const accordionReducer = accordionSlice.reducer;
