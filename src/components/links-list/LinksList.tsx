import Link from 'next/link';
import { LinksListProps } from './types';

const LinksList: React.FC<LinksListProps> = ({ direction, links }) => {
  return (
    <div>
      <ul
        className={`flex m-0 p-0 ${
          direction === 'column' ? 'flex-col' : 'items-stretch'
        } ${direction === 'column' ? `[&>*:not(:first-child)]:mt-1` : ''}`}
      >
        {links.map((link) => {
          const linkStyle = `header-link ${
            link.hasGradient ? 'font-bold' : ''
          }`;

          return (
            <li
              key={link.text}
              className={`${link.hasGradient ? 'link-with-gradient' : ''}`}
            >
              {link.isExternal ? (
                <a
                  className={linkStyle}
                  href={link.path}
                  title={link.title ? link.title : undefined}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {link.text}
                </a>
              ) : (
                <Link
                  className={linkStyle}
                  href={link.path}
                  title={link.title ? link.title : undefined}
                >
                  {link.text}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LinksList;
