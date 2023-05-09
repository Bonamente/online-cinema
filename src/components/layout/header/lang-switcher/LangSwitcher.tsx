import Link from 'next/link';
import { useRouter } from 'next/router';

const LangSwitcher = () => {
  const router = useRouter();

  const { locales, locale: activeLocale } = router;

  const otherLocales = locales?.filter(
    (locale) => locale !== activeLocale && locale !== 'default'
  );

  return (
    <div className='flex h-full items-center'>
      <span>
        <Link className='header-link font-bold' href=''>
          Ru
        </Link>

        {/* {otherLocales?.map((locale) => {
          const { pathname, query, asPath } = router;
          return (
            <span key={'locale-' + locale}>
              <Link href={{ pathname, query }} as={asPath} locale={locale}>
                <a>
                  {locale === 'en'
                    ? 'En'
                    : locale === 'ru'
                    ? 'Ru'
                    : null}
                </a>
              </Link>
            </span>
          );
        })} */}
      </span>
    </div>
  );
};

export default LangSwitcher;
