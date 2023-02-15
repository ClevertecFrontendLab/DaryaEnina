import React, { FC, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer, Header } from '..';
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
