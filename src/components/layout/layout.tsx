import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { Footer, Header } from '..';
import { fetchBooks } from '../../store/reducers/books-reducer';
import { AppDispatch, RootState } from '../../store/store';
import { BurgerMenu } from '../nav/nav-burger';
import './layout.scss';

export const Layout: FC = () => (
  <React.Fragment>
    <Header />
    <main className='main'>
      <BurgerMenu />
      <Outlet />
    </main>
    <Footer />
  </React.Fragment>
);
