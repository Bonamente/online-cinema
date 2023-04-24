import MobileNavTopButtonsGroup from '../top-buttons-group/TopButtonsGroup';
import NestedNavigation from '../nested-navigation/NestedNavigation';
import RatingsGroup from '../ratings-group/RatingsGroup';
import Support from '../../../layout/footer/support/Support';
import AboutInfo from '../../../layout/footer/about-info/AboutInfo';
import MobileNavBottomButtonsGroup from '../bottom-buttons-group/BottomButtonsGroup';
import Socials from '../../../layout/footer/socials/Socials';
import Copyright from '../../../layout/footer/copyright/Copyright';
import { socialsLinks } from '../../../links-list/links';
import { TvIcon } from '@heroicons/react/24/outline';

const MobileNavigationContent = () => {
  return (
    <div className='drawer'>
      <div className='px-4 pb-8 text-white'>
        <MobileNavTopButtonsGroup />
        <NestedNavigation />
        <RatingsGroup />
        <AboutInfo />
        <div className='mb-6'>
          <button className='mobile-nav-link flex items-center'>
            <TvIcon className='w-5 h-5 mr-3 stroke-2' />
            Вход по коду
          </button>
        </div>
        <MobileNavBottomButtonsGroup />
        <Support />
        <div className='pt-8 border-t border-white/[.16]'>
          <Socials links={socialsLinks} />
        </div>
        <div className='mt-2 mb-10'>
          <Copyright />
        </div>
      </div>
    </div>
  );
};

export default MobileNavigationContent;
