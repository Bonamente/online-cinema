import { useMediaQuery } from 'react-responsive';
import { FolderPlusIcon, NewspaperIcon } from '@heroicons/react/20/solid';
import FooterButton from '@/components/layout/footer/footer-button/FooterButton';

const MobileNavTopButtonsGroup = () => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 879px)' });

  return (
    <div
      className={`flex w-full ${
        isSmallScreen
          ? 'flex-col [&>*:not(:first-child)]:mt-3'
          : 'justify-between flex-wrap'
      } pt-8`}
    >
      <div
        className={`relative ${
          isSmallScreen ? 'w-full' : 'w-[calc(50%_-_12px)]'
        }`}
      >
        <FooterButton size='large'>
          <FolderPlusIcon className='w-5 h-5 mx-3 text-white/[.48]' />
          <span>Подключить подписку</span>
          <span className='absolute top-2 right-2 w-[10px] h-[10px] rounded-[5px] bg-[#ea003d] shadow-[0_2px_8px_rgba(234,0,61,.8)]'></span>
        </FooterButton>
      </div>

      <div
        className={`relative ${
          isSmallScreen ? 'w-full' : 'w-[calc(50%_-_12px)]'
        }`}
      >
        <FooterButton size='large'>
          <NewspaperIcon className='w-5 h-5 mx-3 text-white/[.48]' />
          <span>Активация сертификата</span>
        </FooterButton>
      </div>
    </div>
  );
};

export default MobileNavTopButtonsGroup;
