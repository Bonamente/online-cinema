import { Fragment } from 'react';
import dynamic from 'next/dynamic';
import { useMediaQuery } from 'react-responsive';

import CustomSlider from '@/components/customs/custom-slider-extended/CustomSliderExtended';
import PreviewWeekTop from '@/components/previews/preview-week-top/PreviewWeekTop';
const DynamicTitle = dynamic(() => import('./week-top-slider-title/WeekTopSliderTitle'), {
  ssr: false,
});

import { weekTopSlides } from './weekTopSlides'; // refactor to get data with props (SSG)

const WeekTopSlider = () => {
  const isSmallScreen = useMediaQuery({ minWidth: 879, maxWidth: 1159 });
  const isTabletScreen = useMediaQuery({ minWidth: 500, maxWidth: 879 });
  const isMobile = useMediaQuery({ query: '(max-width: 499px)' });
  const hasTouchMove = isSmallScreen || isTabletScreen || isMobile;

  let slidesNum: number;
  let slidesSpaceBetween: number;

  switch (true) {
    case isSmallScreen:
      slidesNum = 4;
      slidesSpaceBetween = 24;
      break;
    case isTabletScreen:
      slidesNum = 3;
      slidesSpaceBetween = 24;
      break;
    case isMobile:
      slidesNum = 2;
      slidesSpaceBetween = 16;
      break;
    default:
      slidesNum = 5;
      slidesSpaceBetween = 24;
  }

  return (
    <div>
      <DynamicTitle />

      <div className='py-6'>
        <CustomSlider
          id='week-top'
          slidesPerView={slidesNum}
          slidesPerGroup={4}
          speed={1000}
          spaceBetween={slidesSpaceBetween}
          allowTouchMove={hasTouchMove}
          buttonsPosition={isMobile ? 'inside' : 'outside'}
        >
          {weekTopSlides.map((slide) => (
            <Fragment key={slide.title}>
              <PreviewWeekTop
                title={slide.title}
                link={slide.link}
                poster={slide.poster}
                ratingNum={slide.ratingNum}
                ratingNum2={slide.ratingNum2}
              />
            </Fragment>
          ))}
        </CustomSlider>
      </div>
    </div>
  );
};

export default WeekTopSlider;
