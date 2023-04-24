import CustomSlider from '../../../../customs/custom-slider-extended/CustomSliderExtended';
import { TvDropdownSliderProps } from './types';

const TvDropdownSlider: React.FC<TvDropdownSliderProps> = ({
  id,
  title,
  children,
  slidesPerView,
  spaceBetween,
}) => {
  return (
    <div className='group/slider'>
      <h3 className='mb-4 text-[15px] font-bold'>{title}</h3>

      <div className='relative'>
        <CustomSlider
          slidesPerView={slidesPerView}
          id={id}
          buttonsPosition='outside'
          spaceBetween={spaceBetween}
          showNavBtnsOnHoverOnly
        >
          {children}
        </CustomSlider>

        <div className='absolute z-10 top-0 right-0 w-[60px] h-full bg-gradient-to-r from-[rgba(31,27,46,0)] to-[#1f1b2e]'></div>
      </div>
    </div>
  );
};

export default TvDropdownSlider;
