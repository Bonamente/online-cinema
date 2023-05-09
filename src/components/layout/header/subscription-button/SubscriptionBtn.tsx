import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export type SubscriptionBtnProps = {
  text: string;
  bgColor: 'gradient' | 'solid';
};

const SubscriptionBtn: React.FC<SubscriptionBtnProps> = ({ text, bgColor }) => {
  const isXSmallMobile = useMediaQuery({ query: '(max-width: 365px)' });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      setIsActive(false);
    }, 1300);

    return () => {
      clearTimeout(id);
    };
  }, [isActive]);

  const background =
    bgColor === 'gradient' ? 'bg-gradient-to-r from-[#c447ff] to-[#ea003d]' : 'bg-[#ea003d]';

  const currentBg = isActive
    ? `text-transparent ${background} opacity-50`
    : ` text-white ${background}`;

  return (
    <div className='flex h-full items-center'>
      <button
        className={`${`relative h-8 py-[7px] ${
          isXSmallMobile ? 'px-[2px] text-[10px]' : 'px-[11px] text-[13px]'
        } font-bold rounded-lg cursor-pointer ${currentBg}`}`}
        onClick={() => setIsActive(true)}
      >
        {text}
        <span className={`absolute top-[18%] left-[42%] ${isActive ? 'loader' : ''}`} />
      </button>
    </div>
  );
};

export default SubscriptionBtn;
