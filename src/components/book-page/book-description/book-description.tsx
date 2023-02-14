import './style.scss';

export const BookDescription = () => (
  <div className='book__page-description__wrapper'>
    <div className='book__page-description__title'>Подробная информация</div>
    <div className='book__page-description__content'>
      <div className='book__page-description__content-col'>
        <div className='book__page-description__content__row'>
          <div className='book__page-description__content__row-title'>Издательство</div>
          <div className='book__page-description__content__row-value'>Питер</div>
        </div>
        <div className='book__page-description__content__row'>
          <div className='book__page-description__content__row-title'>Год издания</div>
          <div className='book__page-description__content__row-value'>2019</div>
        </div>
        <div className='book__page-description__content__row'>
          <div className='book__page-description__content__row-title'>Страниц</div>
          <div className='book__page-description__content__row-value'>288</div>
        </div>
        <div className='book__page-description__content__row'>
          <div className='book__page-description__content__row-title'>Переплёт</div>
          <div className='book__page-description__content__row-value'>Мягкая обложка</div>
        </div>
        <div className='book__page-description__content__row'>
          <div className='book__page-description__content__row-title'>Формат</div>
          <div className='book__page-description__content__row-value'>70х100</div>
        </div>
      </div>
      <div className='book__page-description__content-col'>
        <div className='book__page-description__content__row'>
          <div className='book__page-description__content__row-title'>Жанр</div>
          <div className='book__page-description__content__row-value'>Компьютерная литература</div>
        </div>
        <div className='book__page-description__content__row'>
          <div className='book__page-description__content__row-title'>Вес</div>
          <div className='book__page-description__content__row-value'>370 г</div>
        </div>
        <div className='book__page-description__content__row'>
          <div className='book__page-description__content__row-title'>ISBN</div>
          <div className='book__page-description__content__row-value'>978-5-4461-0923-4</div>
        </div>
        <div className='book__page-description__content__row'>
          <div className='book__page-description__content__row-title'>Изготовитель</div>
          <div className='book__page-description__content__row-value'>
            ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29
          </div>
        </div>
      </div>
    </div>
  </div>
);
