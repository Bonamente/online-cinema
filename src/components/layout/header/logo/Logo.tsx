import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <div className='flex h-full items-center'>
      <Link
        className='header-link flex items-center justify-center w-[64px] h-12 transition-all duration-300 outline-none'
        href='/'
        title='Онлайн-кинотеатр Иви'
      >
        <Image
          src='/icons/ivi-logo.svg'
          priority
          alt='logo'
          width={66}
          height={48}
        />
      </Link>
    </div>
  );
};

export default Logo;
