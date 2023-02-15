import React, { useState } from 'react';
import SwiperCore, { A11y, Controller, FreeMode, Navigation, Pagination, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperClass from 'swiper/types/swiper-class';

import EmptyEmage from '../../assets/empty.png';
import { IBook } from '../../interfaces';
import './slider.scss';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { host } from '../../api/api';

SwiperCore.use([Navigation, Pagination, A11y, Controller]);

export const Slider = ({ images }: IBook) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();

  const url = images?.map((img, i) => ({ url: `${host}${img.url}` }));

  return (
    <div className='slider__wrapper'>
      {url!.length > 1 ? (
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
            {url!.map((e, index) => (
              <SwiperSlide key={(444 + index).toString()}>
                <img src={e.url} alt='book' className='slider__img-big' />
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
            {url!.map((e, index) => (
              <SwiperSlide data-test-id='slide-mini' key={(464 + index).toString()}>
                <img src={e.url} alt='book' className='slider__image' />
              </SwiperSlide>
            ))}
          </Swiper>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {' '}
          {url?.length === 1 ? (
            <img src={`${url[0].url}`} alt='book img' className='slider__wrapper-second' />
          ) : (
            <img src={EmptyEmage} alt='no book img' className='slider__wrapper-second' />
          )}
        </React.Fragment>
      )}
    </div>
  );
};
