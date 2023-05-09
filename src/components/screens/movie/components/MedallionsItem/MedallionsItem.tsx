import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface MedallionsItemProps {
  img: StaticImageData;
  title: string;
}

export const MedallionsItem: React.FC<MedallionsItemProps> = ({ img, title }) => {
  return (
    <Link
      href={img ? '/actor/1' : '/'}
      className='flex flex-col gap-y-2 group cursor-pointer w-[85px]'
    >
      <div className='flex justify-center items-center p-1 bg-[rgba(255,255,255,.16)] w-[56px] h-[56px] mx-auto rounded-xl group-hover:bg-[rgba(255,255,255,.36)] transition-colors duration-300'>
        <Image className='rounded-xl' src={img} alt='actor' />
      </div>
      <p className='text-gray-600 group-hover:text-gray-300 text-xs transition-colors duration-300 text-center'>
        {title}
      </p>
    </Link>
  );
};
