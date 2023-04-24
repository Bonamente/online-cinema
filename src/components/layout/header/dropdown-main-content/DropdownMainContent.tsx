import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import LinksList from '@/components/links-list/LinksList';
import { DropdownMainContentProps } from './types';
import SubscriptionBlock from '../subscription-block/SubscriptionBlock';

const DropdownMainContent: React.FC<DropdownMainContentProps> = ({
  genresLinks,
  contriesLinks,
  yearsLinks,
  newLinks,
  isMobile = false,
  mobileLinkText,
  mobileLinkURL,
}) => {
  const isTabletScreen = useMediaQuery({ query: '(max-width: 880px)' });

  return (
    <>
      {isMobile ? (
        <div className='mt-6'>
          {mobileLinkURL?.startsWith('http') ? (
            <a href={mobileLinkURL} target='_blank' rel='noopener noreferrer'>
              {mobileLinkText}
            </a>
          ) : (
            <Link className='header-link' href={mobileLinkURL || ''}>
              {mobileLinkText}
            </Link>
          )}

          <div className='flex'>
            <div className='w-64 mt-6 mr-6'>
              <h3 className='link-list-title'>Жанры</h3>
              <div className=''>
                <LinksList direction='column' links={genresLinks} />
              </div>
            </div>
            <div className={`flex ${isTabletScreen ? 'flex-col' : ''}`}>
              <div className='w-64 mt-6 mr-6'>
                <div>
                  <h3 className='link-list-title'>Страны</h3>
                  <LinksList direction='column' links={contriesLinks} />
                </div>

                <div className='my-6'>
                  <h3 className='link-list-title'>Годы</h3>
                  <LinksList direction='column' links={yearsLinks} />
                </div>
              </div>
              <div
                className={`w-64 pt-6 mr-6 ${
                  isTabletScreen
                    ? 'border-t border-white/[.16]'
                    : 'border-t border-transparent'
                }`}
              >
                <LinksList direction='column' links={newLinks} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='flex mt-16 p-8 min-h-[390px] max-h-[398px]'>
          <div className='w-1/3 px-3'>
            <h3 className='link-list-title'>Жанры</h3>
            <div className='columns-2 gap-x-6'>
              <LinksList direction='column' links={genresLinks} />
            </div>
          </div>
          <div className='w-1/6 px-3'>
            <div>
              <h3 className='link-list-title'>Страны</h3>
              <LinksList direction='column' links={contriesLinks} />
            </div>

            <div className='mt-6'>
              <h3 className='link-list-title'>Годы</h3>
              <LinksList direction='column' links={yearsLinks} />
            </div>
          </div>
          <div className='flex justify-between w-1/2'>
            <LinksList direction='column' links={newLinks} />
            <SubscriptionBlock />
          </div>
        </div>
      )}
    </>
  );
};

export default DropdownMainContent;
