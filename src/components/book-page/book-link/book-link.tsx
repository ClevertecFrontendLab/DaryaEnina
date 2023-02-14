import { Link } from 'react-router-dom';
import { IBooks } from '../../../interfaces';
import './book-link.scss';

export const BookLink = ({ title }: IBooks) => (
  <div className='book__link'>
    <div className='book__link-wrapper'>
      <ul className='book__link-list'>
        <li className='book__link-link'>
          <Link to='/books/all'>Бизнес книги</Link>
        </li>
        <li className='book__link-link'>
          <Link to='#'>{title}</Link>
        </li>
      </ul>
    </div>
  </div>
);
