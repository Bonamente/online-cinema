import { LinkType } from './types';

export const navLinks: LinkType[] = [
  {
    text: 'Мой Иви',
    path: '/',
    title: 'Мой Иви',
    isExternal: false,
  },
  {
    text: 'Что нового',
    path: 'https://www.ivi.ru/new',
    title: 'Что нового',
    isExternal: true,
  },
  {
    text: 'Фильмы',
    path: '/movies',
    title: 'Фильмы онлайн',
    isExternal: false,
  },
  {
    text: 'Сериалы',
    path: '/movies',
    title: 'Сериалы онлайн',
    isExternal: false,
  },
  {
    text: 'Мультфильмы',
    path: 'https://www.ivi.ru/animation',
    title: 'Мультфильмы онлайн',
    isExternal: true,
  },
  {
    text: 'TV+',
    path: 'https://www.ivi.ru/tvplus',
    title: 'TV+',
    isExternal: true,
  },
];

// TODO конкретные endpoints уточнить у бэкенда
export const movieGenresLinks: LinkType[] = [
  {
    text: 'Артхаус',
    path: '/movies/arthouse',
    title: 'Смотреть фильмы артхаус онлайн',
    isExternal: false,
  },
  {
    text: 'Боевики',
    path: '/movies/boeviki',
    title: 'Смотреть боевики онлайн',
    isExternal: false,
  },
  {
    text: 'Вестерн',
    path: '/movies/western',
    title: 'Смотреть вестерны онлайн',
    isExternal: false,
  },
  {
    text: 'Военные',
    path: '/movies/voennye',
    title: 'Смотреть военное кино онлайн',
    isExternal: false,
  },
  {
    text: 'Детективы',
    path: '/movies/detective',
    title: 'Смотреть детективное кино онлайн',
    isExternal: false,
  },
  {
    text: 'Для всей семьи',
    path: '/movies/dlya_vsej_semi',
    title: 'Смотреть семейные фильмы онлайн',
    isExternal: false,
  },
  {
    text: 'Для детей',
    path: '/movies/detskiy',
    title: 'Смотреть детское кино онлайн',
    isExternal: false,
  },
  {
    text: 'Документальные',
    path: '/movies/documantery',
    title: 'Смотреть документальные фильмы онлайн',
    isExternal: false,
  },
  {
    text: 'Драмы',
    path: '/movies/drama',
    title: 'Смотреть кинодрамы онлайн',
    isExternal: false,
  },
  {
    text: 'Исторические',
    path: '/movies/istoricheskie',
    title: 'Смотреть исторические фильмы онлайн',
    isExternal: false,
  },
  {
    text: 'Катастрофы',
    path: '/movies/disaster',
    title: 'Смотреть фильмы катастрофы онлайн',
    isExternal: false,
  },
  {
    text: 'Комедии',
    path: '/movies/comedy',
    title: 'Смотреть комедии онлайн',
    isExternal: false,
  },
  {
    text: 'Криминальные',
    path: '/movies/crime',
    title: 'Смотреть криминальные фильмы онлайн',
    isExternal: false,
  },
  {
    text: 'Мелодрамы',
    path: '/movies/melodramy',
    title: 'Смотреть мелодрамы онлайн',
    isExternal: false,
  },
  {
    text: 'Мистические',
    path: '/movies/misticheskie',
    title: 'Смотреть мистические фильмы онлайн',
    isExternal: false,
  },
  {
    text: 'По комиксам',
    path: '/movies/comics',
    title: 'Смотреть фильмы по комиксам онлайн',
    isExternal: false,
  },
  {
    text: 'Приключения',
    path: '/movies/adventures',
    title: 'Смотреть приключенческое кино онлайн',
    isExternal: false,
  },
  {
    text: 'Спорт',
    path: '/movies/sport',
    title: 'Смотреть спортивные фильмы онлайн',
    isExternal: false,
  },
  {
    text: 'Триллеры',
    path: '/movies/thriller',
    title: 'Смотреть триллеры онлайн',
    isExternal: false,
  },
  {
    text: 'Ужасы',
    path: '/movies/horror',
    title: 'Смотреть фильмы ужасов онлайн',
    isExternal: false,
  },
  {
    text: 'Фантастика',
    path: '/movies/scifi',
    title: 'Смотреть фантастику онлайн',
    isExternal: false,
  },
  {
    text: 'Фэнтези',
    path: '/movies/fantasy',
    title: 'Смотреть фантастику онлайн',
    isExternal: false,
  },
];

export const movieContries: LinkType[] = [
  {
    text: 'Русские',
    path: '/movies/ru',
    title: 'Смотреть русские фильмы онлайн',
    isExternal: false,
  },
  {
    text: 'Зарубежные',
    path: '/movies/foreign',
    title: 'Смотреть зарубежные фильмы онлайн',
    isExternal: false,
  },
  {
    text: 'Советское кино',
    path: '/movies/su',
    title: 'Смотреть советское кино онлайн',
    isExternal: false,
  },
];

export const movieYears: LinkType[] = [
  {
    text: 'Фильмы 2023 года',
    path: '/movies/2023',
    title: 'Смотреть фильмы 2023 года онлайн',
    isExternal: false,
  },
  {
    text: 'Фильмы 2022 года',
    path: '/movies/2022',
    title: 'Смотреть фильмы 2022 года онлайн',
    isExternal: false,
  },
  {
    text: 'Фильмы 2021 года',
    path: '/movies/2021',
    title: 'Смотреть фильмы 2021 года онлайн',
    isExternal: false,
  },
  {
    text: 'Фильмы 2020 года',
    path: '/movies/2020',
    title: 'Смотреть фильмы 2020 года онлайн',
    isExternal: false,
  },
];

export const movieNew: LinkType[] = [
  {
    text: 'Новинки',
    path: 'https://www.ivi.ru/new/movie-new',
    title: 'Смотреть новинки',
    isExternal: true,
  },

  {
    text: 'Подборки',
    path: 'https://www.ivi.ru/collections',
    title: 'Подборки',
    isExternal: true,
  },

  {
    text: 'Иви.Рейтинг',
    path: 'https://www.ivi.ru/movies/all?ivi_rating_10_gte=7&sort=ivi&rating_part=main&rating_model=ready',
    title: 'Иви.Рейтинг',
    isExternal: true,
  },

  {
    text: 'Скоро на Иви',
    path: 'https://www.ivi.ru/new/soon-ivi',
    title: 'Смотреть скоро на Иви',
    isExternal: true,
  },

  {
    text: 'Трейлеры',
    path: 'https://www.ivi.ru/trailers',
    title: 'Смотреть трейлеры',
    isExternal: true,
  },

  {
    text: 'Что посмотреть',
    path: 'https://www.ivi.ru/goodmovies',
    title: 'Что посмотреть',
    isExternal: true,
  },

  {
    text: 'Фильмы в HD',
    path: 'https://www.ivi.ru/collections/movies-hd',
    title: 'Смотреть фильмы в HD онлайн',
    isExternal: true,
  },

  {
    text: 'Выбор Иви',
    path: 'https://www.ivi.ru/collections/vyibor-ivi',
    title: 'Смотреть фильмы в HD онлайн',
    isExternal: true,
  },

  {
    text: 'Новинки подписки',
    path: 'https://www.ivi.ru/collections/very-new-svod?sort=priority_in_collection',
    title: 'Новинки подписки',
    isExternal: true,
  },

  {
    text: 'Фильмы Amediateka',
    path: 'https://www.ivi.ru/collections/filmyi-amediateka',
    title: 'Фильмы Amediateka',
    isExternal: true,
  },

  {
    text: 'Популярные фильмы',
    path: 'https://www.ivi.ru/collections/best-movies',
    title: 'Популярные фильмы',
    isExternal: true,
  },

  {
    text: 'Фильмы Иви',
    path: 'https://www.ivi.ru/collections/ivi-originals',
    title: 'Фильмы Иви',
    isExternal: true,
  },
];

export const seriesGenresLinks: LinkType[] = [
  {
    text: 'Биография',
    path: '/movies/biography',
    title: 'Смотреть биографические сериалы онлайн',
    isExternal: false,
  },
  {
    text: 'Боевики',
    path: '/movies/boeviki',
    title: 'Смотреть сериалы в жанре боевики онлайн',
    isExternal: false,
  },
  {
    text: 'Военные',
    path: '/movies/voennye',
    title: 'Смотреть военные сериалы онлайн',
    isExternal: false,
  },
  {
    text: 'Детективы',
    path: '/movies/detective',
    title: 'Смотреть детективные сериалы онлайн',
    isExternal: false,
  },
  {
    text: 'Для всей семьи',
    path: '/movies/dlya_vsej_semi',
    title: 'Смотреть семейные сериалы онлайн',
    isExternal: false,
  },
  {
    text: 'Документальные',
    path: '/movies/documentary',
    title: 'Смотреть документальные сериалы онлайн',
    isExternal: false,
  },
  {
    text: 'Дорамы',
    path: '/movies/documentary',
    title: 'Смотреть фильмы дорамы онлайн',
    isExternal: false,
  },
  {
    text: 'Драмы',
    path: '/movies/drama',
    title: 'Смотреть драматические сериалы онлайн',
    isExternal: false,
  },
  {
    text: 'Исторические',
    path: '/movies/history',
    title: 'Смотреть исторические сериалы онлайн',
    isExternal: false,
  },
  {
    text: 'Комедийные',
    path: '/movies/comedy',
    title: 'Смотреть комедийные сериалы онлайн',
    isExternal: false,
  },
  {
    text: 'Криминальные',
    path: '/movies/crime',
    title: 'Смотреть криминальные сериалы онлайн',
    isExternal: false,
  },
  {
    text: 'Медицинские',
    path: '/movies/medicine',
    title: 'Смотреть медицинские сериалы онлайн',
    isExternal: false,
  },
  {
    text: 'Мелодрамы',
    path: '/movies/melodramy',
    title: 'Смотреть сериалы в жанре мелодрамы онлайн',
    isExternal: false,
  },
  {
    text: 'Мистические',
    path: '/movies/misticheskie',
    title: 'Смотреть мистические сериалы онлайн',
    isExternal: false,
  },
  {
    text: 'Приключения',
    path: '/movies/adventures',
    title: 'Смотреть приключенческие сериалы онлайн',
    isExternal: false,
  },
  {
    text: 'Романтические',
    path: '/movies/romanticheskie',
    title: 'Смотреть романтические сериалы онлайн',
    isExternal: false,
  },
  {
    text: 'Телешоу',
    path: '/movies/tvshow',
    title: 'Смотреть телешоу онлайн',
    isExternal: false,
  },
  {
    text: 'Триллеры',
    path: '/movies/thriller',
    title: 'Смотреть сериалы триллеры онлайн',
    isExternal: false,
  },
  {
    text: 'Турецкие',
    path: '/movies/turetskie',
    title: 'Смотреть турецкие сериалы онлайн',
    isExternal: false,
  },
  {
    text: 'Ужасы',
    path: '/movies/horror',
    title: 'Смотреть сериалы в жанре ужасы онлайн',
    isExternal: false,
  },
  {
    text: 'Фантастические',
    path: '/movies/scifi',
    title: 'Смотреть фантастические сериалы онлайн',
    isExternal: false,
  },
  {
    text: 'Фэнтези',
    path: '/movies/fantasy',
    title: 'Смотреть сериалы фэнтези онлайн',
    isExternal: false,
  },
];

export const seriesContries: LinkType[] = [
  {
    text: 'Русские',
    path: '/movies/ru',
    title: 'Русские сериалы онлайн',
    isExternal: false,
  },
  {
    text: 'Зарубежные',
    path: '/movies/foreign',
    title: 'Зарубежные сериалы онлайн',
    isExternal: false,
  },
  {
    text: 'Американские',
    path: '/movies/us',
    title: 'Американские сериалы онлайн',
    isExternal: false,
  },
  {
    text: 'Украинские',
    path: '/movies/ua',
    title: 'Украинские сериалы онлайн',
    isExternal: false,
  },
  {
    text: 'Корейские',
    path: '/movies/kr',
    title: 'Корейские сериалы онлайн',
    isExternal: false,
  },
  {
    text: 'Турецкие',
    path: '/movies/tr',
    title: 'Турецкие сериалы онлайн',
    isExternal: false,
  },
];

export const seriesYears: LinkType[] = [
  {
    text: 'Сериалы 2023 года',
    path: '/movies/2023',
    title: 'Смотреть сериалы 2023 онлайн',
    isExternal: false,
  },
  {
    text: 'Сериалы 2022 года',
    path: '/movies/2022',
    title: 'Смотреть сериалы 2022 онлайн',
    isExternal: false,
  },
  {
    text: 'Сериалы 2021 года',
    path: '/movies/2021',
    title: 'Смотреть сериалы 2021 онлайн',
    isExternal: false,
  },
  {
    text: 'Сериалы 2020 года',
    path: '/movies/2020',
    title: 'Смотреть сериалы 2020 онлайн',
    isExternal: false,
  },
];

export const seriesNew: LinkType[] = [
  {
    text: 'Новинки',
    path: 'https://www.ivi.ru/new/series-new',
    title: 'Смотреть новинки',
    isExternal: true,
  },
  {
    text: 'Иви.Рейтинг',
    path: 'https://www.ivi.ru/series/all?ivi_rating_10_gte=7&sort=ivi&rating_part=main&rating_model=ready',
    title: 'Иви.Рейтинг',
    isExternal: true,
  },
  {
    text: 'Сериалы в HD',
    path: 'https://www.ivi.ru/collections/series-hd',
    title: 'Смотреть сериалы в HD онлайн',
    isExternal: true,
  },
  {
    text: 'Бесплатные сериалы',
    path: 'https://www.ivi.ru/collections/tvshow-free?sort=new',
    title: 'Бесплатные сериалы',
    isExternal: true,
  },
  {
    text: 'Сериалы Amediateka',
    path: 'https://www.ivi.ru/collections/serialyi-amediateka',
    title: 'Сериалы Amediateka',
    isExternal: true,
  },
  {
    text: 'Сериалы Paramount Play',
    path: 'https://www.ivi.ru/collections/series-paramount-play',
    title: 'Сериалы Paramount Play',
    isExternal: true,
  },
];

export const animationGenresLinks: LinkType[] = [
  {
    text: 'Аниме',
    path: 'https://www.ivi.ru/animation/anime/page2',
    title: 'Смотреть аниме мультфильм онлайн',
    isExternal: true,
  },
  {
    text: 'Боевик',
    path: 'https://www.ivi.ru/animation/militants',
    title: 'Смотреть мультфильмы в жанре боевик онлайн',
    isExternal: true,
  },
  {
    text: 'Детектив',
    path: 'https://www.ivi.ru/animation/detective',
    title: 'Смотреть мультфильмы в жанре детектив онлайн',
    isExternal: true,
  },
  {
    text: 'Для взрослых',
    path: 'https://www.ivi.ru/animation/vzroslye',
    title: 'Смотреть мультфильмы для взрослых онлайн',
    isExternal: true,
  },
  {
    text: 'Для всей семьи',
    path: 'https://www.ivi.ru/animation/dlya_vsej_semi',
    title: 'Смотреть семейные мультфильмы онлайн',
    isExternal: true,
  },
  {
    text: 'Для детей',
    path: 'https://www.ivi.ru/animation/detskie',
    title: 'Смотреть детские мультфильмы онлайн',
    isExternal: true,
  },
  {
    text: 'Драма',
    path: 'https://www.ivi.ru/animation/drama',
    title: 'Смотреть драматические мультфильмы онлайн',
    isExternal: true,
  },
  {
    text: 'История',
    path: 'https://www.ivi.ru/animation/history',
    title: 'Смотреть исторические мультфильмы онлайн',
    isExternal: true,
  },
  {
    text: 'Комедия',
    path: 'https://www.ivi.ru/animation/comedy',
    title: 'Смотреть комедийные мультфильмы онлайн',
    isExternal: true,
  },
  {
    text: 'Криминальные',
    path: 'https://www.ivi.ru/animation/crime',
    title: 'Смотреть криминальные мультфильмы онлайн',
    isExternal: true,
  },
  {
    text: 'Мюзикл',
    path: 'https://www.ivi.ru/animation/musical',
    title: 'Смотреть мультфильмы мюзиклы онлайн',
    isExternal: true,
  },
  {
    text: 'Полнометражные',
    path: 'https://www.ivi.ru/animation/polnometrazhnye',
    title: 'Смотреть полнометражные мультфильмы онлайн',
    isExternal: true,
  },
  {
    text: 'Приключения',
    path: 'https://www.ivi.ru/animation/adventure',
    title: 'Смотреть приключенческие мультфильмы онлайн',
    isExternal: true,
  },
  {
    text: 'Развивающие',
    path: 'https://www.ivi.ru/animation/razvivayuschie',
    title: 'Смотреть развивающие мультфильмы онлайн',
    isExternal: true,
  },
  {
    text: 'Сериалы',
    path: 'https://www.ivi.ru/animation/serialy',
    title: 'Смотреть анимационные сериалы онлайн',
    isExternal: true,
  },
  {
    text: 'Спорт',
    path: 'https://www.ivi.ru/animation/sport',
    title: 'Смотреть мультфильмы про спорт онлайн',
    isExternal: true,
  },
  {
    text: 'Триллер',
    path: 'https://www.ivi.ru/animation/thriller',
    title: 'Смотреть мультфильмы триллеры онлайн',
    isExternal: true,
  },
  {
    text: 'Ужасы',
    path: 'https://www.ivi.ru/animation/horror',
    title: 'Смотреть мультфильмы в жанре ужасы онлайн',
    isExternal: true,
  },
  {
    text: 'Фантастика',
    path: 'https://www.ivi.ru/animation/fantastic',
    title: 'Смотреть фантастические мультфильмы онлайн',
    isExternal: true,
  },
  {
    text: 'Фэнтези',
    path: 'https://www.ivi.ru/animation/fantasy',
    title: 'Смотреть мультфильмы фэнтези онлайн',
    isExternal: true,
  },
];

export const animationContries: LinkType[] = [
  {
    text: 'Советские',
    path: 'https://www.ivi.ru/animation/su',
    title: 'Советские мультфильмы онлайн',
    isExternal: true,
  },
  {
    text: 'Русские',
    path: 'https://www.ivi.ru/animation/ru',
    title: 'Русские мультфильмы онлайн',
    isExternal: true,
  },
  {
    text: 'Американские',
    path: 'https://www.ivi.ru/animation/us',
    title: 'Американские мультфильмы онлайн',
    isExternal: true,
  },
  {
    text: 'Зарубежные',
    path: 'https://www.ivi.ru/animation/foreign',
    title: 'Зарубежные мультфильмы онлайн',
    isExternal: true,
  },
];

export const animationYears: LinkType[] = [
  {
    text: 'Мультики 2023 года',
    path: 'https://www.ivi.ru/animation/2023',
    title: 'Смотреть мультфильмы 2023 года онлайн',
    isExternal: true,
  },
  {
    text: 'Мультики 2022 года',
    path: 'https://www.ivi.ru/animation/2022',
    title: 'Смотреть мультфильмы 2022 года онлайн',
    isExternal: true,
  },
  {
    text: 'Мультики 2021 года',
    path: 'https://www.ivi.ru/animation/2021',
    title: 'Смотреть мультфильмы 2021 года онлайн',
    isExternal: true,
  },
  {
    text: 'Мультики 2020 года',
    path: 'https://www.ivi.ru/animation/2020',
    title: 'Смотреть мультфильмы 2020 года онлайн',
    isExternal: true,
  },
];

export const animationNew: LinkType[] = [
  {
    text: 'Новинки',
    path: 'https://www.ivi.ru/new/series-new',
    title: 'Смотреть новые мультики онлайн',
    isExternal: true,
  },
  {
    text: 'Мультики в HD',
    path: 'https://www.ivi.ru/series/all?ivi_rating_10_gte=7&sort=ivi&rating_part=main&rating_model=ready',
    title: 'Смотреть мультфильмы в HD онлайн',
    isExternal: true,
  },
  {
    text: 'Мультфильмы Paramount Play / Nickelodeon',
    path: 'https://www.ivi.ru/collections/series-paramount-play',
    title: 'Мультфильмы Paramount Play / Nickelodeon',
    isExternal: true,
  },
  {
    text: 'Мультфильмы Dreamworks',
    path: 'https://www.ivi.ru/collections/series-paramount-play',
    title: 'Мультфильмы студии Dreamworks',
    isExternal: true,
  },
  {
    text: 'Мультфильмы СТС Kids',
    path: 'https://www.ivi.ru/collections/serialyi-amediateka',
    title: 'Мультфильмы СТС Kids',
    isExternal: true,
  },
];

export const tvLinks: LinkType[] = [
  {
    text: 'ТВ-каналы',
    path: 'https://www.ivi.ru/tvplus',
    title: 'Смотреть ТВ-каналы онлайн',
    isExternal: true,
  },
  {
    text: 'Развлекательное',
    path: 'https://www.ivi.ru/tvplus/razvlekatelnoe',
    title: 'Смотреть развлекательное ТВ онлайн',
    isExternal: true,
  },
  {
    text: 'Дети',
    path: 'https://www.ivi.ru/tvplus/deti',
    title: 'Смотреть передачи для детей онлайн',
    isExternal: true,
  },
  {
    text: 'Спортивное ТВ',
    path: 'https://www.ivi.ru/tvplus/sport',
    title: 'Смотреть спортивное ТВ онлайн',
    isExternal: true,
  },
  {
    text: 'Документальное',
    path: 'https://www.ivi.ru/tvplus/documentalnoe',
    title: 'Смотреть документальное ТВ онлайн',
    isExternal: true,
  },
];

export const tvChannelLinks: LinkType[] = [
  {
    text: '1tv',
    path: 'https://www.ivi.ru/tvchannels/watch/1tv',
    imgUrl: '/images/channels/channel1.jpeg',
    isExternal: true,
  },
  {
    text: 'russia1',
    path: 'https://www.ivi.ru/tvchannels/watch/russia1',
    imgUrl: '/images/channels/russia1.jpeg',
    isExternal: true,
  },
  {
    text: 'match-tv',
    path: 'https://www.ivi.ru/tvchannels/watch/match-tv',
    imgUrl: '/images/channels/match-tv.jpeg',
    isExternal: true,
  },
  {
    text: 'ntv',
    path: 'https://www.ivi.ru/tvchannels/watch/ntv',
    imgUrl: '/images/channels/ntv.jpeg',
    isExternal: true,
  },
  {
    text: '5tv',
    path: 'https://www.ivi.ru/tvchannels/watch/5tv',
    imgUrl: '/images/channels/5tv.jpeg',
    isExternal: true,
  },
  {
    text: 'kultura',
    path: 'https://www.ivi.ru/tvchannels/watch/russia-k',
    imgUrl: '/images/channels/kultura.jpeg',
    isExternal: true,
  },
  {
    text: 'russia24',
    path: 'https://www.ivi.ru/tvchannels/watch/russia24',
    imgUrl: '/images/channels/russia24.jpeg',
    isExternal: true,
  },
  {
    text: 'karusel',
    path: 'https://www.ivi.ru/tvchannels/watch/karusel',
    imgUrl: '/images/channels/carousel.jpeg',
    isExternal: true,
  },
];

export const tvSportLinks: LinkType[] = [
  {
    text: 'match premier',
    path: 'https://www.ivi.ru/tvchannels/watch/match-premer',
    imgUrl: '/images/channels/match-premier.jpeg',
    isExternal: true,
  },
  {
    text: 'match football-1',
    path: 'https://www.ivi.ru/tvchannels/watch/futbol-1',
    imgUrl: '/images/channels/match-football-1.jpeg',
    isExternal: true,
  },
  {
    text: 'match football-2',
    path: 'https://www.ivi.ru/tvchannels/watch/futbol-2',
    imgUrl: '/images/channels/match-football-2.jpeg',
    isExternal: true,
  },
  {
    text: 'match football-3',
    path: 'https://www.ivi.ru/tvchannels/watch/futbol-3',
    imgUrl: '/images/channels/match-football-3.jpeg',
    isExternal: true,
  },
  {
    text: 'boec',
    path: 'https://www.ivi.ru/tvchannels/watch/match-boec',
    imgUrl: '/images/channels/fighter.jpeg',
    isExternal: true,
  },
  {
    text: 'khl prime',
    path: 'https://www.ivi.ru/tvchannels/watch/khl-tv-hd',
    imgUrl: '/images/channels/khl-prime.jpeg',
    isExternal: true,
  },
  {
    text: 'start live',
    path: 'https://www.ivi.ru/tvchannels/watch/start',
    imgUrl: '/images/channels/start-live.jpeg',
    isExternal: true,
  },
  {
    text: 'khl',
    path: 'https://www.ivi.ru/tvchannels/watch/khl-tv',
    imgUrl: '/images/channels/khl.jpeg',
    isExternal: true,
  },
];

export const footerAboutLinks: LinkType[] = [
  {
    text: 'О компании',
    path: 'https://corp.ivi.ru/?_gl=1*d0q8mo*_ga*NTU0Mzk0ODE4LjE2ODEyMTM0ODM.*_ga_GETQ4387MJ*MTY4MTM2MDAwMS40LjEuMTY4MTQwNjc1OS4yOC4wLjA.',
    isExternal: true,
  },
  {
    text: 'Вакансии',
    path: 'https://corp.ivi.ru/career/#career-vacancy-block',
    isExternal: true,
  },
  {
    text: 'Программа бета-тестирования',
    path: 'https://www.ivi.ru/pages/beta/',
    isExternal: true,
  },
  {
    text: 'Информация для партнёров',
    path: 'https://www.ivi.ru/info/partners',
    isExternal: true,
  },
  {
    text: 'Размещение рекламы',
    path: 'https://corp.ivi.ru/advertisers/?_gl=1*ro4ta9*_ga*NTU0Mzk0ODE4LjE2ODEyMTM0ODM.*_ga_GETQ4387MJ*MTY4MTM2MDAwMS40LjEuMTY4MTQwNzIwMC4yOC4wLjA.',
    isExternal: true,
  },
  {
    text: 'Пользовательское соглашение',
    path: 'https://www.ivi.ru/info/agreement',
    isExternal: true,
  },
  {
    text: 'Политика конфиденциальности',
    path: 'https://www.ivi.ru/info/confidential',
    isExternal: true,
  },
  {
    text: 'Комплаенс',
    path: 'https://www.ivi.ru/info/goryachaya-liniya-komplaens',
    isExternal: true,
  },
];

export const footerSectionsLinks: LinkType[] = [
  {
    text: 'Мой Иви',
    path: '/',
    isExternal: false,
  },
  {
    text: 'Что нового',
    path: 'https://www.ivi.ru/new',
    isExternal: true,
  },
  {
    text: 'Фильмы',
    path: '/movies',
    isExternal: false,
  },
  {
    text: 'Сериалы',
    path: 'https://www.ivi.ru/series',
    isExternal: true,
  },
  {
    text: 'Мультфильмы',
    path: 'https://www.ivi.ru/animation',
    isExternal: true,
  },
  {
    text: 'TV+',
    path: 'https://www.ivi.ru/tvplus',
    isExternal: true,
  },
  {
    text: 'Что посмотреть',
    path: 'https://www.ivi.ru/goodmovies',
    isExternal: true,
  },
  {
    text: 'Активация сертификата',
    path: 'https://www.ivi.ru/cert',
    isExternal: true,
    hasGradient: true,
  },
];

export const socialsLinks: LinkType[] = [
  {
    text: 'VK',
    path: 'https://vk.com/iviru?crc=fa4448c13e06e69ba9e814e8743c7e2e',
    imgUrl: '/icons/vkontakte-logo.svg',
    isExternal: true,
  },
  {
    text: 'OK',
    path: 'https://ok.ru/ivi.ru',
    imgUrl: '/icons/odnoklassniki-logo.svg',
    isExternal: true,
  },
  {
    text: 'Twitter',
    path: 'https://twitter.com/ivi_ru',
    imgUrl: '/icons/twitter-logo.svg',
    isExternal: true,
  },
  {
    text: 'Viber',
    path: 'https://vb.me/a0544c',
    imgUrl: '/icons/viber-logo.svg',
    isExternal: true,
  },
  {
    text: 'LinkedIn',
    path: 'https://www.linkedin.com/company/2543415/',
    imgUrl: '/icons/linkedin-logo.svg',
    isExternal: true,
  },
  {
    text: 'Telegram',
    path: 'https://t.me/official_iviru',
    imgUrl: '/icons/telegram-logo.svg',
    isExternal: true,
  },
];
