import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import { booksReducer } from './reducers/book-reducer';
import { listReducer } from './reducers/list-reducer';
import { modalReducer } from './reducers/modal-reducer';
import { burgerReducer } from './reducers/burger-reducer';
import { accordionReducer } from './reducers/accordion-reducer';

export const store = configureStore({
  reducer: {
    books: booksReducer,
    list: listReducer,
    modal: modalReducer,
    burger: burgerReducer,
    accordion: accordionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch;
