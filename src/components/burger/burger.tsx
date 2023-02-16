import { useDispatch, useSelector } from 'react-redux';

import { changBurgerState } from '../../store/reducers/burger-reducer';
import { RootState } from '../../store/store';
import './burger.scss';

export const BurgerIcon = () => {
  const dispatch = useDispatch();
  const { burgerSet } = useSelector((state: RootState) => state.burger);

  function burgerStateOpen() {
    dispatch(changBurgerState(true));
  }
  function burgerStateClose() {
    dispatch(changBurgerState(false));
  }

  return (
    <button
      type='button'
      data-test-id='button-burger'
      className='burger__icon'
      onClick={() => (burgerSet ? burgerStateClose() : burgerStateOpen())}
    >
      <span className={burgerSet ? 'burger-bar clicked' : 'burger-bar unclicked'} />
      <span className={burgerSet ? 'burger-bar clicked' : 'burger-bar unclicked'} />
      <span className={burgerSet ? 'burger-bar clicked' : 'burger-bar unclicked'} />
    </button>
  );
};
