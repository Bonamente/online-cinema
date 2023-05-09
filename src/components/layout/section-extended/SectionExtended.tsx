import { PropsWithChildren } from 'react';
import { SectionProps } from './types';

const Section: React.FC<PropsWithChildren<SectionProps>> = ({
  children,
  hasMargin,
  hasPadding,
}) => {
  return (
    <section
      className={`${
        hasMargin ? 'my-[50px]' : ''
      } w-auto mx-[24px] xl:w-[1240px] xl:mx-auto relative 
      ${hasPadding ? 'px-3' : ''}`}
    >
      {children}
    </section>
  );
};

export default Section;
