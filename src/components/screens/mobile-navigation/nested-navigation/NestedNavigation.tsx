import { useState } from 'react';
import Link from 'next/link';

import {
  VideoCameraIcon,
  FilmIcon,
  FaceSmileIcon,
  TvIcon,
} from '@heroicons/react/24/outline';

import {
  movieGenresLinks,
  movieContries,
  movieYears,
  movieNew,
  seriesGenresLinks,
  seriesContries,
  seriesYears,
  seriesNew,
  animationGenresLinks,
  animationContries,
  animationYears,
  animationNew,
  tvLinks,
  tvChannelLinks,
  tvSportLinks,
} from '@/components/links-list/links';

import { broadcastsData } from '@/components/layout/header/broadcast-list/broadcastsData';

import DropdownBtn from '@/components/layout/dropdown-button/DropdownBtn';
import DropdownMainContent from '@/components/layout/header/dropdown-main-content/DropdownMainContent';
import DropdownTvContent from '@/components/layout/header/dropdown-tv-content/DropdownTvContent';

const NestedNavigation = () => {
  const [activeDropdown, setActiveDropdown] = useState('');

  const handleClick = (link: string) => {
    if (activeDropdown === link) {
      setActiveDropdown('');
    } else {
      setActiveDropdown(link);
    }
  };

  return (
    <div className='w-full mt-8 pt-8 border-t border-white/[.16]'>
      <nav>
        <ul className='[&>*:not(:first-child)]:mt-6'>
          <li>
            <Link className='mobile-nav-link' href='/'>
              Мой Иви
            </Link>
          </li>
          <li>
            <a
              className='mobile-nav-link'
              href='https://www.ivi.ru/new'
              target='_blank'
              rel='noopener noreferrer'
            >
              Что нового
            </a>
          </li>
          <li>
            <DropdownBtn
              isDropdownOpen={activeDropdown === 'movies'}
              handleClick={() => handleClick('movies')}
            >
              <VideoCameraIcon className='w-5 h-5 mr-3 stroke-2' />
              <span>Фильмы</span>
            </DropdownBtn>
            {activeDropdown === 'movies' ? (
              <DropdownMainContent
                genresLinks={movieGenresLinks}
                contriesLinks={movieContries}
                yearsLinks={movieYears}
                newLinks={movieNew}
                mobileLinkText='Все фильмы'
                mobileLinkURL='/movies'
                isMobile
              />
            ) : null}
          </li>
          <li>
            <DropdownBtn
              isDropdownOpen={activeDropdown === 'series'}
              handleClick={() => handleClick('series')}
            >
              <FilmIcon className='w-5 h-5 mr-3 stroke-2' />
              <span>Сериалы</span>
            </DropdownBtn>
            {activeDropdown === 'series' ? (
              <DropdownMainContent
                genresLinks={seriesGenresLinks}
                contriesLinks={seriesContries}
                yearsLinks={seriesYears}
                newLinks={seriesNew}
                mobileLinkText='Все сериалы'
                mobileLinkURL='/movies'
                isMobile
              />
            ) : null}
          </li>
          <li>
            <DropdownBtn
              isDropdownOpen={activeDropdown === 'animation'}
              handleClick={() => handleClick('animation')}
            >
              <FaceSmileIcon className='w-5 h-5 mr-3 stroke-2' />
              <span>Мультфильмы</span>
            </DropdownBtn>
            {activeDropdown === 'animation' ? (
              <DropdownMainContent
                genresLinks={animationGenresLinks}
                contriesLinks={animationContries}
                yearsLinks={animationYears}
                newLinks={animationNew}
                mobileLinkText='Все мультфильмы'
                mobileLinkURL='/movies'
                isMobile
              />
            ) : null}
          </li>
          <li>
            <DropdownBtn
              isDropdownOpen={activeDropdown === 'tv'}
              handleClick={() => handleClick('tv')}
            >
              <TvIcon className='w-5 h-5 mr-3 stroke-2' />
              <span>TV+</span>
            </DropdownBtn>
            {activeDropdown === 'tv' ? (
              <DropdownTvContent
                tvLinks={tvLinks}
                tvChannelLinks={tvChannelLinks}
                tvSportLinks={tvSportLinks}
                broadcasts={broadcastsData}
                isMobile
              />
            ) : null}
          </li>
          <li>
            <a
              className='mobile-nav-link'
              href='https://www.ivi.ru/goodmovies'
              target='_blank'
              rel='noopener noreferrer'
            >
              Что посмотреть
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NestedNavigation;
