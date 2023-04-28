import Image from 'next/image';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import { PreviewWeekTopProps } from './types';

const PreviewWeekTop: React.FC<PreviewWeekTopProps> = ({
  title,
  link,
  poster,
  ratingNum,
  ratingNum2,
}) => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 740px)' });
  const numberWidth = isSmallScreen ? '32' : '48';
  const numberHeight = isSmallScreen ? '44' : '66';

  return (
    <div className='hover:scale-[1.05] transition-transform duration-300 cursor-pointer'>
      <Link className='relative max-w-[224px]' href={link}>
        <Image
          width='0'
          height='0'
          sizes='100vw'
          className='w-[224px] h-auto rounded-md'
          src={poster}
          alt={title}
        />

        <div className='absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-[#100e19] to-[rgba(16,14,25,0)]'></div>

        <div className='absolute bottom-[54px] left-6 right-6 flex justify-center items-center h-[21%]'>
          <h3 className='text-[24px] leading-5 text-white font-bold'>{title}</h3>
        </div>

        <div
          className={`absolute bottom-[5px] left-[50%] flex h-[${numberHeight}px] translate-x-[-50%]`}
        >
          {ratingNum2 ? (
            <Image
              width={numberWidth}
              height={numberHeight}
              style={{ width: `${numberWidth}`, height: `${numberHeight}` }}
              src={ratingNum2}
              alt=''
            />
          ) : null}
          <Image
            width={numberWidth}
            height={numberHeight}
            style={{ width: `${numberWidth}`, height: `${numberHeight}` }}
            src={ratingNum}
            alt=''
          />
        </div>
      </Link>
    </div>
  );
};

export default PreviewWeekTop;
