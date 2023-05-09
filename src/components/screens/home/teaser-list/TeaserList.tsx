import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

const TeaserList = () => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 879px)' });

  return (
    <div
      className={`flex w-full ${
        isSmallScreen ? 'flex-col [&>*:not(:first-child)]:mt-3' : 'justify-between flex-wrap'
      } pt-6`}
    >
      <div className={`relative ${isSmallScreen ? 'w-full' : 'w-[calc(50%_-_12px)]'}`}>
        <button
          className='teaser-list-button bg-[url("/images/teaser-btn-pattern.svg")] bg-[#1f1b2e] hover:bg-[#231f35] focus:bg-[#231f35] active:bg-[#1b1827] '
          type='button'
        >
          <Image width='24' height='32' src='/icons/lightning.svg' alt='' />
          <span className='ml-2'>30 дней подписки за 1 ₽</span>
        </button>
      </div>

      <div className={`relative ${isSmallScreen ? 'w-full' : 'w-[calc(50%_-_12px)]'}`}>
        <button
          className='teaser-list-button bg-[#1f1b2e] hover:bg-[#2e2844] focus:bg-[#2e2844] active:bg-[#191524]'
          type='button'
        >
          <Image width='56' height='32' src='/icons/gift.svg' alt='' />
          <span className='ml-2'>Активировать сертификат</span>
        </button>
      </div>
    </div>
  );
};

export default TeaserList;
