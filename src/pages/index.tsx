import { NextPage } from 'next';
import Home from '../components/screens/home/Home';

const stubData = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
];

const HomePage: NextPage = () => {
  return <Home comedyMovies={stubData} thrillerMovies={stubData} actionMovies={stubData} />;
};

export default HomePage;
