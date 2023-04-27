import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';
import { promoSlides } from './promoSlides';
import CustomSlider from '@/components/customs/custom-slider-extended/CustomSliderExtended';

const PromoSlider = () => {
  const router = useRouter();
  const isMobile = useMediaQuery({ query: '(max-width: 599px)' });
  const isSmallScreen = useMediaQuery({ minWidth: 600, maxWidth: 1279 });
  const hasTouchMove = isSmallScreen || isMobile;

  const handleBtnClick = () => {
    router.push('/movies');
  };

  let containerWidth: string;
  let description: string;
  let slideTitle: string;

  switch (true) {
    case isSmallScreen:
      containerWidth = 'w-full px-6';
      description = 'pb-[10px]';
      slideTitle = 'mb-5 text-[28px] leading-[32px]';
      break;
    case isMobile:
      containerWidth = 'w-full px-2';
      description = 'pb-[20px]';
      slideTitle = 'mb-0 text-[28px] leading-[32px]';
      break;
    default:
      containerWidth = 'w-full';
      description = 'pb-[60px]';
      slideTitle = 'mb-10 text-[56px] leading-[56px]';
  }

  const slidesNum = isSmallScreen || isMobile ? 1 : 'auto';

  return (
    <div className={`${containerWidth}`}>
      <div className='mx-auto'>
        <div>
          <CustomSlider
            id='promo-slider'
            slidesPerView={slidesNum}
            buttonsPosition={isSmallScreen ? 'promo-small' : 'promo-large'}
            spaceBetween={16}
            initialSlide={1}
            allowTouchMove={hasTouchMove}
            hasButtons={!isMobile}
            hasShadow
            centeredSlides
            loop
          >
            {promoSlides.map((slide) => {
              return (
                <div className='relative max-w-[1216px]' key={slide.imgUrl}>
                  <Image
                    width='0'
                    height='0'
                    sizes='100vw'
                    className={`${isMobile ? 'w-[550px]' : 'w-[1216px]'} h-auto rounded-3xl`}
                    src={isMobile ? slide.smImgUrl : slide.imgUrl}
                    alt='promo'
                  />
                  <Link
                    className='absolute top-0 left-0 right-0 bottom-0 flex flex-col p-8'
                    href='/movies'
                  >
                    <div
                      className={`flex flex-col mt-auto items-left w-[calc(40%_+_25px)] ${description}`}
                    >
                      <h3 className={`${slideTitle} text-white font-bold `}>{slide.title}</h3>

                      {isMobile ? null : (
                        <button
                          className='flex justify-center max-w-[177px] h-10 py-[9px] px-[15px] text-[15px] text-white font-bold rounded-lg  bg-[#ea003d] hover:bg-[#ff0f4d] active:bg-[#db0e41]   duration-300'
                          title='Показать подборку'
                          onClick={handleBtnClick}
                        >
                          Показать подборку
                        </button>
                      )}
                    </div>
                  </Link>
                </div>
              );
            })}
          </CustomSlider>
        </div>
      </div>
    </div>
  );
};

export default PromoSlider;
