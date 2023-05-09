import { useMediaQuery } from 'react-responsive';

type NotificationBtnProps = {
  // eslint-disable-next-line no-unused-vars
  handleHovering: (arg: string) => void;
  handleClick: () => void;
};

const NotificationBtn: React.FC<NotificationBtnProps> = ({ handleHovering, handleClick }) => {
  const isLargeScreen = useMediaQuery({
    query: '(min-width: 1160px)',
  });

  return (
    <div
      onMouseOver={isLargeScreen ? () => handleHovering('notification') : undefined}
      onMouseOut={isLargeScreen ? () => handleHovering('') : undefined}
      onClick={handleClick}
    >
      <div className='flex h-full items-center'>
        <button className='header-link hover:scale-125 focus:scale-125' type='button'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
            className='w-5 h-5'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0'
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NotificationBtn;
