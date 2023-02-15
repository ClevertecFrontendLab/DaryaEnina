import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BookDescription, BookInfo, BookLink, BookRating, BookReview } from '../../components';

import { AppDispatch, RootState } from '../../store/store';

import './book-page.scss';

import { fetchBook } from '../../store/reducers/book-reducer';
import { Loader } from '../../components/loader';
import { Modal } from '../../components/modal/modal';

export const BookPage = () => {
  const { bookId } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { book, loading, error } = useSelector((state: RootState) => state.book);

  useEffect(() => {
    dispatch(fetchBook(bookId));
  }, [bookId, dispatch]);

  return (
    <section className='book-page'>
      {loading ? (
        <Loader />
      ) : error ? (
        <Modal />
      ) : book ? (
        <div className='book__page-wrapper'>
          <BookLink title={book.title} />
          <BookInfo images={book.images} title={book.title} authors={book.authors} issueYear={book.issueYear} />
          <BookRating rating={book.rating} />
          <BookDescription />
          <BookReview />
        </div>
      ) : null}
    </section>
  );
};
