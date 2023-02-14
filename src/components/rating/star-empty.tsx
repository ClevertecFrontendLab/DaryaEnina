import starEmpty from '../../assets/star-empty.png';
import { IBooks } from '../../interfaces';

export const StarEmpty = ({ listType }: IBooks) => (
  <div className={listType === 'square' ? 'star-empty__square' : 'star-empty__line'}>
    <img src={starEmpty} alt='' />
  </div>
);
