import React from 'react';
import { Details, MedallionsList, MovieRating } from '@/components/screens/movie/components';

interface MovieInfoProps {
  variant: 'short' | 'full';
}

export const MovieInfo: React.FC<MovieInfoProps> = ({ variant }) => {
  return (
    <div className={`flex flex-col ${variant === 'full' ? 'w-[465px]' : 'w-full'} `}>
      <div className={`${variant === 'full' && 'max-[1050px]:hidden'}`}>
        <h1
          className={`font-bold text-white mb-4 ${
            variant === 'full' ? 'text-center text-4xl' : 'text-[50px] max-[600px]:text-[32px]'
          }`}
        >
          Зеленая книга (Фильм 2018)
        </h1>
        <ul className='flex items-center gap-2 text-[14px] text-gray-400 font-semibold mx-auto mb-1'>
          <li className='transition-colors duration-300 hover:text-white cursor-pointer'>2018</li>
          <li>2ч. 4 мин.</li>
          <li>18+</li>
        </ul>
        <ul className='flex items-center gap-2 text-[14px] text-gray-400 font-semibold mx-auto mb-1'>
          <li className='transition-colors duration-300 hover:text-white cursor-pointer'>США</li>
          <li className='w-[2px] h-[2px] bg-white rounded-full'></li>
          <li className='transition-colors duration-300 hover:text-white cursor-pointer'>
            Комедия
          </li>
          <li className='w-[2px] h-[2px] bg-white rounded-full'></li>
          <li className='transition-colors duration-300 hover:text-white cursor-pointer'>
            Биография
          </li>
          <li className='w-[2px] h-[2px] bg-white rounded-full'></li>
          <li className='transition-colors duration-300 hover:text-white cursor-pointer'>Драмы</li>
        </ul>
        <ul className='flex items-center gap-2 text-[14px] text-gray-400 font-semibold mx-auto'>
          <li>
            <p className='text-white font-bold text-[12px] rounded px-3 py-0.5 bg-[rgba(255,255,255,.16)]'>
              FullHD
            </p>
          </li>
          <li className='flex gap-x-1 items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='currentColor'
              className='w-4 h-4'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z'
              />
            </svg>
            <p>Рус</p>
            <div className='w-[2px] h-[2px] bg-white rounded-full'></div>
            <p>Eng</p>
          </li>
          <li className='flex gap-x-1 items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='currentColor'
              className='w-4 h-4'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z'
              />
            </svg>
            <p>Рус</p>
          </li>
        </ul>
      </div>
      {variant === 'full' && (
        <div>
          <div className='my-3'>
            <MedallionsList />
          </div>
          <div className='mb-6'>
            <Details />
          </div>
          <MovieRating variant='large' />
        </div>
      )}
    </div>
  );
};
