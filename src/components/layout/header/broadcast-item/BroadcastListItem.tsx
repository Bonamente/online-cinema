import Image from 'next/image';
import { BroadcastListItemProps } from './types';

const BroadcastListItem: React.FC<BroadcastListItemProps> = ({
  title,
  date,
  type,
  imgUrl,
  isMobile,
  isSlide,
}) => {
  let width;

  switch (true) {
    case isMobile && !isSlide:
      width = 'w-full pb-4';
      break;
    case !isMobile && !isSlide:
      width = 'w-1/2 pb-4';
      break;
    default:
      width = 'mw-[255px] h-[38px]';
  }

  return (
    <li className={`flex ${width} group cursor-pointer`}>
      <div className='mr-3'>
        <Image
          className='group-hover:scale-105 rounded-lg'
          width={58}
          height={38}
          src={imgUrl}
          alt={title}
        />
      </div>

      <div className='flex flex-col'>
        <h3 className='text-[15px] text-[#d9d7e0] font-bold group-hover:text-white'>
          {title}
        </h3>
        <div className='flex text-[13px] text-white/[.48]'>
          <p>{date}</p>
          <span className='flex justify-center w-4'>•</span>
          <p>{type}</p>
        </div>
      </div>
    </li>
  );
};

export default BroadcastListItem;
