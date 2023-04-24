import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

import 'swiper/css';
import 'swiper/css/navigation';

import {
  CustomSliderProps,
  ButtonsPositionType,
  SlidesPerViewType,
} from './types';

import { getSliderBreakpoints } from '@/lib/getSliderBreakpoints';

SwiperCore.use([Autoplay, Navigation]);

const slideStyle = (slidesPerView: SlidesPerViewType) => {
  return slidesPerView === 'auto' ? '!w-auto' : 'pt-2';
};

const buttonsStyle = (
  position: ButtonsPositionType,
  direction: 'prev' | 'next',
  id: number | string,
  showOnHoverOnly?: boolean
) => {
  let style = `absolute outline-none cursor-pointer h-full flex items-center w-[30px] z-20 top-0 ${
    showOnHoverOnly ? 'opacity-0 group-hover/slider:opacity-100' : ''
  }`;
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
  direction === 'prev'
    ? `.custom-swiper-prev-${id}`
    : `.custom-swiper-next-${id}`;

const SwiperComponent: React.FC<CustomSliderProps> = ({
  children,
  id,
  buttonsPosition,
  lastSlide,
  slidesPerView,
  spaceBetween,
  showNavBtnsOnHoverOnly,
  isAutoplay,
  delay = 0,
  speed,
  isTransitionTimingFnLinear = false,
  isDirectionReversed = false,
}) => {
  return (
    <div className='relative'>
      <div
        className={buttonsStyle(
          buttonsPosition,
          'prev',
          id,
          showNavBtnsOnHoverOnly
        )}
      >
        <ChevronLeftIcon className='text-white w-full' />
      </div>
      <div
        className={buttonsStyle(
          buttonsPosition,
          'next',
          id,
          showNavBtnsOnHoverOnly
        )}
      >
        <ChevronRightIcon className='text-white w-full' />
      </div>
      <Swiper
        className={`!static ${slidesPerView === 'auto' ? '' : '!pl-[1.5%]'}`}
        spaceBetween={spaceBetween ? spaceBetween : 20}
        allowTouchMove={false}
        slidesPerView={'auto'}
        navigation={{
          nextEl: navBubbton('next', id),
          prevEl: navBubbton('prev', id),
        }}
        breakpoints={getSliderBreakpoints(slidesPerView)}
        autoplay={
          isAutoplay
            ? {
                delay: delay,
                disableOnInteraction: false,
                reverseDirection: isDirectionReversed,
              }
            : undefined
        }
        loop={isAutoplay ? true : false}
        speed={speed}
        onSwiper={
          isTransitionTimingFnLinear
            ? (swiper) => {
                swiper.wrapperEl.style.transitionTimingFunction = 'linear';
              }
            : undefined
        }
      >
        {Array.from(children).map((child, index) => (
          <SwiperSlide
            className={`swiper-slide ${slideStyle(slidesPerView)}`}
            key={index}
          >
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
