import React from 'react';
import Link from 'next/link';

interface MovieRatingProps {
  variant: 'small' | 'large';
}

export const MovieRating: React.FC<MovieRatingProps> = ({ variant }) => {
  return (
    <Link
      href={'/movie/rating'}
      className={`flex gap-y-2 group cursor-pointer ${
        variant === 'large'
          ? 'px-2 pr-5 w-full bg-[rgba(255,255,255,.16)] items-center gap-3 rounded py-2'
          : 'flex-col w-[85px]'
      } `}
    >
      <div
        className={`flex justify-center items-center p-1.5 rounded-xl ${
          variant === 'large'
            ? 'w-[70px] h-[70px]'
            : 'bg-[rgba(255,255,255,.16)] group-hover:bg-[rgba(255,255,255,.36)] mx-auto w-[56px] h-[56px]'
        } transition-colors duration-300`}
      >
        <div
          className={`flex items-center justify-center self-stretch flex-auto rounded font-bold text-white text-center bg-[#73a32f] ${
            variant === 'large' ? 'text-[20px]' : ''
          }`}
        >
          9,1
        </div>
      </div>
      <div className='flex-auto'>
        <p
          className={`${
            variant === 'large'
              ? 'text-white text-[16px]'
              : 'text-gray-600 group-hover:text-gray-300 text-xs text-center'
          } transition-colors duration-300`}
        >
          Рейтинг
        </p>
        {variant === 'large' && (
          <div>
            <p className='text-[14px] text-gray-300'>Интересный сюжет</p>
            <p className='text-[14px] text-gray-300'>421 281 оценок</p>
          </div>
        )}
      </div>
      {variant === 'large' && (
        <button className='text-white border border-[rgba(255,255,255,.32)] rounded px-1.5 py-0.5 text-[12px] transition-all duration-300 hover:border-[rgba(255,255,255,.7)] font-bold'>
          Оценить
        </button>
      )}
    </Link>
  );
};
