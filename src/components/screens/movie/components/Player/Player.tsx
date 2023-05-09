import React from 'react';
import { PlayerControl } from '@/components/screens/movie/components';

export const Player = () => {
  return (
    <div className='flex-auto sticky top-10 self-start max-[1050px]:self-auto max-[1050px]:relative max-[1050px]:top-0'>
      <div className='flex mb-5 justify-center items-center h-[404px] border-red-600 border-4 col-start-1'>
        <p className='text-white'>player</p>
      </div>
      <PlayerControl />
    </div>
  );
};
