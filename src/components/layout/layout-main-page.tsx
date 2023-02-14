import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Nav } from '../nav';
import './layout.scss';

export const LayoutMainPage: FC = () => (
  <div className='main__wrapper'>
    <Nav />
    <Outlet />
  </div>
);
