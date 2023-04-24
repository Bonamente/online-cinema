import { useRouter } from 'next/router';

import {
  movieGenresLinks,
  movieContries,
  movieYears,
  movieNew,
  seriesGenresLinks,
  seriesContries,
  seriesYears,
  seriesNew,
  animationGenresLinks,
  animationContries,
  animationYears,
  animationNew,
  tvLinks,
} from '@/components/links-list/links';

import DropdownMainContent from '../dropdown-main-content/DropdownMainContent';
import DropdownTvContent from '../dropdown-tv-content/DropdownTvContent';
import DropdownSubscriptionContent from '../dropdown-subscription-content/DropdownSubscriptionContent';
import DropdownNotificationContent from '../dropdown-notification-content/DropdownNotificationContent';
import DropdownProfileContent from '../dropdown-profile-content/DropdownProfileContent';
import { HeaderDropdownProps } from './types';

const HeaderDropdown: React.FC<HeaderDropdownProps> = ({
  linkType,
  handleHovering,
}) => {
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  let genresLinks;
  let contriesLinks;
  let yearsLinks;
  let newLinks;

  switch (linkType) {
    case 'animation':
      genresLinks = animationGenresLinks;
      contriesLinks = animationContries;
      yearsLinks = animationYears;
      newLinks = animationNew;
      break;
    case 'movies':
      genresLinks = movieGenresLinks;
      contriesLinks = movieContries;
      yearsLinks = movieYears;
      newLinks = movieNew;
      break;
    case 'series':
      genresLinks = seriesGenresLinks;
      contriesLinks = seriesContries;
      yearsLinks = seriesYears;
      newLinks = seriesNew;
      break;
  }

  return (
    <div
      className='absolute top-0 left-0 w-full bg-[#1f1b2e] z-[-2] rounded-xl'
      onMouseOver={() => handleHovering(linkType)}
      onMouseOut={() => handleHovering('')}
    >
      {isHomePage ? (
        <div className='absolute top-[71px] w-full h-[1px] bg-white/[.16]'></div>
      ) : null}

      {genresLinks && contriesLinks && yearsLinks && newLinks ? (
        <DropdownMainContent
          genresLinks={genresLinks}
          contriesLinks={contriesLinks}
          yearsLinks={yearsLinks}
          newLinks={newLinks}
        />
      ) : null}
      {linkType === 'tv' ? <DropdownTvContent tvLinks={tvLinks} /> : null}
      {linkType === 'subscription' ? <DropdownSubscriptionContent /> : null}
      {linkType === 'notification' ? <DropdownNotificationContent /> : null}
      {linkType === 'profile' ? <DropdownProfileContent /> : null}
    </div>
  );
};

export default HeaderDropdown;
