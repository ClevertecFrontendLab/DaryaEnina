/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { links } from '../../data';
import { Categories, Links } from '../../interfaces';
import { changAccordionSetState } from '../../store/reducers/accordion-reducer';
import { changBurgerState } from '../../store/reducers/burger-reducer';
import { RootState } from '../../store/store';
import './nav-burger.scss';

export const BurgerMenu = () => {
  const { burgerSet } = useSelector((state: RootState) => state.burger);
  const { accordionSet } = useSelector((state: RootState) => state.accordion);
  const { categories } = useSelector((state: RootState) => state.categories);
  const { books } = useSelector((state: RootState) => state.books);

  const location = useLocation();
  const dispatch = useDispatch();

  const toggleAcardion = () => {
    if (accordionSet) {
      dispatch(changAccordionSetState(false));
    } else {
      dispatch(changAccordionSetState(true));
    }
  };

  const closeBurgerMenu = () => {
    if (burgerSet) {
      dispatch(changBurgerState(false));
    }
  };

  return (
    <div
      className={burgerSet ? 'nav__burger__menu-wrapper' : 'nav__burger__menu-wrapper-hidden'}
      onClick={closeBurgerMenu}
    >
      <nav className='nav__burger__menu' onClick={(e) => e.stopPropagation()}>
        <ul className='nav__burger__menu__general'>
          <li className='nav__burger__menu__general-li'>
            <NavLink
              data-test-id='burger-showcase'
              onClick={toggleAcardion}
              className={
                location.pathname.includes('/books')
                  ? accordionSet
                    ? 'nav__burger__menu__item_general-underline-active arrow-up'
                    : 'nav__burger__menu__item_general-underline-active arrow-down'
                  : accordionSet
                  ? 'nav__burger__menu__item_general-underline arrow-up-black'
                  : 'nav__burger__menu__item_general-underline arrow-down-black'
              }
              to='books/all'
            >
              Витрина книг
            </NavLink>
            {categories ? (
              <ul className={accordionSet ? 'nav__burger__menu__list' : 'nav__burger__menu__list-hide'}>
                <NavLink
                  data-test-id='burger-books'
                  onClick={closeBurgerMenu}
                  className={(data) => (data.isActive ? 'nav__burger__menu__item-active' : 'nav__burger__menu__item')}
                  to='books/all'
                >
                  Все книги
                </NavLink>
                {categories.map((categoria: Categories) => (
                  <li key={categoria.name}>
                    <NavLink
                      data-test-id={`burger-${categoria.path}`}
                      onClick={closeBurgerMenu}
                      className={(data) =>
                        data.isActive ? 'nav__burger__menu__item-active' : 'nav__burger__menu__item'
                      }
                      to={`books/${categoria.path}`}
                    >
                      {categoria.name}
                    </NavLink>
                    <span
                      className='nav__burger__menu__item_count'
                      data-test-id={`burger-book-count-for-${categoria.path}`}
                    >
                      {books.filter((e) => e.categories?.indexOf(categoria.name) !== -1).length}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <ul className={accordionSet ? 'nav__burger__menu__list' : 'nav__burger__menu__list-hide'}>
                {links.map((link: Links) => (
                  <li key={link.name}>
                    <NavLink
                      data-test-id='burger-books'
                      onClick={closeBurgerMenu}
                      className={(data) =>
                        data.isActive ? 'nav__burger__menu__item-active' : 'nav__burger__menu__item'
                      }
                      to={link.paths}
                    >
                      {link.name}
                    </NavLink>
                    <span className='nav__burger__menu__item_count'>{link.count}</span>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li className='nav__burger__menu__general-li'>
            <NavLink
              data-test-id='burger-terms'
              onClick={closeBurgerMenu}
              className={(data) =>
                data.isActive ? 'nav__burger__menu__item_generalA' : 'nav__burger__menu__item_general'
              }
              to='/rules'
            >
              Правила пользования
            </NavLink>
          </li>
          <li className='nav__burger__menu__general-li'>
            <NavLink
              data-test-id='burger-contract'
              onClick={closeBurgerMenu}
              className={(data) =>
                data.isActive ? 'nav__burger__menu__item_generalA' : 'nav__burger__menu__item_general'
              }
              to='/contract'
            >
              Договор оферты
            </NavLink>
          </li>
          <div className='nav__burger__menu-line' />
          <li className='nav__burger__menu__general-li'>
            <NavLink
              onClick={closeBurgerMenu}
              className={(data) =>
                data.isActive ? 'nav__burger__menu__item_generalA' : 'nav__burger__menu__item_general'
              }
              to='/person'
            >
              Профиль
            </NavLink>
          </li>
          <li className='nav__burger__menu__general-li'>
            <NavLink
              onClick={closeBurgerMenu}
              className={(data) =>
                data.isActive ? 'nav__burger__menu__item_generalA' : 'nav__burger__menu__item_general'
              }
              to='/exit'
            >
              Выход
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
