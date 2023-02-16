import { useSelector } from 'react-redux';
import star from '../../assets/star.png';
import { RootState } from '../../store/store';

export const StarFull = () => {
  const { isWindow } = useSelector((state: RootState) => state.list);

  return (
    <div className={isWindow ? 'star-full__square' : 'star-full__line'}>
      <img src={star} alt='' />
    </div>
  );
};
