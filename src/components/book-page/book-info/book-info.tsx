import { BookImg, IBook } from '../../../interfaces';
import { BookPageToBookButton } from '../../buttons';
import './book-info.scss';
import { Slider } from '../../slider';

export const BookInfo = ({ images, title, authors, issueYear }: IBook) => (
  <div className='book-info'>
    <div className='book-info-image'>
      <Slider images={images} />
    </div>
    <div className='book-info-main'>
      <div className='book-info-main-title'>{title}</div>
      <div className='book-info-main-author'>
        {authors}, {issueYear}
      </div>

      <BookPageToBookButton />

      <div className='book-info-description'>
        <div className='book-info-description__title'>О книге</div>
        <div className='book-info-description__text'>
          <p>
            Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то
            решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута,
            изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое
            время?
          </p>

          <p>
            Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать
            алгоритмы — это веселое и увлекательное занятие.
          </p>
        </div>
      </div>
    </div>
  </div>
);
