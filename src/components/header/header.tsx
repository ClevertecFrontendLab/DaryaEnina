/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../interfaces';
import { BurgerIcon } from '../burger/burger';
import avatar from '../../assets/avatar.svg';
import logo from '../../assets/logo.svg';

import './header.scss';

export const Header: FC = () => {
  // const dispatch = useDispatch();
  // const valueStateBurger = useSelector((state: IState) => state.burger);
  // const closeBurgerMenu = () => {
  //   if (valueStateBurger) {
  //     dispatch({ type: 'closeBurger' });
  //   }
  // };
  // onClick={(e) => e.stopPropagation()}  onClick={closeBurgerMenu}

  return (
    <header className='header'>
      <Link to='/' className='header__logo'>
        <img className='header__logo_img' src={logo} alt='logo' />
      </Link>

      <BurgerIcon />

      <div className='header__content'>
        <h1 className='header__title'>Библиотека</h1>
        <div className='header__auth'>
          <p className='header__auth_name '>Привет, Иван!</p>
          <img className='header__auth_img' src={avatar} alt='Avatar' />
        </div>
      </div>
    </header>
  );
};
