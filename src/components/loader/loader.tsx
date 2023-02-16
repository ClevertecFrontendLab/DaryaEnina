import loader from '../../assets/loader.svg';
import './loader.scss';

export const Loader = () => (
  <div className='loader-wrapper' data-test-id='loader'>
    <img src={loader} alt='loading' className='loader' />
  </div>
);
