import { useState } from 'react';
import { useSelector } from 'react-redux';
import reviewer from '../../../assets/reviewer.png';
import { BookComments, IBook } from '../../../interfaces';
import { RootState } from '../../../store/store';
import { Rating } from '../../rating';
import './style.scss';

export const BookReview = () => {
  const [isListVisible, setListVisible] = useState(true);

  const handleChangeVisability = () => {
    setListVisible((prevState: boolean) => !prevState);
  };

  const { book } = useSelector((state: RootState) => state.book);

  function formatDate(date: string): string {
    const formatter = new Intl.DateTimeFormat('ru', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

    return formatter.format(new Date(date)).slice(0, -3);
  }

  return (
    <div className='book__review-wrapper'>
      <div className='book__review-title'>
        Отзывы <span className='book__review-number'>2</span>
        <button
          className={isListVisible ? 'book__review-arrow up' : 'book__review-arrow down'}
          type='button'
          data-test-id='button-hide-reviews'
          onClick={handleChangeVisability}
        />
      </div>
      {isListVisible ? (
        <div className='book__review__reviewers-all'>
          {book!.comments?.map((el: BookComments) => (
            <div className='book__review__reviewers'>
              <div className='book__review__reviewers-wrap'>
                <div className='book__review__reviewers-image'>
                  <img src={reviewer} alt='reviewer' />
                </div>
                <div className='book__review__reviewers-name'>
                  {el.user.firstName} {el.user.lastName}
                </div>
                <div className='book__review__reviewers-date'>{formatDate(el.createdAt)}</div>
              </div>
              <div className='book__review__reviewers-rating'>
                <Rating rating={el.rating} />
              </div>
              <div className='book__review__reviewers-review'>{el.text}</div>
            </div>
          ))}
        </div>
      ) : null}
      <button type='button' className='book__review-button'>
        оценить книгу
      </button>
    </div>
  );
};
