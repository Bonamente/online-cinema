import React from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';
import CustomSelectListItemProps from './types';

const CustomSelectListItem: React.FC<CustomSelectListItemProps> = ({ label, icon }) => {
  return (
    <li className='w-full mt-[12px] flex justify-between group/list-item cursor-pointer'>
      <p>{label}</p>
      {icon === 'check' ? (
        <CheckIcon className='transition opacity-0 group-hover/list-item:opacity-100 w-5' />
      ) : null}
    </li>
  );
};

export default CustomSelectListItem;
