import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { BookCard } from '../../components/books/book-card';
import { NavList } from '../../components/navlist';
import { fetchBooks } from '../../store/reducers/books-reducer';
import { AppDispatch, RootState } from '../../store/store';
import { Loader } from '../../components/loader';
import { Modal } from '../../components/modal/modal';
import { fetchCategories } from '../../store/reducers/categories-reducer';
import { showModal } from '../../store/reducers/modal-reducer';
import { IBooks } from '../../interfaces';

import './main-page.scss';
import '../../components/books/books.scss';

// Добавить фильтры поиска в all

export const MainPage = () => {
  const [filteredBooks, setFilteredBooks] = useState<IBooks[]>();
  const [isSortDown, setSortDown] = useState(true);
  const [searchText, setSearchText] = useState('');

  const dispatch = useDispatch<AppDispatch>();
  const param = useParams();
  const { loading, error, books } = useSelector((state: RootState) => state.books);
  const { errorCategories, loadCategories, categories } = useSelector((state: RootState) => state.categories);
  const { isShown } = useSelector((state: RootState) => state.modal);

  const { isWindow } = useSelector((state: RootState) => state.list);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  useEffect(() => {
    setFilteredBooks(books);
  }, [books]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    if (error || errorCategories) {
      dispatch(showModal(true));
    }
  }, [dispatch, error, errorCategories]);

  useEffect(() => {
    if (isSortDown) {
      const sortedBooks = filteredBooks?.slice().sort((a, b) => {
        if (a.rating! < b.rating!) {
          return 1;
        }
        if (a.rating! > b.rating!) {
          return -1;
        }
        return 0;
      });

      setFilteredBooks(sortedBooks);
    } else {
      const sortedBooks = filteredBooks?.slice().sort((a, b) => {
        if (a.rating! > b.rating!) {
          return 1;
        }
        if (a.rating! < b.rating!) {
          return -1;
        }
        return 0;
      });

      setFilteredBooks(sortedBooks);
    }
  }, [isSortDown]);

  const toggleSort = () => {
    if (isSortDown) {
      setSortDown(false);
    } else {
      setSortDown(true);
    }
  };

  return (
    <section className='main-page'>
      {isShown ? (
        <Modal />
      ) : loading || loadCategories ? (
        <Loader />
      ) : (
        <React.Fragment>
          <NavList
            isSortDown={isSortDown}
            toggleSort={toggleSort}
            searchText={searchText}
            setSearchText={setSearchText}
          />
          <div className={isWindow ? 'books__cards-quare' : 'books__cards-line'}>
            {param.category === 'all' ? (
              filteredBooks
                ?.filter((el) => el.title?.toLowerCase().includes(searchText.toLowerCase()))
                .map((el) => (
                  <Link key={el.id} to={`/books/all/${el.id}`}>
                    <BookCard key={el.id} books={el} searchText={searchText} />
                  </Link>
                ))
            ) : filteredBooks!.filter(
                (book) =>
                  book.categories?.indexOf(
                    categories.filter((categoria) => categoria.path === param.category)[0].name
                  ) !== -1
              ).length < 1 ? (
              <div className='empty__error' data-test-id='empty-category'>
                В этой категории книг ещё нет
              </div>
            ) : filteredBooks!.filter((el) => el.title?.toLowerCase().includes(searchText.toLowerCase())).length < 1 ? (
              <div className='empty__error' data-test-id='search-result-not-found'>
                По запросу ничего не найдено
              </div>
            ) : (
              filteredBooks!
                .filter(
                  (book) =>
                    book.categories?.indexOf(
                      categories.filter((categoria) => categoria.path === param.category)[0].name
                    ) !== -1
                )
                .filter((el) => el.title?.toLowerCase().includes(searchText.toLowerCase()))
                .map((el) => (
                  <Link key={el.id} to={`/books/${param.category}/${el.id}`}>
                    <BookCard key={el.id} books={el} searchText={searchText} />
                  </Link>
                ))
            )}
          </div>
        </React.Fragment>
      )}
    </section>
  );
};
