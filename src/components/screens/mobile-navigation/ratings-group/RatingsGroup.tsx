const RatingsGroup = () => {
  return (
    <div className='mt-8 py-8 border-y border-white/[.16]'>
      <ul className='[&>*:not(:first-child)]:mt-6'>
        <li className='mobileNavigation__linkSectionItem'>
          <a
            className='mobile-nav-link'
            href='https://www.ivi.ru/movies/all?ivi_rating_10_gte=7&amp;sort=ivi&amp;rating_part=main&amp;rating_model=ready'
            target='_blank'
            rel='noopener noreferrer'
          >
            Иви.Рейтинг фильмы
          </a>
        </li>
        <li className='mobileNavigation__linkSectionItem'>
          <a
            className='mobile-nav-link'
            href='https://www.ivi.ru/series/all?ivi_rating_10_gte=7&amp;sort=ivi&amp;rating_part=main&amp;rating_model=ready'
            target='_blank'
            rel='noopener noreferrer'
          >
            Иви.Рейтинг сериалы
          </a>
        </li>
      </ul>
    </div>
  );
};

export default RatingsGroup;
