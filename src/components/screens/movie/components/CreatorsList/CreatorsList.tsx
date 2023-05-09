import React from 'react';
import { CreatorsItem } from '@/components/screens/movie/components';

export const CreatorsList: React.FC<{}> = () => {
  return (
    <div>
      <p className='underline underline-offset-[6px] mb-5 decoration-gray-600 transition-all duration-300 hover:decoration-white text-white text-2xl font-bold cursor-pointer'>
        Актёры и создатели
      </p>
      <div className='flex gap-x-5'>
        <CreatorsItem />
        <CreatorsItem />
        <CreatorsItem />
        <CreatorsItem />
        <CreatorsItem />
        <CreatorsItem isMore={true} />
      </div>
    </div>
  );
};
