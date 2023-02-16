import { IBook } from '../../../interfaces';
import './style.scss';

interface BookProps {
  book: IBook;
}
export const BookDescription = (book: BookProps) => (
  <div className='book__page-description__wrapper'>
    <div className='book__page-description__title'>Подробная информация</div>
    <div className='book__page-description__content'>
      <div className='book__page-description__content-col'>
        <div className='book__page-description__content__row'>
          <div className='book__page-description__content__row-title'>Издательство</div>
          <div className='book__page-description__content__row-value'>{book.book.publish}</div>
        </div>
        <div className='book__page-description__content__row'>
          <div className='book__page-description__content__row-title'>Год издания</div>
          <div className='book__page-description__content__row-value'>{book.book.issueYear}</div>
        </div>
        <div className='book__page-description__content__row'>
          <div className='book__page-description__content__row-title'>Страниц</div>
          <div className='book__page-description__content__row-value'>{book.book.pages}</div>
        </div>
        <div className='book__page-description__content__row'>
          <div className='book__page-description__content__row-title'>Переплёт</div>
          <div className='book__page-description__content__row-value'>{book.book.cover}</div>
        </div>
        <div className='book__page-description__content__row'>
          <div className='book__page-description__content__row-title'>Формат</div>
          <div className='book__page-description__content__row-value'>{book.book.format}</div>
        </div>
      </div>
      <div className='book__page-description__content-col'>
        <div className='book__page-description__content__row'>
          <div className='book__page-description__content__row-title'>Жанр</div>
          <div className='book__page-description__content__row-value'>{book.book.categories}</div>
        </div>
        <div className='book__page-description__content__row'>
          <div className='book__page-description__content__row-title'>Вес</div>
          <div className='book__page-description__content__row-value'>{book.book.weight}</div>
        </div>
        <div className='book__page-description__content__row'>
          <div className='book__page-description__content__row-title'>ISBN</div>
          <div className='book__page-description__content__row-value'>{book.book.ISBN}</div>
        </div>
        <div className='book__page-description__content__row'>
          <div className='book__page-description__content__row-title'>Изготовитель</div>
          <div className='book__page-description__content__row-value'>{book.book.producer}</div>
        </div>
      </div>
    </div>
  </div>
);
