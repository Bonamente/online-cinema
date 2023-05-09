import React from 'react';
import CustomButtonProps, { ButtonColorType } from './types';

const getColors = (colorType: ButtonColorType) => {
  switch (colorType) {
    case 'filled':
      return 'bg-[#312b45] opacity-90 hover:opacity-100 transition';
    default:
      return 'border-[0.5px] border-white';
  }
};

const CustomButton: React.FC<CustomButtonProps> = ({ colorType, children, icon }) => {
  return (
    <button
      className={`${getColors(
        colorType
      )} flex px-3 py-[6px] items-center justify-center gap-1 text-sm rounded-full text-white `}
    >
      {icon}
      <p>{children}</p>
    </button>
  );
};

export default CustomButton;
