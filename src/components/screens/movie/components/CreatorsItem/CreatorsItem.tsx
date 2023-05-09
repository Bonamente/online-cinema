import React from 'react';
import Image from 'next/image';
import CreatorIcon from '@/assets/images/creatorIcon.jpg';
import Link from 'next/link';

interface CreatorsItemProps {
  isMore?: boolean;
}

export const CreatorsItem: React.FC<CreatorsItemProps> = ({ isMore = false }) => {
  if (isMore)
    return (
      <Link
        href='/'
        className='flex items-center justify-center rounded-full w-[88px] h-[88px] group bg-[#1F1B2E] hover:bg-[#1F1B2E]'
      >
        <p className='group-hover:text-gray-400 transition-colors duration-300 text-gray-500'>
          Ещё
        </p>
      </Link>
    );
  return (
    <Link href='/actor/1' className='group max-w-[88px]'>
      <div>
        <Image
          className='w-[88px] h-[88px] object-cover rounded-full mb-1'
          src={CreatorIcon}
          alt='creator name'
        />
        <p className='text-gray-400 transition-colors duration-300 group-hover:text-gray-200 leading-[100%] text-[14px]'>
          Питер Фаррелли
        </p>
        <p className='text-gray-500 text-[13px]'>режисёр</p>
      </div>
    </Link>
  );
};
