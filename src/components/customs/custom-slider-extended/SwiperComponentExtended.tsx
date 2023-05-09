import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

import 'swiper/css';
import 'swiper/css/navigation';
SwiperCore.use([Autoplay, Navigation]);

import { ButtonsPositionType, SlidesPerViewType, SwiperComponentProps } from './types';
import { getSliderBreakpoints } from '@/lib/getSliderBreakpoints';

const slideStyle = (slidesPerView: SlidesPerViewType) => {
  return slidesPerView === 'auto' ? '!w-auto' : 'pt-2';
};

const buttonsStyle = (
  position: ButtonsPositionType,
  direction: 'prev' | 'next',
  id: number | string,
  showOnHoverOnly?: boolean,
  hasButtonsBackground?: boolean
) => {
  let style = `absolute outline-none cursor-pointer h-full flex items-center w-[30px] z-20 top-0 ${
    showOnHoverOnly ? 'opacity-0 group-hover/slider:opacity-100' : ''
  } ${hasButtonsBackground ? ' bg-[#312b45]' : ' bg-transparent'}`;

  if (position === 'inside') {
    // style += `${hasButtonsBackground ? ' bg-[#312b45]' : ' bg-transparent'}`;
    return direction === 'prev'
      ? style + ` custom-swiper-prev-${id} -left-[3px]`
      : style + ` custom-swiper-next-${id} -right-[3px]`;
  }

  if (position === 'outside') {
    // style += ' bg-transparent';
    return direction === 'prev'
      ? style + ` custom-swiper-prev-${id} -left-[25px]`
      : style + ` custom-swiper-next-${id} -right-[25px]`;
  }

  if (position === 'promo-large') {
    // style += ' bg-transparent';
    return direction === 'prev'
      ? style + ` custom-swiper-prev-${id} left-[8%]`
      : style + ` custom-swiper-next-${id} right-[8%]`;
  }

  if (position === 'promo-small') {
    // style += ' bg-transparent';
    return direction === 'prev'
      ? style + ` custom-swiper-prev-${id} left-[-28px]`
      : style + ` custom-swiper-next-${id} right-[-28px]`;
  }
};

const navButton = (direction: 'prev' | 'next', id: number | string) =>
  direction === 'prev' ? `.custom-swiper-prev-${id}` : `.custom-swiper-next-${id}`;

const SwiperComponent: React.FC<SwiperComponentProps> = ({
  children,
  id,
  buttonsPosition,
  lastSlide,
  slidesPerView,
  slidesPerGroup,
  spaceBetween,
  showNavBtnsOnHoverOnly,
  hasButtons,
  hasButtonsBackground,
  hasShadow,
  allowTouchMove,
  centeredSlides,
  initialSlide,
  isAutoplay,
  loop,
  delay,
  speed,
  isTransitionTimingFnLinear,
  isDirectionReversed,
}) => {
  return (
    <div className='relative'>
      {hasButtons ? (
        <>
          <div className={buttonsStyle(buttonsPosition, 'prev', id, showNavBtnsOnHoverOnly)}>
            <ChevronLeftIcon className='text-white w-full opacity-40 hover:opacity-100 duration-300 stroke-[2.5]' />
          </div>
          <div className={buttonsStyle(buttonsPosition, 'next', id, showNavBtnsOnHoverOnly)}>
            <ChevronRightIcon className='text-white w-full opacity-40 hover:opacity-100 duration-300 stroke-[2.5]' />
          </div>
        </>
      ) : null}

      <Swiper
        autoHeight={true}
        id={hasShadow ? 'slider-with-shadow' : undefined}
        watchSlidesProgress
        // className={`!static ${slidesPerView === 'auto' ? '' : '!pl-[1.5%]'}`}
        spaceBetween={spaceBetween ? spaceBetween : 20}
        allowTouchMove={allowTouchMove}
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesPerGroup}
        navigation={{
          nextEl: navButton('next', id),
          prevEl: navButton('prev', id),
        }}
        breakpoints={getSliderBreakpoints(slidesPerView)}
        centeredSlides={centeredSlides}
        initialSlide={initialSlide}
        autoplay={
          isAutoplay
            ? {
                delay: delay,
                disableOnInteraction: false,
                reverseDirection: isDirectionReversed,
              }
            : undefined
        }
        loop={loop || isAutoplay ? true : false}
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
