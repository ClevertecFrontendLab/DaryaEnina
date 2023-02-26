import { useSelector } from 'react-redux';
import Highlighter from 'react-highlight-words';
import { IBooks } from '../../interfaces';
import { Rating } from '../rating';
import { BookedButton, BookedTillButton, ToBookButton } from '../buttons';
import { RootState } from '../../store/store';

type BooksPropsType = {
  books: IBooks;
  searchText: string;
};

const HighlightedText = ({ children }: any): JSX.Element => (
  <span data-test-id='highlight-matches' className='highlighted-text'>
    {children}
  </span>
);

export const BookCard = ({ books, searchText }: BooksPropsType) => {
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

        <div className='book__card-title'>
          <Highlighter
            highlightClassName='book-name--highlighted'
            searchWords={[searchText]}
            autoEscape={true}
            textToHighlight={`${books.title?.slice(0, 54)} ...`}
            highlightTag={HighlightedText}
          >
            <span data-test-id='txthlt' className='txthlt' />
          </Highlighter>
        </div>

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
