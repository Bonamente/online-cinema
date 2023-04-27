import { useState } from 'react';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';

import Navigation from '../navigation/Navigation';
import HeaderDropdown from '../header-dropdown/HeaderDropdown';
import LangSwitcher from '../lang-switcher/LangSwitcher';
import SearchBtn from '../search-button/SearchBtn';
import SubscriptionBtn from '../subscription-button/SubscriptionBtn';
import NotificationBtn from '../notification-button/NotificationBtn';
import ProfileBtn from '../profile-button/ProfileBtn';

const HeaderContent = () => {
  const hasExtraMargins = useMediaQuery({ minWidth: 600, maxWidth: 1279 });
  const isLargeScreen = useMediaQuery({ query: '(min-width: 1160px)' });
  const isMobileScreen = useMediaQuery({ query: '(max-width: 600px)' });

  const router = useRouter();
  const isHomePage = router.pathname === '/';

  const [currentHoveringLink, setCurrentHoveringLink] = useState('');

  const handleHovering = (current: string) => {
    setCurrentHoveringLink(current);
  };

  const handleClick = () => {
    setCurrentHoveringLink('');
  };

  return (
    <div
      className={`relative z-50 page-header-container flex items-stretch h-[72px] px-3 ${
        hasExtraMargins ? 'mx-5' : ''
      }`}
    >
      <div className='flex items-stretch justify-between w-full'>
        {!isHomePage ? (
          <div className='absolute top-[71px] left-3 right-3 w-[98%] h-[1px] bg-white/[.16]'></div>
        ) : null}

        <Navigation handleHovering={handleHovering} handleClick={handleClick} />

        <div className='flex [&>*]:ml-4'>
          <div
            onMouseOver={isLargeScreen ? () => handleHovering('subscription') : undefined}
            onMouseOut={isLargeScreen ? () => handleHovering('') : undefined}
            onClick={handleClick}
          >
            {isHomePage ? (
              <SubscriptionBtn text='Оплатить подписку' bgColor='gradient' />
            ) : (
              <SubscriptionBtn text='Смотреть 30 дней за 1 ₽' bgColor='solid' />
            )}
          </div>

          {isLargeScreen ? <SearchBtn /> : null}

          {isMobileScreen ? null : (
            <NotificationBtn handleHovering={handleHovering} handleClick={handleClick} />
          )}

          <LangSwitcher />

          {isMobileScreen ? null : (
            <ProfileBtn handleHovering={handleHovering} handleClick={handleClick} />
          )}
        </div>

        {isLargeScreen && currentHoveringLink === 'movies' ? (
          <HeaderDropdown linkType='movies' handleHovering={handleHovering} />
        ) : null}
        {isLargeScreen && currentHoveringLink === 'series' ? (
          <HeaderDropdown linkType='series' handleHovering={handleHovering} />
        ) : null}

        {isLargeScreen && currentHoveringLink === 'animation' ? (
          <HeaderDropdown linkType='animation' handleHovering={handleHovering} />
        ) : null}

        {isLargeScreen && currentHoveringLink === 'tv' ? (
          <HeaderDropdown linkType='tv' handleHovering={handleHovering} />
        ) : null}

        {isLargeScreen && currentHoveringLink === 'notification' ? (
          <HeaderDropdown linkType='notification' handleHovering={handleHovering} />
        ) : null}

        {isLargeScreen && !isHomePage && currentHoveringLink === 'subscription' ? (
          <HeaderDropdown linkType='subscription' handleHovering={handleHovering} />
        ) : null}

        {isLargeScreen && currentHoveringLink === 'profile' ? (
          <HeaderDropdown linkType='profile' handleHovering={handleHovering} />
        ) : null}
      </div>
    </div>
  );
};

export default HeaderContent;
