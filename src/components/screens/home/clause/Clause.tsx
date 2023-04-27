import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const Clause = () => {
  const isLargeScreen = useMediaQuery({ query: '(min-width: 1060px)' });
  const isTabletScreen = useMediaQuery({ minWidth: 1020, maxWidth: 1159 });
  const isMobile = useMediaQuery({ query: '(max-width: 599px)' });
  const [isExpanded, setisExpanded] = useState(false);

  const handleClick = () => {
    setisExpanded(!isExpanded);
  };

  let clauseWidth: string;

  switch (true) {
    case isLargeScreen:
      clauseWidth = 'w-3/4';
      break;
    case isTabletScreen:
      clauseWidth = 'w-5/6';
      break;
    default:
      clauseWidth = 'w-full';
  }

  return (
    <div className='w-full pageSection__container-inner leading-5'>
      <div className={`${clauseWidth} clause clause_is-native home__clause`}>
        <div className='clause__header'>
          <h2
            className={`${
              isMobile ? 'text-[15px] leading-5' : 'text-[20px] leading-6'
            }  text-white font-bold clause__title`}
          >
            Онлайн-кинотеатр Иви: фильмы в хорошем качестве всегда приносят настоящее удовольствие
          </h2>
        </div>

        <div className='clause__text is-truncated'>
          <div className='text-[15px] leading-[22px] text-[#a5a1b2] clause__text-inner hidden-children'>
            <p className={`${isExpanded ? '' : 'clause-truncated'} mt-3`}>
              Каждый день миллионы людей ищут фильмы онлайн, и никто не хочет усложнять себе жизнь –
              и вы наверняка один из них! <br /> А раз так, то Иви – это именно тот ресурс, который
              вам нужен. От лучших кинолент в HD-качестве вас отделяет буквально один клик. Мы не
              просто освобождаем от необходимости идти в кинотеатр или изучать программу телепередач
              – у посетителей нашего ресурса гораздо больше возможностей.
            </p>

            {isExpanded ? (
              <>
                <p className='mt-2'>
                  Видеотека Иви – это постоянно пополняющаяся коллекция в рунете, которая
                  насчитывает более 60 тысяч отечественного и зарубежного контента, доступного для
                  просмотра онлайн. Мы первыми в России подписали контракты с крупнейшими
                  голливудскими студиями (Walt Disney, Warner Bros., Sony, 20th Century Fox,
                  Universal, Paramount, MGM и другими) и на постоянной основе сотрудничаем с
                  крупнейшими российскими компаниями и телеканалами.{' '}
                </p>
                <p className='mt-2'>Онлайн-кинотеатр ivi.ru – это:</p>

                <ol className='list-disc list-inside mt-2 pl-4 [&>*:not(:first-child)]:mt-2'>
                  <li>
                    уникальная рекомендательная система, учитывающая ваши предпочтения и
                    предлагающая посмотреть именно то, что точно придется вам по душе;
                  </li>
                  <li>
                    просмотр в одно касание на любом из устройств, подключенном к вашему
                    Иви-аккаунту – от смартфонов до телевизоров с технологией Smart TV;
                  </li>
                  <li>
                    возможность скачивать в память мобильного устройства лицензионный контент и
                    смотреть его без доступа к Интернету;
                  </li>
                  <li>
                    уникальные условия и преимущества для обладателей подписки Иви, делающей
                    кинопросмотр комфортным и приятным;
                  </li>
                  <li>
                    удобная и продвинутая система уведомлений, вы не пропустите выход крутого
                    обсуждаемого блокбастера – мы известим о появлении подходящим для вас способом;
                  </li>
                  <li>
                    возможность добавлять фильмы в «смотреть позже», чтобы вернуться к ним в
                    свободное время;
                  </li>
                  <li>
                    контент, для просмотра которого не требуется устанавливать видеоплееры или
                    искать кодеки;
                  </li>
                  <li>просмотр онлайн контента хорошего разрешения без регистрации и смс.</li>
                </ol>

                <p className='mt-2'>
                  Откройте для себя возможность смотреть фильмы онлайн бесплатно в отличном качестве
                  с кинотеатром Иви!
                </p>
              </>
            ) : null}
          </div>
          <button
            className='text-[15px] leading-[22px] mt-2 font-bold text-[hsla(0,0%,100%,.88)] transition duration-300 hover:text-white clause__toggle'
            type='button'
            onClick={handleClick}
          >
            {isExpanded ? 'Свернуть' : 'Развернуть'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Clause;
