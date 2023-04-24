import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import { ChannelsListProps } from './types';

const ChannelsList: React.FC<ChannelsListProps> = ({ title, links }) => {
  const isTablet = useMediaQuery({ minWidth: 880, maxWidth: 1160 });
  const itemWidth = isTablet ? 'w-1/6' : 'w-1/4';

  return (
    <div className='w-full'>
      <h4 className='text-[15px] text-white font-bold mb-4'>{title}</h4>

      <ul className='flex flex-wrap w-full mt-4 -mx-3 -mb-4'>
        {links.map((link) => (
          <li className={`${itemWidth} px-3 pb-4`} key={link.path}>
            <a href={link.path} target='_blank' rel='noopener noreferrer'>
              <div>
                <Image
                  width='0'
                  height='0'
                  sizes='100vw'
                  className='w-full h-auto rounded-lg'
                  src={link.imgUrl || ''}
                  alt={link.text || ''}
                />
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChannelsList;
