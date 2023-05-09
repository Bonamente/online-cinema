import React from 'react';
import { PreviewGenreProps } from './types';
import Link from 'next/link';

const PreviewGenre: React.FC<PreviewGenreProps> = ({ icon, title, link }) => {
  return (
    <Link href={link}>
      <div
        className='
           max-w-[150px] rounded-md bg-[#1f1b2e]
          transition hover:opacity-100 opacity-90 flex justify-center items-center'
      >
        <div className='opacity-100 py-[13%] text-white flex flex-col justify-center items-center gap-1'>
          <div>{icon}</div>
          <p className='text-[13px]'>{title}</p>
        </div>
      </div>
    </Link>
  );
};

export default PreviewGenre;
