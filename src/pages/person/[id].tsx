import Person from '@/components/screens/person/Person';
import { NextPage } from 'next';
import { GetStaticPaths, GetStaticProps } from 'next';

interface PersonPageProps {
  imgBig?: string;
  imgSmall?: string;
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = Array.from({ length: 2 }, (_, index) => ({
    params: {
      id: (index + 1).toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as { id: string };
  let props;
  if (id == '1') {
    props = { imgBig: '/images/person-image-big.jpg' };
  } else {
    props = { imgSmall: '/images/actor.jpg' };
  }

  return { props };
};

const PersonPage: NextPage<PersonPageProps> = ({ imgBig, imgSmall }) => {
  return <Person imgBig={imgBig} imgSmall={imgSmall} />;
};

export default PersonPage;
