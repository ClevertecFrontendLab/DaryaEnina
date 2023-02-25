import { BookImg, IBook } from '../../../interfaces';
import { BookPageToBookButton } from '../../buttons';
import './book-info.scss';
import { Slider } from '../../slider';

export const BookInfo = ({ images, title, authors, issueYear, description }: IBook) => (
  <div className='book-info'>
    <div className='book-info-image'>
      <Slider images={images} />
    </div>
    <div className='book-info-main'>
      <div className='book-info-main-title' data-test-id='book-title'>
        {title}
      </div>
      <div className='book-info-main-author'>
        {authors}, {issueYear}
      </div>

      <BookPageToBookButton />

      <div className='book-info-description'>
        <div className='book-info-description__title'>О книге</div>
        <div className='book-info-description__text'>
          <p>{description}</p>
        </div>
      </div>
    </div>
  </div>
);
