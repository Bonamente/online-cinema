import dynamic from 'next/dynamic';
import Link from 'next/link';
import { CustomSliderProps } from './types';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

const SwiperComponent = dynamic(() => import('./SwiperComponentExtended'), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

const CustomSlider: React.FC<CustomSliderProps> = ({
  id,
  children,
  buttonsPosition,
  slidesPerView,
  slidesPerGroup = 1,
  lastSlide,
  title,
  link,
  spaceBetween,
  showNavBtnsOnHoverOnly,
  hasButtons = true,
  hasButtonsBackground = true,
  hasShadow = false,
  allowTouchMove = false,
  centeredSlides,
  initialSlide,
  isAutoplay,
  loop,
  delay = 0,
  speed,
  isTransitionTimingFnLinear = false,
  isDirectionReversed = false,
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
        id={id}
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesPerGroup}
        lastSlide={lastSlide}
        buttonsPosition={buttonsPosition}
        showNavBtnsOnHoverOnly={showNavBtnsOnHoverOnly}
        spaceBetween={spaceBetween}
        hasButtons={hasButtons}
        hasButtonsBackground={hasButtonsBackground}
        hasShadow={hasShadow}
        allowTouchMove={allowTouchMove}
        centeredSlides={centeredSlides}
        initialSlide={initialSlide}
        isAutoplay={isAutoplay}
        loop={loop}
        delay={delay}
        speed={speed}
        isTransitionTimingFnLinear={isTransitionTimingFnLinear}
        isDirectionReversed={isDirectionReversed}
      >
        {children}
      </SwiperComponent>
    </div>
  );
};

export default CustomSlider;
