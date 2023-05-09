import { MedallionsItem, MovieRating } from '@/components/screens/movie/components';
import React from 'react';
import MedallionIcon from '@/assets/images/creatorIcon.jpg';

export const MedallionsList: React.FC<{}> = () => {
  return (
    <div className='flex gap-2 my-4'>
      <MovieRating variant='small' />
      <MedallionsItem title='Вигго Мортенсен' img={MedallionIcon} />
      <MedallionsItem title='Махершала Али' img={MedallionIcon} />
      <MedallionsItem title='Линда Карделини' img={MedallionIcon} />
    </div>
  );
};
