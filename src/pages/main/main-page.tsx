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

export const MainPage = () => {
  const [listType, setListType] = useState<string>('square');

  const onClickListType = (val: React.SetStateAction<string>) => {
    setListType(val);
  };

  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, books } = useSelector((state: RootState) => state.books);
  const { errorCategories, loadCategories } = useSelector((state: RootState) => state.categories);

  const { isWindow } = useSelector((state: RootState) => state.list);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <section className='main-page'>
      {loading || loadCategories ? (
        <Loader />
      ) : error || errorCategories ? (
        <Modal />
      ) : (
        <React.Fragment>
          <NavList listType={listType} onClickListType={onClickListType} />
          <div className={isWindow ? 'books__cards-quare' : 'books__cards-line'}>
            {books.map((el) => (
              <Link key={el.id} to={`/books/${el.categories}/${el.id}`}>
                <BookCard key={el.id} books={el} />
              </Link>
            ))}
          </div>
        </React.Fragment>
      )}
    </section>
  );
};
