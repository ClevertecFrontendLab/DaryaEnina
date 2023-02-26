import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { IBooks } from '../../../interfaces';
import { fetchBooks } from '../../../store/reducers/books-reducer';
import { AppDispatch } from '../../../store/store';
import './book-link.scss';

export const BookLink = ({ title, categories }: IBooks) => {
  const { category } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  function categoryTranslate(categoria: string) {
    return categoria === 'all'
      ? 'Все книги'
      : categoria === 'business'
      ? 'Бизнес'
      : categoria === 'psychology'
      ? 'Психология'
      : categoria === 'parents'
      ? 'Родителям'
      : categoria === 'non-fiction'
      ? 'Нон-фикшн'
      : categoria === 'fiction'
      ? 'Художественная литература'
      : categoria === 'programming'
      ? 'Программирование'
      : categoria === 'hobby'
      ? 'Хобби'
      : categoria === 'design'
      ? 'Дизайн'
      : categoria === 'childish'
      ? 'Детские'
      : 'Другое';
  }

  return (
    <div className='book__link'>
      <div className='book__link-wrapper'>
        <ul className='book__link-list'>
          <li className='book__link-link'>
            {categories ? (
              <Link to={`/books/${category}`} data-test-id='breadcrumbs-link' onClick={() => dispatch(fetchBooks())}>
                {categoryTranslate(category!)}
              </Link>
            ) : (
              <Link to='/books/all'>Все книги</Link>
            )}
          </li>
          <li className='book__link-link'>
            <Link to='#' data-test-id='book-name'>
              {title}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
