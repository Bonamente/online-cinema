import React from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

import 'swiper/css';
import 'swiper/css/navigation';
import { SwiperComponentProps, ButtonsPositionType, SlidesPerViewType } from './types';
import { getSliderBreakpoints } from '@/lib/getSliderBreakpoints';

SwiperCore.use([Navigation]);

const slideStyle = (slidesPerView: SlidesPerViewType) => {
  return slidesPerView === 'auto' ? '!w-auto' : 'pt-2';
};

const buttonsStyle = (
  position: ButtonsPositionType,
  direction: 'prev' | 'next',
  id: number | string
) => {
  let style = 'absolute outline-none cursor-pointer h-full flex items-center w-[30px] z-20 top-0';
  if (position === 'inside') {
    style += ' bg-[#312b45]';
    return direction === 'prev'
      ? style + ` custom-swiper-prev-${id} -left-[3px]`
      : style + ` custom-swiper-next-${id} -right-[3px]`;
  }
  if (position === 'outside') {
    style += ' bg-transparent';
    return direction === 'prev'
      ? style + ` custom-swiper-prev-${id} -left-[25px]`
      : style + ` custom-swiper-next-${id} -right-[25px]`;
  }
};

const navBubbton = (direction: 'prev' | 'next', id: number | string) =>
  direction === 'prev' ? `.custom-swiper-prev-${id}` : `.custom-swiper-next-${id}`;

const SwiperComponent: React.FC<SwiperComponentProps> = ({
  children,
  id,
  buttonsPosition,
  lastSlide,
  slidesPerView,
}) => {
  return (
    <div className='relative'>
      <div className={buttonsStyle(buttonsPosition, 'prev', id)}>
        <ChevronLeftIcon className='text-white w-full' />
      </div>
      <div className={buttonsStyle(buttonsPosition, 'next', id)}>
        <ChevronRightIcon className='text-white w-full' />
      </div>
      <Swiper
        className={`!static ${slidesPerView === 'auto' ? '' : '!pl-[1.5%]'}`}
        spaceBetween={20}
        allowTouchMove={false}
        slidesPerView={'auto'}
        navigation={{
          nextEl: navBubbton('next', id),
          prevEl: navBubbton('prev', id),
        }}
        breakpoints={getSliderBreakpoints(slidesPerView)}
      >
        {Array.from(children).map((child, index) => (
          <SwiperSlide className={`swiper-slide ${slideStyle(slidesPerView)}`} key={index}>
            {child}
          </SwiperSlide>
        ))}
        {lastSlide && (
          <SwiperSlide className={`swiper-slide ${slideStyle(slidesPerView)}`}>
            {lastSlide}
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
