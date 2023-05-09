import React from 'react';
import { ReviewItem } from '@/components/screens/movie/components/ReviewsItem/ReviewItem';

export const ReviewsList = () => {
  return (
    <div className=''>
      <div className='flex justify-between items-center'>
        <div className='flex gap-x-1'>
          <p className='underline underline-offset-[6px] mb-5 decoration-gray-600 transition-all duration-300 hover:decoration-white text-white text-2xl font-bold cursor-pointer'>
            Отзывы
          </p>
          <p className='text-[14px] items-stretch text-[#a5a1b2]'>219</p>
        </div>
      </div>
      <div className='flex gap-x-5'>
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
      </div>
    </div>
  );
};
