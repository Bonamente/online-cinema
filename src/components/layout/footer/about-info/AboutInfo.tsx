import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import LinksList from '@/components/links-list/LinksList';
import DropdownBtn from '../../dropdown-button/DropdownBtn';
import { footerAboutLinks } from '@/components/links-list/links';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

const AboutInfo = () => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 1160px)' });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      className={`flex flex-col ${isSmallScreen ? 'w-1/2 py-6' : 'w-1/4 px-3'}`}
    >
      {isSmallScreen ? (
        <DropdownBtn
          isDropdownOpen={isDropdownOpen}
          handleClick={handleDropdownClick}
        >
          <InformationCircleIcon className='w-5 h-5 mr-3 stroke-2' />
          <span>О нас</span>
        </DropdownBtn>
      ) : (
        <h3 className='link-list-title'>О нас</h3>
      )}

      {(isDropdownOpen && isSmallScreen) || !isSmallScreen ? (
        <div className={`${isSmallScreen ? 'mt-6' : ''}`}>
          <LinksList direction='column' links={footerAboutLinks} />
        </div>
      ) : null}
    </div>
  );
};

export default AboutInfo;
