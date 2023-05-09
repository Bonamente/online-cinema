import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';

type ProfileBtnProps = {
  handleHovering: (arg: string) => void;
  handleClick: () => void;
};

const ProfileBtn: React.FC<ProfileBtnProps> = ({
  handleHovering,
  handleClick,
}) => {
  const isLargeScreen = useMediaQuery({
    query: '(min-width: 1160px)',
  });

  return (
    <div
      onMouseOver={isLargeScreen ? () => handleHovering('profile') : undefined}
      onMouseOut={isLargeScreen ? () => handleHovering('') : undefined}
      onClick={handleClick}
    >
      <div className='flex h-full items-center'>
        <Link
          className='header-link flex items-center justify-center w-12 h-12 border-2 border-white/[.48] hover:border-white rounded-lg hover:shadow-[0px_0px_5px_0px_white] focus:shadow-[0px_0px_5px_0px_white] transition-all duration-300 outline-none'
          href='/profile'
          title='Войти в профиль'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ProfileBtn;
