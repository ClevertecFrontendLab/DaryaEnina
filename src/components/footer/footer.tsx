import React from 'react';
import icon1 from '../../assets/facebook.png';
import icon2 from '../../assets/instagram.png';
import icon3 from '../../assets/vk.png';
import icon4 from '../../assets/linkedin.png';
import './footer.scss';

export const Footer = () => (
  <footer className='footer'>
    <div className='footer__container_txt'>
      <p className='footer__txt'> &#169; 2020-2023 Cleverland.</p>
      <p className='footer__txt'> Все права защищены.</p>
    </div>
    <div className='footer__container_img'>
      <a href='https://www.microsoft.com/ru-by/' rel='noreferrer' target='_blank'>
        <img className='footer__img' src={icon1} alt='social icon' />
      </a>
      <a href='https://www.microsoft.com/ru-by/' rel='noreferrer' target='_blank'>
        <img className='footer__img' src={icon2} alt='social icon' />
      </a>
      <a href='https://www.microsoft.com/ru-by/' rel='noreferrer' target='_blank'>
        <img className='footer__img' src={icon3} alt='social icon' />
      </a>
      <a href='https://www.microsoft.com/ru-by/' target='_blank' rel='noreferrer'>
        <img className='footer__img' src={icon4} alt='social icon' />
      </a>
    </div>
  </footer>
);
