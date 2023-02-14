import { acardionState } from '../actions/actions.js';

const initialState = {
  acardionSet: true,
};

export const reduserAcardionState = (state = initialState, action) => {
  switch (action.type) {
    case acardionState.SET_ACARDION:
      return {
        ...state,
        acardion: action.payload,
      };
    case 'openAcardion':
      return { ...state, acardionSet: true };
    case 'closeAcardion':
      return { ...state, acardionSet: false };
    default:
      return state;
  }
};
