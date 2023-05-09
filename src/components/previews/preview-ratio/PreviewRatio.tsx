import Image from 'next/image';
import React from 'react';
import { PreviewRatioProps } from './types';
import Link from 'next/link';

const PreviewRatio: React.FC<PreviewRatioProps> = ({ title, link, img }) => {
  return (
    <Link href={link}>
      <div className='max-w-[150px] max-h-[105px] rounded-md overflow-hidden relative'>
        <Image src={img} alt='рейтинг' width={150} height={108} />
        <div
          className='
        text-white flex justify-center items-end gap-1
          absolute top-0 left-0 w-full h-full p-2
          '
        >
          <p className='text-[16px]'>{title}</p>
        </div>
      </div>
    </Link>
  );
};

export default PreviewRatio;
