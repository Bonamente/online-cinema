import React from 'react';
import Link from 'next/link';

export const Banner = () => {
  return (
    <div className='flex justify-between pb-5'>
      <div className='max-w-[536px]'>
        <p className='text-[24px] text-white font-bold mb-[12px]'>
          Cмотреть «Название фильма» на всех устройствах
        </p>
        <p className='text-[15px] text-[#a5a1b2] mb-[24px]'>
          Приложение доступно для скачивания на iOS, Android, SmartTV и приставках
        </p>
        <Link
          href='https://www.ivi.ru/devices'
          className='bg-[#ea003d] text-white font-bold text-[15px] px-[15px] py-3 rounded-[5px] transition-colors duration-300 hover:bg-[#FF0F4D]'
        >
          Подключить устрйоства
        </Link>
      </div>
    </div>
  );
};
