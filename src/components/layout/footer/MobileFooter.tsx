import Link from 'next/link';
import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import AppContext from '@/context/AppContext';
import FooterTab from './footer-tab/FooterTab';

import {
  XMarkIcon,
  TvIcon,
  MagnifyingGlassIcon,
  FolderOpenIcon,
  HomeIcon,
} from '@heroicons/react/24/outline';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid';

const MobileFooter = () => {
  const router = useRouter();
  const { prevRoute, onOpen } = useContext(AppContext);
  const [currentActiveTab, setCurrentActiveTab] = useState<string>(router.pathname);

  const handleClick = (tab: string) => {
    if (currentActiveTab === '/navigation') {
      router.push(prevRoute || '/');
      setCurrentActiveTab(prevRoute || '/');
    } else if (tab === '/navigation') {
      setCurrentActiveTab(tab);
      router.push('/navigation');
    } else {
      setCurrentActiveTab(tab);
    }
  };

  const handleSearchClick = () => {
    onOpen();
  };

  return (
    <footer className='fixed bottom-0 left-0 right-0 z-[50]'>
      <div className='mobile-footer h-12 text-white'>
        <Link className='footer-tab-item' href='/' onClick={() => handleClick('/')}>
          <FooterTab isActive={currentActiveTab === '/'}>
            <HomeIcon className='w-[20px] h-[20px] stroke-[3]' />
            <span className='mt-[4px]'>Мой Иви</span>
          </FooterTab>
        </Link>

        <Link className='footer-tab-item' href='/movies' onClick={() => handleClick('/movies')}>
          <FooterTab isActive={currentActiveTab === '/movies'}>
            <FolderOpenIcon className='w-[20px] h-[20px] stroke-[3]' />
            <span className='mt-[4px]'>Каталог</span>
          </FooterTab>
        </Link>

        <div className='footer-tab-item' onClick={handleSearchClick}>
          <FooterTab isActive={currentActiveTab === 'search'}>
            <MagnifyingGlassIcon className='w-[20px] h-[20px] stroke-[3]' />
            <span className='mt-[4px]'>Поиск</span>
          </FooterTab>
        </div>

        <a
          className='footer-tab-item'
          data-test='tv_plus'
          href='https://www.ivi.ru/tvplus'
          target='_blank'
          rel='noopener noreferrer'
          onClick={() => handleClick('tv')}
        >
          <FooterTab isActive={currentActiveTab === 'tv'}>
            <TvIcon className='w-[20px] h-[20px] stroke-[3]' />
            <span className='mt-[4px]'>TV+</span>
          </FooterTab>
        </a>

        <div className='footer-tab-item' onClick={() => handleClick('/navigation')}>
          <FooterTab isActive={currentActiveTab === '/navigation'}>
            {currentActiveTab === '/navigation' ? (
              <XMarkIcon className='w-[20px] h-[20px] stroke-[3]' />
            ) : (
              <EllipsisHorizontalIcon className='w-[20px] h-[20px] stroke-[3]' />
            )}
            <span className='mt-[4px]'>
              {currentActiveTab === '/navigation' ? 'Закрыть' : 'Ещё'}
            </span>
          </FooterTab>
        </div>
      </div>
    </footer>
  );
};

export default MobileFooter;
