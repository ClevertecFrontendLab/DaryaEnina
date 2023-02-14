import { useSelector } from 'react-redux';

import { RootState } from '../../store/store';

import './modal.scss';

export const Modal = () => {
  const { error } = useSelector((state: RootState) => state.books);

  return (
    <div className='modal' data-test-id='error'>
      <div className='modal-content'>
        <h3 className='modal-error'>Ошибка получения данных</h3>
      </div>
    </div>
  );
};
