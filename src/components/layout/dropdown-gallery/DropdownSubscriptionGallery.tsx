import Image from 'next/image';
import { dropdownGalleryItems } from './dropdownGalleryItems';
import CustomSlider from '../../customs/custom-slider-extended/CustomSliderExtended';

const DropdownSubscriptionGallery = () => {
  return (
    <div className='group/widget relative overflow-hidden w-[500px] h-[476px]'>
      <div className='mb-4 [&>*:not(:first-child)]:mt-2'>
        <div>
          <CustomSlider
            slidesPerView='auto'
            id='gallery-top'
            buttonsPosition='outside'
            spaceBetween={8}
            showNavBtnsOnHoverOnly
            isAutoplay
            speed={8000}
            isTransitionTimingFnLinear
          >
            {dropdownGalleryItems.slice(7, 14).map((imageUrl) => {
              return (
                <div className='w-[200px]' key={imageUrl}>
                  <Image
                    width='0'
                    height='0'
                    sizes='100vw'
                    className='w-full h-auto rounded-lg'
                    src={imageUrl}
                    alt='poster'
                  />
                </div>
              );
            })}
          </CustomSlider>
        </div>

        <div>
          <CustomSlider
            slidesPerView='auto'
            id='gallery-middle'
            buttonsPosition='outside'
            spaceBetween={8}
            showNavBtnsOnHoverOnly
            isAutoplay
            speed={8000}
            isTransitionTimingFnLinear
            isDirectionReversed
          >
            {dropdownGalleryItems.slice(0, 7).map((imageUrl) => (
              <div className='w-[200px]' key={imageUrl}>
                <Image
                  width='0'
                  height='0'
                  sizes='100vw'
                  className='w-full h-auto rounded-lg'
                  src={imageUrl}
                  alt='poster'
                />
              </div>
            ))}
          </CustomSlider>
        </div>

        <div>
          <CustomSlider
            slidesPerView='auto'
            id='gallery-middle2'
            buttonsPosition='outside'
            spaceBetween={8}
            showNavBtnsOnHoverOnly
            isAutoplay
            speed={8000}
            isTransitionTimingFnLinear
          >
            {dropdownGalleryItems.slice(14, 21).map((imageUrl) => (
              <div className='w-[200px]' key={imageUrl}>
                <Image
                  width='0'
                  height='0'
                  sizes='100vw'
                  className='w-full h-auto rounded-lg'
                  src={imageUrl}
                  alt='poster'
                />
              </div>
            ))}
          </CustomSlider>
        </div>

        <div>
          <CustomSlider
            slidesPerView='auto'
            id='gallery-bottom'
            buttonsPosition='outside'
            spaceBetween={8}
            showNavBtnsOnHoverOnly
            isAutoplay
            speed={8000}
            isTransitionTimingFnLinear
            isDirectionReversed
          >
            {dropdownGalleryItems.slice(21, 28).map((imageUrl) => (
              <div className='w-[200px]' key={imageUrl}>
                <Image
                  width='0'
                  height='0'
                  sizes='100vw'
                  className='w-full h-auto rounded-lg'
                  src={imageUrl}
                  alt='poster'
                />
              </div>
            ))}
          </CustomSlider>
        </div>
      </div>

      <div className='absolute top-0 left-0 bottom-0 z-20 w-[200px] bg-gradient-to-l from-[rgba(31,27,46,0)] to-[#1f1b2e] pointer-events-none'></div>
      <div className='absolute top-0 right-0 bottom-0 z-20 w-[200px] bg-gradient-to-r from-[rgba(31,27,46,0)] to-[#1f1b2e] pointer-events-none'></div>

      <div className='absolute bottom-8 right-6 z-30'>
        <a
          className='text-[15px] leading-5 text-white font-bold cursor-pointer subscription-gallery-link duration-300'
          href='https://www.ivi.ru/profile/subscriptions'
          target='_blank'
          rel='noopener noreferrer'
        >
          Другие подписки
        </a>
      </div>
    </div>
  );
};

export default DropdownSubscriptionGallery;
