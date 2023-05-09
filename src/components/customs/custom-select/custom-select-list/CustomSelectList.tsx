import React, { forwardRef } from 'react';
import CustomSelectListItem from '../custom-select-list-item/CustomSelectListItem';
import CustomSlider from '../../custom-slider/CustomSlider';
import CustomSelectListProps from './types';
import CustomButton from '../../custom-button/CustomButton';

const sliderData = [
  'Россия',
  'США',
  'Франция',
  'Китай',
  'Корея',
  'Великобритания',
  'Испания',
  'Италия',
  'Бразилия',
  'Индия',
];

const listPositionStyles = (size: string | undefined) => {
  switch (size) {
    case 'big':
      return `md:group-odd/list:-translate-x-[30%] md:group-even/list:translate-x-[30%]
              md:group-first/list:!translate-x-0 md:group-last/list:!translate-x-0
              w-full h-auto sm:w-[180%] md:w-[250%]
            `;

    default:
      return '';
  }
};

const listItemsLayout = (size: string | undefined) => {
  switch (size) {
    case 'big':
      return 'sm:grid sm:gap-x-[40px] sm:grid-cols-2 md:grid-cols-3';

    default:
      return '';
  }
};

const CustomSelectList = forwardRef<HTMLDivElement, CustomSelectListProps>(
  ({ size, options }, ref) => {
    return (
      <div
        ref={ref}
        className={`
          flex flex-col p-4 ${!size ? 'pt-1' : ''} w-full 
          absolute bg-[#312b45] top-[58px] rounded-md z-30 
          sm:group-odd/list:left-0 sm:group-even/list:right-0
          ${listPositionStyles(size)}
        `}
      >
        {size && (
          <>
            <CustomSlider slidesPerView='auto' id='filter' buttonsPosition='inside'>
              {sliderData.map((data, idx) => (
                <CustomButton colorType='default' key={idx}>
                  {data}
                </CustomButton>
              ))}
            </CustomSlider>
            <div className='w-full mt-[12px] border-b-[1px] border-white opacity-50' />
          </>
        )}
        <ul
          className={`
            transition text-[#d9d7e0cc] list-none
            flex flex-col flex-wrap
            ${listItemsLayout(size)}
          `}
        >
          {options.map((i, idx) => (
            <CustomSelectListItem key={idx} label={i} icon='check' />
          ))}
        </ul>
      </div>
    );
  }
);

CustomSelectList.displayName = 'CustomSelectList';
export default CustomSelectList;
