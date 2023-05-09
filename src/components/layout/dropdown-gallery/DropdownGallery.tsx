import Image from 'next/image';
import { dropdownGalleryItems } from './dropdownGalleryItems';
import CustomSlider from '../../customs/custom-slider-extended/CustomSliderExtended';

const DropdownGallery = () => {
  return (
    <div className='group/widget absolute overflow-hidden w-[244px] h-[264px] rounded-lg  bg-[#312b45]'>
      <div className='mb-4 [&>*:not(:first-child)]:mt-2'>
        <div className='h-[66px]'>
          <CustomSlider
            slidesPerView='auto'
            id='widget-top'
            buttonsPosition='outside'
            spaceBetween={8}
            showNavBtnsOnHoverOnly
            isAutoplay
            speed={8000}
            isTransitionTimingFnLinear
          >
            {dropdownGalleryItems.slice(7, 14).map((imageUrl) => {
              return (
                <div className='w-[118px]' key={imageUrl}>
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

        <div className='h-[66px]'>
          <CustomSlider
            slidesPerView='auto'
            id='widget-middle'
            buttonsPosition='outside'
            spaceBetween={8}
            showNavBtnsOnHoverOnly
            isAutoplay
            speed={8000}
            isTransitionTimingFnLinear
            isDirectionReversed
          >
            {dropdownGalleryItems.slice(0, 7).map((imageUrl) => (
              <div className='w-[118px]' key={imageUrl}>
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

        <div className='h-[66px]'>
          <CustomSlider
            slidesPerView='auto'
            id='widget-bottom'
            buttonsPosition='outside'
            spaceBetween={8}
            showNavBtnsOnHoverOnly
            isAutoplay
            speed={8000}
            isTransitionTimingFnLinear
          >
            {dropdownGalleryItems.slice(14, 21).map((imageUrl) => (
              <div className='w-[118px]' key={imageUrl}>
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
      <div className='absolute top-0 left-0 z-20 h-[264px] w-16 bg-gradient-to-l from-[rgba(49,43,69,0)] to-[rgba(49,43,69,.96)] pointer-events-none'></div>
      <div className='absolute top-0 right-0 z-20 h-[264px] w-16 bg-gradient-to-r from-[rgba(49,43,69,0)] to-[rgba(49,43,69,.96)] pointer-events-none'></div>

      <div className='absolute left-0 right-0 bottom-0 z-20 h-[72px] pt-2 pb-3 bg-[rgba(49,43,69,.96)] transition-[height] duration-300 group-hover/widget:h-[140px]'>
        <div className='absolute top-[-48px] right-0 left-0 h-12 bg-gradient-to-b from-[rgba(49,43,69,0)] to-[rgba(49,43,69,.96)]'></div>

        <div className='flex h-12 mx-4 opacity-100 transition-all duration-300'>
          <div className='w-12 h-12 bg-[#ea003d] rounded-lg'>
            <Image
              width='48'
              height='48'
              src='/icons/subscription-ivi.svg'
              alt='logo'
            />
          </div>

          <div className='self-center flex-grow flex-shrink-0 h-11 ml-3 pointer-events-none'>
            <div className='h-6 text-[20px] leading-6 font-bold  text-white overflow-hidden text-ellipsis whitespace-nowrap'>
              Подписка Иви
            </div>
            <div className='h-4 mt-1 text-[13px] leading-4 text-[#d9d7e0] overflow-hidden text-ellipsis whitespace-nowrap'>
              От 199&nbsp;₽ за месяц
            </div>
          </div>
        </div>

        <div className='hidden absolute left-4 right-4 bottom-9 transition-all duration-300 opacity-0 translate-y-[10px] group-hover/widget:block group-hover/widget:opacity-100 group-hover/widget:translate-y-0'>
          <button className='h-8 w-full py-[7px] px-[11px] rounded-lg bg-[#ea003d] hover:bg-[#ff0f4d] active:bg-[#db0e41] transition-all duration-300'>
            <div className='text-[13px] leading-4 font-bold'>Подключить</div>
          </button>
        </div>
        <div className='hidden absolute left-4 right-4 bottom-3 h-3 text-[10px] leading-3 text-[#a5a1b2] text-center overflow-hidden text-ellipsis whitespace-nowrap pointer-events-none opacity-0 translate-y-[10px] transition-all duration-300 group-hover/widget:block group-hover/widget:opacity-100 group-hover/widget:translate-y-0'>
          Отключить можно в любой момент
        </div>
      </div>
    </div>
  );
};

export default DropdownGallery;
