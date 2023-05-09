import { useMediaQuery } from 'react-responsive';
import { TvIcon } from '@heroicons/react/24/solid';
import { SquaresPlusIcon } from '@heroicons/react/24/outline';
import FooterButton from '@/components/layout/footer/footer-button/FooterButton';

const MobileNavBottomButtonsGroup = () => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 650px)' });

  return (
    <div
      className={`flex w-full pb-8 border-b border-white/[.16] ${
        isSmallScreen
          ? 'flex-col [&>*:not(:first-child)]:mt-3'
          : 'justify-between flex-wrap'
      } `}
    >
      <a
        className={`${
          isSmallScreen
            ? 'flex justify-center w-full'
            : 'flex justify-center w-[calc(50%_-_12px)]'
        } 'group outline-none'`}
        href='https://www.ivi.ru/pages/tvsmart/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FooterButton size='middle' isWrappedByLink>
          <TvIcon className='w-5 h-5 stroke-[1.5]' />
          <div className='flex flex-col items-start ml-2'>
            <span className='text-[10px] leading-[12px] font-normal'>
              Смотрите на
            </span>
            <span className='text-[15px] leading-[20px]'>Smart TV</span>
          </div>
        </FooterButton>
      </a>

      <a
        className={`${
          isSmallScreen
            ? 'flex justify-center w-full'
            : 'flex justify-center w-[calc(50%_-_12px)]'
        } 'group outline-none'`}
        href='https://www.ivi.ru/devices'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FooterButton size='middle' isWrappedByLink>
          <SquaresPlusIcon className='w-5 h-5 stroke-[1.5]' />
          <span className='ml-2 text-[15px] leading-[20px]'>
            Все устройства
          </span>
        </FooterButton>
      </a>
    </div>
  );
};

export default MobileNavBottomButtonsGroup;
