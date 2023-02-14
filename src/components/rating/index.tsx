import { IBooks } from '../../interfaces';
import { StarEmpty } from './star-empty';
import { StarFull } from './star-full';
import './rating.scss';

export const Rating = ({ rating, listType }: IBooks) => {
  const starsArr = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating!) {
      starsArr.push(<StarFull key={i} listType={listType} />);
    } else {
      starsArr.push(<StarEmpty key={i} listType={listType} />);
    }
  }

  return <div className='rating'>{starsArr}</div>;
};
