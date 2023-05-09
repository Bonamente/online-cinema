import React from 'react';

export const PlayerControl = () => {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-5'>
        <button className='flex items-center gap-1 bg-[rgba(255,255,255,.08)] py-[10px] px-[12px] rounded transition-all duration-300 hover:bg-[rgba(255,255,255,.2)]'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-6 h-6 text-gray-300'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z'
            />
          </svg>
          <p className='text-gray-300 font-bold text-[14px]'>Трейлер</p>
        </button>

        <button className='bg-[rgba(255,255,255,.08)] py-[10px] px-[10px] rounded transition-all duration-300 hover:bg-[rgba(255,255,255,.2)]'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-6 h-6 text-gray-300'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z'
            />
          </svg>
        </button>

        <button className='bg-[rgba(255,255,255,.08)] py-[10px] px-[10px] rounded transition-all duration-300 hover:bg-[rgba(255,255,255,.2)]'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-6 h-6 text-gray-300'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5'
            />
          </svg>
        </button>
      </div>

      <button className='flex items-center gap-1 bg-[rgba(255,255,255,.08)] py-[10px] px-[12px] rounded transition-all duration-300 hover:bg-[rgba(255,255,255,.2)]'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='w-6 h-6 text-gray-300'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          />
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z'
          />
        </svg>
        <p className='text-gray-300 font-bold text-[14px]'>Бесплатные фильмы</p>
      </button>
    </div>
  );
};
