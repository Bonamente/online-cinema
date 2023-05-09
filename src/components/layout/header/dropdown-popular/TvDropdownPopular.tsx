import { Fragment } from 'react';
import Image from 'next/image';
import TvDropdownSlider from './tv-dropdown-slider/TvDropdownSlider';
import BroadcastListItem from '../broadcast-item/BroadcastListItem';
import { broadcastsData } from '../broadcast-list/broadcastsData';
import { tvChannelLinks, tvSportLinks } from '@/components/links-list/links';

const TvDropdownPopular = () => {
  return (
    <div className='flex flex-col w-[calc(100%_-_295px)] [&>*:not(:first-child)]:mt-8'>
      <TvDropdownSlider
        id='fedChannels'
        title='Федеральные каналы'
        slidesPerView={'auto'}
        spaceBetween={16}
        showNavBtnsOnHoverOnly
      >
        {tvChannelLinks.map((link) => (
          <li className='w-[88px]' key={link.path}>
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
      </TvDropdownSlider>

      <TvDropdownSlider
        id='sportsChannels'
        title='Спортивные каналы'
        slidesPerView={'auto'}
        spaceBetween={16}
        showNavBtnsOnHoverOnly
      >
        {tvSportLinks.map((link) => (
          <li className='w-[88px]' key={link.path}>
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
      </TvDropdownSlider>

      <TvDropdownSlider
        id='broadcasts'
        title='Популярные трансляции'
        slidesPerView={'auto'}
        spaceBetween={16}
        showNavBtnsOnHoverOnly
      >
        {broadcastsData.map((item) => (
          <Fragment key={item.title}>
            <BroadcastListItem
              title={item.title}
              date={item.date}
              type={item.type}
              imgUrl={item.imgUrl}
              isSlide
            />
          </Fragment>
        ))}
      </TvDropdownSlider>
    </div>
  );
};

export default TvDropdownPopular;
