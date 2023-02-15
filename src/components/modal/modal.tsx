import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../../store/store';
import warning from '../../assets/warning.svg';

import './modal.scss';

export const Modal = () => {
  const dispatch = useDispatch<AppDispatch>();

  const closeError = () => {
    dispatch(isShown(false));
  };

  return (
    <div className='modal' data-test-id='error'>
      <div className='modal-content'>
        <img className='modal-content-warning' src={warning} alt='warning' />
        <h3 className='modal-error'>Что-то пошло не так. Обновите страницу через некоторое время.</h3>
        <button type='button' className='close' onClick={() => closeError()} />
      </div>
    </div>
  );
};
function isShown(arg0: boolean): any {
  throw new Error('Function not implemented.');
}
