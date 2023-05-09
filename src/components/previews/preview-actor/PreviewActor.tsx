import Image from 'next/image';
import React from 'react';
import { PreviewActorProps } from './types';
import plural from 'plural-ru';

const PreviewActor: React.FC<PreviewActorProps> = ({ firstName, secondName, films, img }) => {
  return (
    <div className='flex flex-col w-auto relative'>
      <div className='absolute top-[54%]'>
        <span
          className='
          relative bg-[#a869f0] text-white z-20 h-[30px] rounded-sm text-[15px]
          font-semibold py-[5px] px-[8px]
        '
        >
          {films}
          <span className='absolute top-[-2px] bg-[rgba(168,105,240,.64)] left-[3px] right-[3px] bottom-[100%] rounded-sm' />
        </span>
      </div>
      {/* аватарка актера */}
      <div
        className={`
          relative max-w-[153px] rounded-full cursor-pointer overflow-hidden
          transition hover:scale-[1.05] flex justify-center items-center
          before:block before:w-[100%] pt-[100%]
        `}
      >
        <Image
          src={img}
          alt='актер'
          width={153}
          height={153}
          className='absolute top-0 left-0 bottom-0 right-0'
        />
      </div>

      {/* Имя и количество фильмов */}
      <div className='text-white mt-2'>
        <p className='font-semibold leading-[22px]'>{firstName}</p>
        <p className='font-semibold leading-[22px]'>{secondName}</p>
        <p className='opacity-70 leading-[16px] text-[15px]'>
          <span>{films}</span>
          {plural(films, 'фильм', 'фильма', 'фильмов')}
        </p>
      </div>
    </div>
  );
};

export default PreviewActor;
