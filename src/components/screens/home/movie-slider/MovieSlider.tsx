import { Fragment } from 'react';
import { useMediaQuery } from 'react-responsive';

import CustomSlider from '@/components/customs/custom-slider-extended/CustomSliderExtended';
import PreviewFilm from '@/components/previews/preview-film/PreviewFilm';
import PreviewFilmLast from '@/components/previews/preview-film-last/PreviewFilmLast';
import { MovieSliderProps } from './types';

const MovieSlider: React.FC<MovieSliderProps> = ({ title, link, movies }) => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 1159px)' });

  return (
    <CustomSlider
      id={title}
      title={title}
      link={link}
      slidesPerView={7}
      spaceBetween={16}
      allowTouchMove={isSmallScreen}
      buttonsPosition='outside'
      lastSlide={<PreviewFilmLast link={link} />}
    >
      {movies.map((movie, index) => (
        <Fragment key={index}>
          <PreviewFilm
            img='/images/one-plus-one.jpg'
            key={index}
            access='sub'
            country='Франция'
            duration={130}
            genre='Драма/Комедия'
            ratio={9.2}
            title='1+1'
            year={2008}
          />
        </Fragment>
      ))}
    </CustomSlider>
  );
};

export default MovieSlider;
