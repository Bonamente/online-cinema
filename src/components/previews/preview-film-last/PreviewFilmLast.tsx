import Link from 'next/link';
import React from 'react';
import { PreviewFilmLastProps } from './types';

const PreviewFilmLast: React.FC<PreviewFilmLastProps> = ({ link }) => {
  return (
    <Link href={link}>
      <div className='flex flex-col w-auto'>
        <div
          className='
        relative w-[150px] h-[230px] cursor-pointer bg-[#1f1b2e] opacity-90
        transition hover:scale-[1.05] hover:opacity-100 rounded-md 
        flex justify-center items-center
        '
        >
          <p className='text-white text-[15px]'>Посмотреть все</p>
        </div>
      </div>
    </Link>
  );
};

export default PreviewFilmLast;
