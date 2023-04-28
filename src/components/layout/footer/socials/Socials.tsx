import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import { SocialsProps } from './types';

const Socials: React.FC<SocialsProps> = ({ links }) => {
  const isSmallMobile = useMediaQuery({ query: '(max-width: 380px)' });

  return (
    <ul
      className={`flex ${isSmallMobile ? 'justify-center' : ''} items-center ${
        isSmallMobile ? '[&>*:not(:first-child)]:ml-1' : '[&>*:not(:first-child)]:ml-3'
      }`}
    >
      {links.map((link) => (
        <li key={link.text}>
          <a className='footer-social' href={link.path} target='_blank' rel='noopener noreferrer'>
            <span className='sr-only'>{link.text}</span>
            <Image
              className='footer-social-img'
              width={16}
              height={16}
              src={link.imgUrl || ''}
              alt={`${link.text} logo`}
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
