import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import { DropdownBtnProps } from './types';

const DropdownBtn: React.FC<DropdownBtnProps> = ({
  handleClick,
  isDropdownOpen,
  children,
}) => {
  return (
    <button className='mobile-nav-link flex items-center' onClick={handleClick}>
      {children}
      {isDropdownOpen ? (
        <ChevronUpIcon className='w-5 h-5 ml-3 stroke-2' />
      ) : (
        <ChevronDownIcon className='w-5 h-5 ml-3 stroke-2' />
      )}
    </button>
  );
};

export default DropdownBtn;
