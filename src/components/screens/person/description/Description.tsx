import React, { useCallback, useRef, useState } from 'react';
import { DescriptionProps } from './types';
import Image from 'next/image';

const Description: React.FC<DescriptionProps> = ({ smallImage }) => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [buttonTitle, setButtonTitle] = useState('Развернуть');

  const toggleTextHeight = useCallback(() => {
    textRef.current?.classList.toggle('line-clamp-2');

    if (textRef.current?.classList.contains('line-clamp-2')) {
      setButtonTitle('Развернуть');
    } else {
      setButtonTitle('Свернуть');
    }
  }, []);
  return (
    <div className={`${smallImage ? '' : 'pt-[calc(100vw*.321)]'} flex flex-col text-white`}>
      {smallImage ? (
        <>
          <Image src={smallImage} alt='фото' width={120} height={144} className='rounded-md' />
          <h1 className='mt-4 break-words font-[600] text-[40px] sm:text-[56px]'>
            Скарлетт Йоханссон
          </h1>
          <div className='text-[#a5a1b2] text-[15px]'>Scarlett Johansson</div>
        </>
      ) : (
        <>
          <div className='text-[#a5a1b2] text-[15px]'>Scarlett Johansson</div>
          <h1 className='mt-4 break-words font-[600] text-[40px] sm:text-[56px]'>
            Скарлетт Йоханссон
          </h1>
        </>
      )}

      <div className='mt-4 text-[#d9d7e0]'>
        <p ref={textRef} className='w-[90%] text-ellipsis line-clamp-2 opacity-70'>
          Скарлетт Йоханссон (Scarlett Johansson) – американская киноактриса, получившая массовую
          популярность после фильмов «Трудности перевода», «Еще одна из рода Болейн», «Мстители».
        </p>
        <button className='mt-2 leading-[22px] text-[15px] opacity-90' onClick={toggleTextHeight}>
          {buttonTitle}
        </button>
      </div>
      <div className='flex gap-2 items-center mt-10 opacity-90 text-[18px]'>
        <button className='cursor-pointer'>59 фильмов</button>
        <span className='w-1 h-1 rounded-full bg-white'></span>
        <button className='cursor-pointer'>Биография</button>
      </div>
    </div>
  );
};

export default Description;
