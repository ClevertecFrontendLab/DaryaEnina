import React, { useState } from 'react';
import SwiperCore, { A11y, Controller, FreeMode, Navigation, Pagination, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperClass from 'swiper/types/swiper-class';

import EmptyEmage from '../../assets/empty.png';
import { IBooks } from '../../interfaces';
import './slider.scss';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination, A11y, Controller]);

export const Slider = ({ image }: IBooks) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();

  return (
    <div className='slider__wrapper'>
      {image!.url.length > 0 ? (
        <React.Fragment>
          <Swiper
            tag='section'
            pagination={{ clickable: true }}
            initialSlide={1}
            centeredSlides={true}
            data-test-id='slide-big'
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            modules={[FreeMode, Navigation, Thumbs, Pagination, A11y]}
            className='slider__second'
          >
            {image?.url.map((e, index) => (
              <SwiperSlide key={(444 + index).toString()}>
                <img src={e} alt={`book  ${e}`} className='slider__img-big' />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={5}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Thumbs]}
            className='slider__main'
          >
            {image?.url.map((e, index) => (
              <SwiperSlide data-test-id='slide-mini' key={(464 + index).toString()}>
                <img src={e} alt={`book  ${e}`} className='slider__image' />
              </SwiperSlide>
            ))}
          </Swiper>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {' '}
          {image!.url.length > 0 ? (
            <img src={image!.url[0]} alt='book img' className='slider__wrapper-second' />
          ) : (
            <img src={EmptyEmage} alt='no book img' className='slider__wrapper-second' />
          )}
        </React.Fragment>
      )}
    </div>
  );
};
