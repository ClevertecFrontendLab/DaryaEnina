import { useSelector } from 'react-redux';
import starEmpty from '../../assets/star-empty.png';
import { RootState } from '../../store/store';

export const StarEmpty = () => {
  const { isWindow } = useSelector((state: RootState) => state.list);

  return (
    <div className={isWindow ? 'star-empty__square' : 'star-empty__line'}>
      <img src={starEmpty} alt='' />
    </div>
  );
};
