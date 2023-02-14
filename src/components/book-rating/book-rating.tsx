import { IBooks } from '../../interfaces';
import { Rating } from '../rating';
import './style.scss';

export const BookRating = ({ rating }: IBooks) => (
  <div className='book__page-rating'>
    <h3 className='book__page-rating-title'>Рейтинг</h3>
    <div className='book__page-rating-sep' />
    <div className='book__page-rating-result'>
      <Rating rating={rating} />
      <span className='book__page-rating-number'>{rating}</span>
    </div>
  </div>
);
