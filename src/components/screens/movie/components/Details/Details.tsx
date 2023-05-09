import React, { useState } from 'react';

const mockDescription =
  'Бывший вышибала Тони нанимается водителем к темнокожему музыканту с аристократическими манерами Дону Ширли. Они отправляются в тур по южным штатам, где в 1960-х еще царили расовые предрассудки. Правдивая история дружбы талантливого пианиста из светских кругов со своим простодушным шофером и защитником легла в основу дорожной комедии «Зеленая книга» режиссера Питера Фаррелли («Тупой и еще тупее», «Я, снова я и Ирэн»). Картина стала одним из главных участников оскаровской гонки 2019 года, получив три статуэтки, в том числе за лучший фильм и сценарий. Широкую любовь зрителей завоевал обаятельный водитель-итальянец в исполнении датско-американской звезды Вигго Мортенсена. Отец семейства Тони Валлелонга теряет работу в нью-йоркском ночном клубе, где он успешно справлялся с обязанностями вышибалы. Его опыт и «профессиональные» качества привлекают внимание нового работодателя – пианиста-виртуоза Дона Ширли, прославившегося в начале 1960-х как блестящий исполнитель классической музыки. Богатый музыкант ищет себе водителя не робкого десятка, который сопровождал бы его на гастролях по южным штатам. Дон – темнокожий, и ни талант, ни образование, ни светские манеры не защитят его от нападок расистов. Тони соглашается сопровождать Дона ради денег. Непростое двухмесячное путешествие заставит двух героев-антиподов изменить свои взгляды и станет началом редкой дружбы на всю жизнь. Обаятельный, человечный и душевный фильм, покоривший зрителей и критиков, «Зеленая книга» можно посмотреть в нашем онлайн-кинотеатре. Приглашаем посмотреть фильм «Зеленая книга» в нашем онлайн-кинотеатре в хорошем HD качестве. Приятного просмотра!';

export const Details: React.FC<{}> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const mockDescriptionArr = mockDescription.split(' ');

  return (
    <div>
      <p className='text-gray-400 text-[14px] mb-1'>
        {mockDescriptionArr.slice(0, isOpen ? mockDescriptionArr.length : 50).join(' ')}
        {!isOpen && '...'}
      </p>
      {!!isOpen && (
        <div className='border-t-2 border-b-2 py-4 my-5'>
          <p className='text-gray-400 mb-1 font-semibold'>Язки</p>
          <p className='text-gray-300 mb-2'>Русский, Английский, Украинский, Белорусский</p>
          <p className='text-gray-400 mb-1 font-semibold'>Субтитры</p>
          <p className='text-gray-300 mb-2'>Русский, Грузинский, Азербайджанский</p>
          <p className='text-gray-400 mb-1 font-semibold'>
            Изображение и звук.
            <span className='text-gray-500 font-normal'>
              Фактическое качество зависит от устройства и ограничений правообладателя.
            </span>
          </p>
          <ul className='flex gap-x-1'>
            <li className='px-2 py-0.5 text-[12px] font-bold rounded bg-[rgba(255,255,255,.16)] text-white'>
              FullHD
            </li>
            <li className='px-2 py-0.5 text-[12px] font-bold rounded bg-[rgba(255,255,255,.16)] text-white'>
              HD
            </li>
            <li className='px-2 py-0.5 text-[12px] font-bold rounded bg-[rgba(255,255,255,.16)] text-white'>
              1080
            </li>
            <li className='px-2 py-0.5 text-[12px] font-bold rounded bg-[rgba(255,255,255,.16)] text-white'>
              720
            </li>
            <li className='px-2 py-0.5 text-[12px] font-bold rounded bg-[rgba(255,255,255,.16)] text-white'>
              5.1
            </li>
          </ul>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='inline-flex self-start text-[14px] font-bold mt-2 cursor-pointer text-gray-500 transition-colors duration-300 hover:text-white focus:text-white'
      >
        {isOpen ? 'Свернуть детали' : 'Детали о фильме'}
      </button>
    </div>
  );
};
