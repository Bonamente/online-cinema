import dynamic from 'next/dynamic';
import React from 'react';
import Link from 'next/link';
import { CustomSliderProps } from './types';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

const SwiperComponent = dynamic(() => import('./SwiperComponent'), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

const CustomSlider: React.FC<CustomSliderProps> = ({
  title,
  id,
  children,
  link,
  lastSlide,
  slidesPerView,
  buttonsPosition,
}) => {
  return (
    <div>
      {title && (
        <div className='pl-3 mb-[12px] text-xl font-semibold text-white'>
          {link ? (
            <Link href={link} className=' flex items-center'>
              <h3>{title}</h3>
              <ChevronRightIcon className='w-[35px]' />
            </Link>
          ) : (
            <h3>{title}</h3>
          )}
        </div>
      )}

      <SwiperComponent
        slidesPerView={slidesPerView}
        lastSlide={lastSlide}
        id={id}
        buttonsPosition={buttonsPosition}
      >
        {children}
      </SwiperComponent>
    </div>
  );
};

export default CustomSlider;
