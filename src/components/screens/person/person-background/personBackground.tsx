import React from 'react';
import { PersonBackgroundProps } from './types';

const PersonBackground: React.FC<PersonBackgroundProps> = ({ img }) => {
  return (
    <div className='backGroundImage'>
      <div
        style={{ backgroundImage: `url(${img})` }}
        className={`bg-contain h-[1080px] fixed top-0 left-0 right-0 bg-no-repeat bg-[50%_0]`}
      />
      <div className='h-[calc((100vw*.321)+72px+160px)] absolute w-full bg-[linear-gradient(0deg,rgba(16,14,25,1)0,rgba(16,14,25,0)320px,rgba(16,14,25,0)100%)] top-0 left-0 r-0' />
      <div className='top-[calc((100vw*.321)+72px+160px)] absolute right-0 left-0 bottom-0 bg-[#100e19] w-full' />
    </div>
  );
};

export default PersonBackground;
