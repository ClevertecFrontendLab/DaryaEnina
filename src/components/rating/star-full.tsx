import star from '../../assets/star.png';
import { IBooks } from '../../interfaces';

export const StarFull = ({ listType }: IBooks) => (
  <div className={listType === 'square' ? 'star-full__square' : 'star-full__line'}>
    <img src={star} alt='' />
  </div>
);
