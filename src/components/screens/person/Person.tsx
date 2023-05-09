import Layout from '@/components/layout/Layout';
import PersonBackground from './person-background/personBackground';
import PersonSection from './person-section/PersonSection';
import Description from './description/Description';
import CustomSlider from '@/components/customs/custom-slider/CustomSlider';
import PreviewFilm from '@/components/previews/preview-film/PreviewFilm';
import Filmography from './filmography/Filmography';
import Biography from './biography/Biography';
import { PersonProps } from './types';
import { useRouter } from 'next/router';
import { ChevronLeftIcon } from '@heroicons/react/20/solid';

// const backgroundImage = "/images/person-image-big.jpg";

const sliderData = [
  'Россия',
  'США',
  'Франция',
  'Китай',
  'Корея',
  'Великобритания',
  'Испания',
  'Италия',
  'Бразилия',
  'Индия',
];

const Person: React.FC<PersonProps> = ({ imgBig, imgSmall }) => {
  const router = useRouter();

  return (
    <>
      <Layout title={'Скарлетт Йоханссон'}>
        <>
          {imgBig && <PersonBackground img={imgBig} />}

          <div className='page-container'>
            <button
              onClick={() => router.back()}
              className='text-white absolute top-0 mt-4 flex items-center group/back cursor-pointer'
            >
              <ChevronLeftIcon className='w-10 group-hover/back:scale-125 transition' />
              Назад
            </button>
            <PersonSection>
              <Description smallImage={imgSmall || null} />
            </PersonSection>
            <PersonSection withoutPadding title='Главные фильмы'>
              <CustomSlider buttonsPosition='outside' id='person-films' slidesPerView={4}>
                {sliderData.map((data, index) => (
                  <PreviewFilm
                    img='/images/one-plus-one.jpg'
                    key={index}
                    access='sub'
                    country='Франция'
                    duration={130}
                    genre='Драмма/Комедия'
                    ratio={9.2}
                    title='1+1'
                    year={2008}
                    iviChoice={index % 2 === 0 ? true : false}
                  />
                ))}
              </CustomSlider>
            </PersonSection>
            <PersonSection>
              <Filmography items={sliderData} />
            </PersonSection>
            <PersonSection title='Биография'>
              <Biography />
            </PersonSection>
          </div>
        </>
      </Layout>
    </>
  );
};

export default Person;
