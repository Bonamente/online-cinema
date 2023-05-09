import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { FilmographyProps } from './types';
import FilmographyItem from './filmography-item/FilmographyItem';

const Filmography: React.FC<PropsWithChildren<FilmographyProps>> = ({
  items,
}) => {
  const [films, setFilms] = useState<any[]>(items.slice(0, 5));
  const [short, setShort] = useState(true);

  const showAll = useCallback(() => {
    setShort((curr) => !curr);
  }, []);

  useEffect(() => {
    if (short) setFilms(items.slice(0, 5));
    if (!short) setFilms(items);
  }, [short, items]);

  return (
    <div className='text-white'>
      <div className='flex text-white mb-7 items-end'>
        <h2 className='text-[24px] font-semibold mr-2 leading-7'>
          Полная фильмография
        </h2>
        <p className='text-[#a5a1b2] leading-5'>{items.length} фильмов</p>
      </div>

      <ul className='flex flex-col gap-5'>
        {films.map((item, index) => (
          <FilmographyItem
            key={index}
            access
            img='/images/one-plus-one.jpg'
            link='#'
            ratio='9.2'
            title='1+1'
            year={2009}
          />
        ))}
      </ul>
      <button onClick={showAll} className='mt-4 text-[#a5a1b2]'>
        {short ? `Еще ${items.length - 5} фильмов` : 'Скрыть'}
      </button>
    </div>
  );
};

export default Filmography;
