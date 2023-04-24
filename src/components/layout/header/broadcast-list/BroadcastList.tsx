import { Fragment } from 'react';
import { useMediaQuery } from 'react-responsive';
import { BroadcastListProps } from './types';
import BroadcastListItem from '../broadcast-item/BroadcastListItem';

const BroadcastList: React.FC<BroadcastListProps> = ({ title, list }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

  return (
    <div className='w-full'>
      <h4 className='text-[15px] text-white font-bold mb-4'>{title}</h4>

      <ul className={`flex flex-wrap w-full ${isMobile ? 'flex-col' : ''}`}>
        {list.map((item) => (
          <Fragment key={item.title}>
            <BroadcastListItem
              title={item.title}
              date={item.date}
              type={item.type}
              imgUrl={item.imgUrl}
              isMobile={isMobile}
            />
          </Fragment>
        ))}
      </ul>
    </div>
  );
};

export default BroadcastList;
