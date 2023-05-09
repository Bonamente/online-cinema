import Image from 'next/image';

import { footerAboutLinks, footerSectionsLinks, socialsLinks } from '@/components/links-list/links';

import FooterButton from '../footer-button/FooterButton';
import Socials from '../socials/Socials';
import LinksList from '@/components/links-list/LinksList';
import Support from '../support/Support';
import Copyright from '../copyright/Copyright';
import { TvIcon } from '@heroicons/react/24/solid';
import { SquaresPlusIcon } from '@heroicons/react/24/outline';

const FooterContent = () => {
  return (
    <div className='page-footer-container px-3 flex flex-col'>
      <div className='flex w-full py-12 border-y border-white/[.16]'>
        <div className='flex flex-col w-1/4 px-3'>
          <h3 className='link-list-title'>О нас</h3>
          <LinksList direction='column' links={footerAboutLinks} />
        </div>
        <div className='flex flex-col w-1/4 px-3'>
          <h3 className='link-list-title '>Разделы</h3>
          <LinksList direction='column' links={footerSectionsLinks} />
        </div>

        <Support />

        <div className='w-1/4 px-3'>
          <a
            className='flex flex-col items-center outline-none'
            href='https://www.ivi.ru/subscribe?redirect_url=%2F'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='flex justify-center items-center w-[104px] h-[104px] rounded-[20px] footer-subscription-link'>
              <svg xmlns='http://www.w3.org/2000/svg' width='56' height='56'>
                <path
                  stroke='#ffffff'
                  strokeWidth={1.5}
                  fill='transparent'
                  d='M9.26 9.26 3 11v3l14.14 3.14M21 15.34V6l-7.31 2.03M11.6 16.8a3.008 3.008 0 1 1-5.8-1.6M2 2l20 20'
                  transform='scale(2.33333)'
                />
              </svg>
            </div>

            <p className='mt-6 text-[15px] text-[#a5a1b2] text-center'>
              Смотрите фильмы, сериалы и мультфильмы без рекламы
            </p>
          </a>
        </div>
      </div>

      <div className='flex w-full py-12'>
        <div className='w-4/6'>
          <div>
            <div className='flex [&>*:not(:first-child)]:ml-3'>
              <a
                className='group outline-none'
                href='https://go.onelink.me/app/devicesiOS'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FooterButton size='middle' isWrappedByLink>
                  <Image src='/icons/apple-logo.svg' alt='apple logo' width={20} height={20} />

                  <div className='flex flex-col items-start  ml-2'>
                    <span className='text-[10px] leading-[12px] font-normal'>Загрузить в</span>
                    <span className='text-[15px] leading-[20px]'>App Store</span>
                  </div>
                </FooterButton>
              </a>

              <a
                className='group outline-none'
                href='https://go.onelink.me/app/devicesAndroid'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FooterButton size='middle' isWrappedByLink>
                  <Image
                    src='/icons/googleplay-logo.svg'
                    alt='googleplay logo'
                    width={20}
                    height={20}
                  />

                  <div className='flex flex-col items-start ml-2'>
                    <span className='text-[10px] leading-[12px] font-normal'>Доступно в</span>
                    <span className='text-[15px] leading-[20px]'>Google Play</span>
                  </div>
                </FooterButton>
              </a>

              <a
                className='group outline-none'
                href='https://www.ivi.ru/pages/tvsmart/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FooterButton size='middle' isWrappedByLink>
                  <TvIcon className='w-5 h-5 stroke-[1.5]' />
                  <div className='flex flex-col items-start ml-2'>
                    <span className='text-[10px] leading-[12px] font-normal'>Смотрите на</span>
                    <span className='text-[15px] leading-[20px]'>Smart TV</span>
                  </div>
                </FooterButton>
              </a>

              <a
                className='group outline-none'
                href='https://www.ivi.ru/devices'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FooterButton size='middle' isWrappedByLink>
                  <SquaresPlusIcon className='w-5 h-5 stroke-[1.5]' />
                  <span className='ml-2 text-[15px] leading-[20px]'>Все устройства</span>
                </FooterButton>
              </a>
            </div>
          </div>

          <Copyright />
        </div>
        <div className='flex justify-end items-start w-1/3'>
          <Socials links={socialsLinks} />
        </div>
      </div>
    </div>
  );
};

export default FooterContent;
