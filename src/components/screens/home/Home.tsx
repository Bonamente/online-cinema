import dynamic from 'next/dynamic';
import Layout from '@/components/layout/Layout';
import Section from '@/components/layout/section-extended/SectionExtended';
import WeekTopSlider from './week-top-slider/WeekTopSlider';
import MovieSlider from './movie-slider/MovieSlider';
import { HomeProps } from './types';

const DynamicPromoSlider = dynamic(() => import('./promo-slider/PromoSlider'), {
  ssr: false,
});

const DynamicTeaserList = dynamic(() => import('./teaser-list/TeaserList'), {
  ssr: false,
});

const DynamicClause = dynamic(() => import('./clause/Clause'), {
  ssr: false,
});

const title =
  'Онлайн-кинотеатр Иви - фильмы, сериалы и мультфильмы смотреть онлайн бесплатно в хорошем качестве';

const description =
  'Устройте кинотеатр у себя дома! Смотрите онлайн фильмы хорошего качества в приятной домашней обстановке и в удобное для вас время. Для вас всегда доступны бесплатные фильмы без регистрации на любой вкус: сериалы, фильмы, мультфильмы и многое другое.';

const Home: React.FC<HomeProps> = ({ comedyMovies, thrillerMovies, actionMovies }) => {
  return (
    <Layout title={title} description={description}>
      <div>
        <DynamicPromoSlider />
        <div className='page-container'>
          <Section hasPadding>
            <DynamicTeaserList />
          </Section>

          <Section hasMargin hasPadding>
            <WeekTopSlider />
          </Section>

          <Section hasPadding>
            <DynamicClause />
          </Section>

          <Section hasMargin hasPadding>
            <MovieSlider title='Комедии' link='#' movies={comedyMovies} />
          </Section>

          <Section hasMargin hasPadding>
            <MovieSlider title='Триллеры' link='#' movies={thrillerMovies} />
          </Section>

          <Section hasMargin hasPadding>
            <MovieSlider title='Боевики' link='#' movies={actionMovies} />
          </Section>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
