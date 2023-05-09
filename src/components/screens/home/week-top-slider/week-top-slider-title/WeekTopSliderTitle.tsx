import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

const WeekTopSliderTitle = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 499px)' });

  return (
    <h2 className='flex items-bottom'>
      <Image width='116' height='28' src='/images/week-top/top10.svg' alt='Топ 10 за неделю' />
      {isMobile ? null : (
        <span className='block ml-2 text-white text-[24px] leading-7 font-bold'>
          <span className='sr-only'>Топ 10</span>
          за неделю
        </span>
      )}
    </h2>
  );
};

export default WeekTopSliderTitle;
