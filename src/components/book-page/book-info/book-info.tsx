import { BookImg, IBook } from '../../../interfaces';
import { BookPageToBookButton } from '../../buttons';
import './book-info.scss';
import { Slider } from '../../slider';

export const BookInfo = ({ images, title, authors, issueYear }: IBook) => {
  // const imgUrl = (imgs: BookImg[]): string[] =>
  //   imgs.map((img): string => `${'https://strapi.cleverland.by'}${img.url}`);

  // console.log(imgUrl(image?.url));
  const host = 'https://strapi.cleverland.by';

  return (
    <div className='book-info'>
      <div className='book-info-image'>
        {/* {images?.length === 1 {
          <img src={`${host}${images}`}
        }} */}
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
};
