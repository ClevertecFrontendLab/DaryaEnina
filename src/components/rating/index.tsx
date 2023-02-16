import { IBooks } from '../../interfaces';
import { StarEmpty } from './star-empty';
import { StarFull } from './star-full';
import './rating.scss';

export const Rating = ({ rating }: IBooks) => {
  const starsArr = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating!) {
      starsArr.push(<StarFull key={i} />);
    } else {
      starsArr.push(<StarEmpty key={i} />);
    }
  }

  return <div className='rating'>{starsArr}</div>;
};
