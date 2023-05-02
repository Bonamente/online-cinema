import DropdownGallery from '../../dropdown-gallery/DropdownGallery';
import { TvIcon } from '@heroicons/react/24/solid';

const SubscriptionBlock = () => {
  return (
    <div className='flex flex-col h-[334px] w-[244px]'>
      <DropdownGallery />
      <a
        className='flex justify-center items-center mt-auto text-[15px] text-white font-bold rounded-lg py-[9px] px-[15px]  bg-[#312b45] hover:bg-[#3a3352] transition-all duration-300 outline-none'
        href='https://www.ivi.ru/tvplus/tv-schedule-today'
        target='_blank'
        rel='noopener noreferrer'
      >
        <TvIcon className='w-4 h-4 mr-[6px]' />
        <span>Смотреть на SmartTV</span>
      </a>
    </div>
  );
};

export default SubscriptionBlock;
