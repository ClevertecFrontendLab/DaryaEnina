import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BookDescription, BookInfo, BookLink, BookRating, BookReview } from '../../components';

import { RootState } from '../../store/store';

import './book-page.scss';

export const BookPage = () => {
  const { bookId } = useParams();
  const { books } = useSelector((state: RootState) => state.books);

  const book = books.filter((item) => item.id === bookId).reduce((item) => item);

  return (
    <section className='book-page'>
      <div className='book__page-wrapper'>
        <BookLink title={book.title} />
        <BookInfo image={book.image} title={book.title} authors={book.authors} issueYear={book.issueYear} />
        <BookRating rating={book.rating} />
        <BookDescription />
        <BookReview />
      </div>
    </section>
  );
};
