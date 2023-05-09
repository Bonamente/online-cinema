import Link from 'next/link';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

const Logo = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

  const width = isMobile ? 55 : 66;
  const height = isMobile ? 40 : 48;

  return (
    <div className='flex h-full items-center'>
      <Link
        className='header-link flex items-center justify-center transition-all duration-300 outline-none'
        href='/'
        title='Онлайн-кинотеатр Иви'
      >
        <Image src='/icons/ivi-logo.svg' priority alt='logo' width={width} height={height} />
      </Link>
    </div>
  );
};

export default Logo;
