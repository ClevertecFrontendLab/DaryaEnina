/* eslint-disable react/jsx-filename-extension */
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import { store } from './store/store';
import { MainPage, BookPage } from './pages';
import { Layout, LayoutMainPage } from './components/layout';

import './index.css';
import { Contract } from './components/contract';
import { Rules } from './components/rules';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <HashRouter>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route element={<LayoutMainPage />}>
              <Route path='/' element={<Navigate to='books/all' />} />
              <Route path='/books/:category' element={<MainPage />} />
              <Route path='/rules' element={<Rules />} />
              <Route path='/contract' element={<Contract />} />
            </Route>
            <Route path='/books/:category/:bookId' element={<BookPage />} />
          </Route>
        </Routes>
      </Provider>
    </HashRouter>
  </StrictMode>
);
