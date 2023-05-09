import DropdownSubscriptionGallery from '../../dropdown-gallery/DropdownSubscriptionGallery';
import {
  VideoCameraIcon,
  FolderPlusIcon,
  MegaphoneIcon,
  UserGroupIcon,
  ArrowDownTrayIcon,
} from '@heroicons/react/24/outline';

const DropdownSubscriptionContent = () => {
  return (
    <div className='flex justify-between mt-16 p-8 text-white'>
      <div className='w-1/2'>
        <h3 className='text-[28px] font-bold'>Подписка Иви</h3>
        <h4 className='text-[15px] text-white/[.48]'>
          Стоимость 399 ₽ в месяц, продление автоматическое
        </h4>
        <div className='grid grid-cols-3 auto-rows-auto gap-6 mt-8'>
          <div className='subscription-tile'>
            <div className='tile-icon'>
              <VideoCameraIcon className='w-5 h-5 text-white/[.48] stroke-[2.5]' />
            </div>
            <h5 className='subscription-tile-title'>
              Новинки сериалов и фильмов
            </h5>
          </div>

          <div className='subscription-tile col-span-2'>
            <div className='tile-icon'>
              <FolderPlusIcon className='w-5 h-5 text-white/[.48] stroke-[2.5]' />
            </div>
            <h5 className='subscription-tile-title'>
              Еженедельное пополнение каталога фильмами и сериалами со всего
              мира
            </h5>
          </div>

          <div className='subscription-tile'>
            <div className='tile-icon'>
              <MegaphoneIcon className='w-5 h-5 text-white/[.48] stroke-[2.5]' />
            </div>
            <h5 className='subscription-tile-title'>
              Фильмы и сериалы без рекламы
            </h5>
          </div>

          <div className='subscription-tile'>
            <div className='tile-icon'>
              <UserGroupIcon className='w-5 h-5 text-white/[.48] stroke-[2.5]' />
            </div>
            <h5 className='subscription-tile-title'>
              Семейный аккаунт на 5 устройствах
            </h5>
          </div>

          <div className='subscription-tile'>
            <div className='tile-icon'>
              <ArrowDownTrayIcon className='w-5 h-5 text-white/[.48] stroke-[2.5]' />
            </div>
            <h5 className='subscription-tile-title'>
              Загрузка на мобильные устройства
            </h5>
          </div>
        </div>

        <div className='flex justify-between mt-8'>
          <button className='w-2/3 mr-3 text-[15px] font-bold bg-[#ea003d] hover:bg-[#ff0f4d] rounded-lg py-[9px] px-[15px]'>
            Смотреть 30 дней за 1 ₽
          </button>

          <p className='w-1/3 px-3 text-[#a5a1b2] text-[13px]'>
            Отключить можно в&nbsp;любой&nbsp;момент
          </p>
        </div>
      </div>

      <DropdownSubscriptionGallery />
    </div>
  );
};

export default DropdownSubscriptionContent;
