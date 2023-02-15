import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { links } from '../../data';
import { Categories, Links } from '../../interfaces';
import { changAccordionSetState } from '../../store/reducers/accordion-reducer';
import { fetchCategories } from '../../store/reducers/categories-reducer';
import { AppDispatch, RootState } from '../../store/store';
import './nav.scss';

export const Nav = () => {
  const { accordionSet } = useSelector((state: RootState) => state.accordion);
  const { categories } = useSelector((state: RootState) => state.categories);
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();

  const toggleAccordion = () => {
    if (accordionSet) {
      dispatch(changAccordionSetState(false));
    } else {
      dispatch(changAccordionSetState(true));
    }
  };

  // useEffect(() => {
  //   dispatch(fetchCategories());
  // }, [dispatch]);

  return (
    <nav className='nav'>
      <ul className='nav__general'>
        <li className='nav__general-li'>
          <NavLink
            data-test-id='navigation-showcase'
            onClick={toggleAccordion}
            className={
              location.pathname.includes('/books')
                ? accordionSet
                  ? 'nav__item_general-underline-active arrow-up'
                  : 'nav__item_general-underline-active arrow-down'
                : accordionSet
                ? 'nav__item_general-underline arrow-up-black'
                : 'nav__item_general-underline arrow-down-black'
            }
            to='books/all'
          >
            Витрина книг
          </NavLink>
          {categories ? (
            <ul className={accordionSet ? 'nav__list' : 'nav__list-hide'}>
              {categories.map((link: Categories) => (
                <li key={link.name}>
                  <NavLink
                    data-test-id='navigation-books'
                    className={(data) => (data.isActive ? 'nav__item-active' : 'nav__item')}
                    to={link.path}
                  >
                    {link.name}
                  </NavLink>
                  <span className='nav__item_count'>{link.id}</span>
                </li>
              ))}
            </ul>
          ) : (
            <ul className={accordionSet ? 'nav__list' : 'nav__list-hide'}>
              {links.map((link: Links) => (
                <li key={link.name}>
                  <NavLink
                    data-test-id='navigation-books'
                    className={(data) => (data.isActive ? 'nav__item-active' : 'nav__item')}
                    to={link.paths}
                  >
                    {link.name}
                  </NavLink>
                  <span className='nav__item_count'>{link.count}</span>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li className='nav__general-li'>
          <NavLink
            onClick={() => {
              dispatch(changAccordionSetState(false));
            }}
            data-test-id='navigation-terms'
            className={(data) => (data.isActive ? 'nav__item_generalA' : 'nav__item_general')}
            to='/rules'
          >
            Правила пользования
          </NavLink>
        </li>
        <li className='nav__general-li'>
          <NavLink
            onClick={() => {
              dispatch(changAccordionSetState(false));
            }}
            data-test-id='navigation-contract'
            className={(data) => (data.isActive ? 'nav__item_generalA' : 'nav__item_general')}
            to='/contract'
          >
            Договор оферты
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
