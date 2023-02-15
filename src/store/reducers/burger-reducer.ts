import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface BurgerState {
  burgerSet: boolean;
}
const initialState: BurgerState = {
  burgerSet: false,
};

const burgerSlice = createSlice({
  name: 'burger',
  initialState,
  reducers: {
    changBurgerState: (state, action: PayloadAction<boolean>) => {
      state.burgerSet = action.payload;
    },
  },
});

export const { changBurgerState } = burgerSlice.actions;
export const burgerReducer = burgerSlice.reducer;

// export const reduserBurgerState = (state = initialState, action) => {
//   switch (action.type) {
//     case burgerState.SET_BURGER:
//       return {
//         ...state,
//         burger: action.payload,
//       };
//     case 'openBurger':
//       return { ...state, burgerSet: true };
//     case 'closeBurger':
//       return { ...state, burgerSet: false };
//     default:
//       return state;
//   }
// };
