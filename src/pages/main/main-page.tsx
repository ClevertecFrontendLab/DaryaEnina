import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BookCard } from '../../components/books/book-card';
import { NavList } from '../../components/navlist';
import { fetchBooks } from '../../store/reducers/books-reducer';
import { AppDispatch, RootState } from '../../store/store';
import './main-page.scss';
import '../../components/books/books.scss';
import { Loader } from '../../components/loader';
import { Modal } from '../../components/modal/modal';
import { fetchCategories } from '../../store/reducers/categories-reducer';
import { showModal } from '../../store/reducers/modal-reducer';

export const MainPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, books } = useSelector((state: RootState) => state.books);
  const { errorCategories, loadCategories } = useSelector((state: RootState) => state.categories);
  const { isShown } = useSelector((state: RootState) => state.modal);

  const { isWindow } = useSelector((state: RootState) => state.list);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    if (error || errorCategories) {
      dispatch(showModal(true));
    }
  }, [dispatch, error, errorCategories]);

  return (
    <section className='main-page'>
      {isShown ? (
        <Modal />
      ) : loading || loadCategories ? (
        <Loader />
      ) : (
        <React.Fragment>
          <NavList />
          <div className={isWindow ? 'books__cards-quare' : 'books__cards-line'}>
            {books.map((el) => (
              <Link key={el.id} to={`/books/buisness/${el.id}`}>
                <BookCard key={el.id} books={el} />
              </Link>
            ))}
          </div>
        </React.Fragment>
      )}
    </section>
  );
};
