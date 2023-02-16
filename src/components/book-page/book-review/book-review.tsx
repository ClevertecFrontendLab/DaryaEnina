import { useState } from 'react';
import { useSelector } from 'react-redux';
import reviewer from '../../../assets/reviewer.png';
import { IBook } from '../../../interfaces';
import { RootState } from '../../../store/store';
import { StarEmpty } from '../../rating/star-empty';
import { StarFull } from '../../rating/star-full';
import './style.scss';

interface BookProps {
  book: IBook;
}
export const BookReview = () => {
  const [isListVisible, setListVisible] = useState(true);

  const handleChangeVisability = () => {
    setListVisible((prevState: boolean) => !prevState);
  };

  const { book } = useSelector((state: RootState) => state.book);

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
          <div className='book__review__reviewers'>
            <div className='book__review__reviewers-wrap'>
              <div className='book__review__reviewers-image'>
                <img src={reviewer} alt='reviewer' />
              </div>
              <div className='book__review__reviewers-name'>Николай Качков</div>
              <div className='book__review__reviewers-date'>20 июня 2018</div>
            </div>
            <div className='book__review__reviewers-rating'>
              <StarFull />
              <StarFull />
              <StarFull />
              <StarEmpty />
              <StarEmpty />
            </div>
            <div className='book__review__reviewers-review'>
              Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект не оставляет
              шанса для анализа существующих паттернов поведения. Для современного мира внедрение современных методик
              предоставляет широкие возможности для позиций, занимаемых участниками в отношении поставленных задач. Как
              уже неоднократно упомянуто, сделанные на базе интернет-аналитики выводы будут в равной степени
              предоставлены сами себе. Вот вам яркий пример современных тенденций — глубокий уровень погружения создаёт
              предпосылки для своевременного выполнения сверхзадачи. И нет сомнений, что акционеры крупнейших компаний,
              инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит
              несомненную пользу обществу.
            </div>
          </div>
        </div>
      ) : null}
      <button type='button' className='book__review-button'>
        оценить книгу
      </button>
    </div>
  );
};
