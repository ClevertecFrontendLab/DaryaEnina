import { useSelector } from 'react-redux';
import { IBooks } from '../../interfaces';
import emptyImage from '../../assets/empty.png';
import { Rating } from '../rating';
import { BookedButton, BookedTillButton, ToBookButton } from '../buttons';
import { RootState } from '../../store/store';

type BooksPropsType = {
  books: IBooks;
};

export const BookCard = ({ books }: BooksPropsType) => {
  const { isWindow } = useSelector((state: RootState) => state.list);

  const url = books.image?.url[0];

  return (
    <div data-test-id='card' className={isWindow ? 'book__card-quare' : 'book__card-line'}>
      <div className='book__card-image'>
        <img className='book__card-img' src={`https://strapi.cleverland.by${url}`} alt='book' />
      </div>
      <div className='book__card-content'>
        {books.rating! <= 0 ? (
          <div className='book__card-rating'>ещё нет оценок</div>
        ) : (
          <Rating rating={books.rating} />
        )}

        <div className='book__card-title'>{`${books.title?.slice(0, 54)} ...`}</div>

        <div className='book__card-author'>
          {books.authors}, {books.issueYear}
        </div>
        {books.booking ? (
          <BookedButton />
        ) : books.delivery ? (
          <BookedTillButton delivery={books.delivery} />
        ) : (
          <ToBookButton />
        )}
      </div>
    </div>
  );
};
