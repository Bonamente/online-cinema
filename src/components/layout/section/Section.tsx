import React, { PropsWithChildren } from 'react';
import { SectionProps } from './types';

const Section: React.FC<PropsWithChildren<SectionProps>> = ({ children, withoutPadding }) => {
  return (
    <section
      className={`my-[50px] w-auto mx-[24px] xl:w-[1240px] xl:mx-auto relative 
      ${withoutPadding ? '' : 'px-3'}`}
    >
      {children}
    </section>
  );
};

export default Section;
