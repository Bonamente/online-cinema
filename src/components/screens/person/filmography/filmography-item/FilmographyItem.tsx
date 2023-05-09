import React from 'react';
import { FilmographyItemProps } from './types';
import Image from 'next/image';
import Link from 'next/link';

const FilmographyItem: React.FC<FilmographyItemProps> = ({
  access,
  img,
  link,
  ratio,
  title,
  year,
}) => {
  return (
    <li className='flex'>
      <Image
        src={img}
        alt='постер'
        width={80}
        height={122}
        className='rounded-md flex-[0_1_80px]'
      />

      <div className='flex flex-col gap-1 md:flex-row md:items-center flex-[1_1_auto] items-start md:justify-between ml-4'>
        <div className='flex flex-col gap-1 font-[500]'>
          <p>{year}</p>
          <p>{title}</p>
          <p className='opacity-70'>Рейтинг Иви: {ratio}</p>
        </div>
        <Link
          href={link}
          className={`w-full md:w-[140px] h-[40px] bg-[#312b45] rounded-md ${
            access ? 'opacity-100' : 'opacity-70'
          }`}
        >
          <button className={`w-full h-full`}>Смотреть</button>
        </Link>
      </div>
    </li>
  );
};

export default FilmographyItem;
