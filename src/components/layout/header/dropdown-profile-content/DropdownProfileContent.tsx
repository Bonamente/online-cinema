import {
  WalletIcon,
  BookmarkIcon,
  ArrowUturnDownIcon,
  DocumentPlusIcon,
  NewspaperIcon,
  TvIcon,
  CreditCardIcon,
  ShareIcon,
} from '@heroicons/react/24/outline';

const DropdownProfileContent = () => {
  return (
    <div className='flex mt-16 py-8 px-3 text-white'>
      <div className='grid grid-cols-[repeat(4,minmax(155px,1fr))] grid-rows-[repeat(2, auto)] gap-6 w-4/6 px-3'>
        <a
          href='https://www.ivi.ru/profile/purchases'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='profile-tile'>
            <div>
              <WalletIcon className='w-5 h-5 text-white/[.48] stroke-[2.5]' />
            </div>
            <h3 className='profile-title'>Покупки</h3>
          </div>
        </a>
        <a
          href='https://www.ivi.ru/profile/favorites'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='profile-tile'>
            <div>
              <BookmarkIcon className='w-5 h-5 text-white/[.48] stroke-[2.5]' />
            </div>
            <h3 className='profile-title'>Смотреть позже</h3>
          </div>
        </a>
        <a
          href='https://www.ivi.ru/profile/watched'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='profile-tile'>
            <div>
              <ArrowUturnDownIcon className='w-5 h-5 text-white/[.48] stroke-[2.5]' />
            </div>
            <h3 className='profile-title'>История просмотров</h3>
          </div>
        </a>
        <a
          href='https://www.ivi.ru/profile/subscriptions'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='profile-tile relative'>
            <div>
              <DocumentPlusIcon className='w-5 h-5 text-white/[.48] stroke-[2.5]' />
            </div>

            <div className='absolute top-2 right-2 w-[10px] h-[10px] rounded-[5px] bg-[#ea003d] shadow-[0_2px_8px_rgba(234,0,61,.8)]'></div>
            <h3 className='profile-title'>Подписки</h3>
            <h4 className='profile-tile-small'>Подключить</h4>
          </div>
        </a>
        <a href='https://www.ivi.ru' target='_blank' rel='noopener noreferrer'>
          <div className='profile-tile'>
            <div>
              <NewspaperIcon className='w-5 h-5 text-white/[.48] stroke-[2.5]' />
            </div>
            <h3 className='profile-title'>Активация сертификата</h3>
          </div>
        </a>
        <a href='https://www.ivi.ru' target='_blank' rel='noopener noreferrer'>
          <div className='profile-tile'>
            <div>
              <TvIcon className='w-5 h-5 text-white/[.48] stroke-[2.5]' />
            </div>
            <h3 className='profile-title'>Вход по коду</h3>
          </div>
        </a>
        <a
          href='https://www.ivi.ru/profile/cards'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='profile-tile'>
            <div>
              <CreditCardIcon className='w-5 h-5 text-white/[.48] stroke-[2.5]' />
            </div>
            <h3 className='profile-title'>Способы оплаты</h3>
          </div>
        </a>
        <a
          href='https://www.ivi.ru/profile/referral'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='profile-tile'>
            <div>
              <ShareIcon className='w-5 h-5 text-white/[.48] stroke-[2.5]' />
            </div>
            <h3 className='profile-title'>Пригласить друзей</h3>
          </div>
        </a>
      </div>

      <div className='w-1/3 px-3'>
        <div className='flex flex-col justify-between h-full pl-6 border-l-[1px] border-white/[.16]'>
          <button className='w-full text-[15px] font-bold bg-[#ea003d] hover:bg-[#ff0f4d] rounded-lg py-[9px] px-[15px]'>
            Войти или зарегистрироваться
          </button>
          <div className='flex flex-col'>
            <a
              className='header-link'
              href='https://www.ivi.ru/profile/settings'
              target='_blank'
              rel='noopener noreferrer'
            >
              Настройки
            </a>
            <a
              className='header-link'
              href='https://ask.ivi.ru/?_gl=1*r90v0d*_ga*NTU0Mzk0ODE4LjE2ODEyMTM0ODM.*_ga_GETQ4387MJ*MTY4MTYyMzc3Ny43LjEuMTY4MTY2ODY4MC4yOC4wLjA.'
              target='_blank'
              rel='noopener noreferrer'
            >
              Помощь
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownProfileContent;
