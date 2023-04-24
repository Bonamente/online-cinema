import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import Logo from '../logo/Logo';
import { NavigationProps } from './types';

const Navigation: React.FC<NavigationProps> = ({
  handleHovering,
  handleClick,
}) => {
  const isLargeScreen = useMediaQuery({ query: '(min-width: 1160px)' });

  return (
    <nav className='flex h-full items-center'>
      <Logo />
      {isLargeScreen ? (
        <ul className='flex h-full items-stretch ml-8'>
          <li className='flex items-center'>
            <Link className='header-link font-bold' href='/' title='Мой Иви'>
              Мой Иви
            </Link>
          </li>
          <li className='flex items-center pl-4'>
            <a
              className='header-link font-bold'
              href='https://www.ivi.ru/new'
              title='Что нового'
              target='_blank'
              rel='noopener noreferrer'
            >
              Что нового
            </a>
          </li>
          <li
            className='flex items-center pl-4'
            onMouseOver={
              isLargeScreen ? () => handleHovering('movies') : undefined
            }
            onMouseOut={isLargeScreen ? () => handleHovering('') : undefined}
            onClick={handleClick}
          >
            <Link
              className='header-link font-bold'
              href='/movies'
              title='Фильмы онлайн'
            >
              Фильмы
            </Link>
          </li>
          <li
            className='flex items-center pl-4'
            onMouseOver={
              isLargeScreen ? () => handleHovering('series') : undefined
            }
            onMouseOut={isLargeScreen ? () => handleHovering('') : undefined}
            onClick={handleClick}
          >
            <Link
              className='header-link font-bold'
              href='/movies'
              title='Сериалы онлайн'
            >
              Сериалы
            </Link>
          </li>
          <li
            className='flex items-center pl-4'
            onMouseOver={
              isLargeScreen ? () => handleHovering('animation') : undefined
            }
            onMouseOut={isLargeScreen ? () => handleHovering('') : undefined}
            onClick={handleClick}
          >
            <a
              className='header-link font-bold'
              href='https://www.ivi.ru/animation'
              title='Мультфильмы онлайн'
              target='_blank'
              rel='noopener noreferrer'
            >
              Мультфильмы
            </a>
          </li>
          <li
            className='flex items-center pl-4'
            onMouseOver={isLargeScreen ? () => handleHovering('tv') : undefined}
            onMouseOut={isLargeScreen ? () => handleHovering('') : undefined}
            onClick={handleClick}
          >
            <a
              className='header-link font-bold'
              href='https://www.ivi.ru/tvplus'
              title='TV+'
              target='_blank'
              rel='noopener noreferrer'
            >
              TV+
            </a>
          </li>
        </ul>
      ) : null}
    </nav>
  );
};

export default Navigation;
