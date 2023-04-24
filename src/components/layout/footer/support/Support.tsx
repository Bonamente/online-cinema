import { useState } from 'react';
import { useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { useMediaQuery } from 'react-responsive';
import FooterButton from '../footer-button/FooterButton';
import DropdownBtn from '../../dropdown-button/DropdownBtn';
import {
  ChatBubbleBottomCenterIcon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';

const Support = () => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 1160px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 450px)' });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSupportPhoneShown, setIsSupportPhoneShown] = useState(false);
  const ref = useRef(null);

  const handleClickOutside = () => {
    setIsSupportPhoneShown(false);
  };

  useOnClickOutside(ref, handleClickOutside);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClick = () => {
    setIsSupportPhoneShown(!isSupportPhoneShown);
  };

  return (
    <div className={`flex flex-col ${isSmallScreen ? 'py-6' : 'w-1/4 px-3'}`}>
      {isSmallScreen ? (
        <DropdownBtn
          isDropdownOpen={isDropdownOpen}
          handleClick={handleDropdownClick}
        >
          <ChatBubbleBottomCenterIcon className='w-5 h-5 mr-3 stroke-2' />
          <span>Служба поддержки</span>
        </DropdownBtn>
      ) : (
        <h3 className='link-list-title'>Служба поддержки</h3>
      )}

      {(isDropdownOpen && isSmallScreen) || !isSmallScreen ? (
        <div className={`${isSmallScreen ? 'mt-6' : ''}`}>
          <div>
            <p className='text-[15px] font-normal text-white/[.48]'>
              Мы всегда готовы вам помочь.
            </p>
            <p className='text-[15px] font-normal text-white/[.48]'>
              Наши операторы онлайн 24/7
            </p>
          </div>

          <div
            className={
              isSmallScreen && !isMobile ? 'flex items-center w-1/2' : ''
            }
          >
            <div className='mt-6'>
              <FooterButton size='middle'>
                <span className='w-[164px]'>Написать в чате</span>
              </FooterButton>
            </div>

            <div
              className={`flex relative ${isSmallScreen ? 'mt-6' : 'mt-5'} ${
                isSmallScreen && !isMobile ? 'ml-4' : ''
              }`}
              ref={ref}
            >
              <a
                className='mr-3 outline-none group'
                href='mailto:support@ivi.ru'
              >
                <FooterButton size='small' isWrappedByLink>
                  <EnvelopeIcon className='w-4 h-4 stroke-[2.5]' />
                </FooterButton>
              </a>

              <FooterButton size='small' handleClick={handleClick}>
                <PhoneIcon className='w-4 h-4 stroke-[2.5]' />
              </FooterButton>

              {isSupportPhoneShown ? (
                <div className='absolute top-[68px]'>
                  <a
                    className='iviFooter__phoneItem'
                    href='tel:+73432269220'
                    rel='nofollow'
                  >
                    <FooterButton size='large'>
                      <span className='w-[194px]'>+7 343 226-92-20</span>
                    </FooterButton>
                  </a>
                </div>
              ) : null}
            </div>
          </div>

          <div className='mt-[30px]'>
            <a
              className='link'
              href='https://ask.ivi.ru/?_gl=1*1hsuxkm*_ga*NTU0Mzk0ODE4LjE2ODEyMTM0ODM.*_ga_GETQ4387MJ*MTY4MTc5MjE3MS45LjEuMTY4MTc5NTc3NS42MC4wLjA.'
              target='_blank'
              rel='noopener noreferrer'
            >
              ask.ivi.ru
            </a>
            <p className='text-[15px] font-normal text-white/[.48]'>
              Ответы на вопросы
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Support;
