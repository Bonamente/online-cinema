import LinksList from '@/components/links-list/LinksList';
import ChannelsList from '@/components/screens/mobile-navigation/channels-list/ChannelsList';
import BroadcastList from '../broadcast-list/BroadcastList';
import TvDropdownPopular from '../dropdown-popular/TvDropdownPopular';

import SubscriptionBlock from '../subscription-block/SubscriptionBlock';
import { DropdownTvContentProps } from './types';

const DropdownTvContent: React.FC<DropdownTvContentProps> = ({
  tvLinks,
  tvChannelLinks = [],
  tvSportLinks = [],
  broadcasts = [],
  isMobile = false,
}) => {
  return (
    <>
      {isMobile ? (
        <div className='mt-6'>
          <h3 className='link-list-title'>ТВ онлайн</h3>
          <LinksList direction='column' links={tvLinks} />

          <div className='my-6'>
            <a
              className='flex justify-center text-[15px] text-white font-bold rounded-lg py-[9px] px-[15px]  bg-[#312b45] hover:bg-[#3a3352]'
              href='https://www.ivi.ru/tvplus/tv-schedule-today'
              target='_blank'
              rel='noopener noreferrer'
            >
              Телепрограмма
            </a>
          </div>

          <ChannelsList title='Федеральные каналы' links={tvChannelLinks} />

          <div className='w-full mt-6'>
            <ChannelsList title='Спортивные каналы' links={tvSportLinks} />
          </div>

          <div className='w-full mt-6'>
            <BroadcastList title='Популярные трансляции' list={broadcasts} />
          </div>
        </div>
      ) : (
        <div className='flex mt-16 p-8 min-h-[390px] text-white'>
          <div className='flex flex-col justify-between w-1/6 px-3'>
            <div>
              <h3 className='link-list-title'>ТВ онлайн</h3>
              <LinksList direction='column' links={tvLinks} />
            </div>

            <a
              className='flex justify-center text-[15px] text-white font-bold rounded-lg py-[9px] px-[15px]  bg-[#312b45] hover:bg-[#3a3352] duration-300'
              href='https://www.ivi.ru/tvplus/tv-schedule-today'
              target='_blank'
              rel='noopener noreferrer'
            >
              Телепрограмма
            </a>
          </div>

          <div className='w-5/6 pl-3'>
            <div className='flex justify-between h-full pl-8 border-l-[1px] border-white/[.16]'>
              <TvDropdownPopular />
              <SubscriptionBlock />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DropdownTvContent;
