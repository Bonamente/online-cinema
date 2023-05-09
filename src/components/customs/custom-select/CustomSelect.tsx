import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import CustomSelectList from './custom-select-list/CustomSelectList';
import CustomSelectProps from './types';

const CustomSelect: React.FC<CustomSelectProps> = ({ title, size, options }) => {
  const [showList, setShowList] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const selectedRef = useRef<HTMLDivElement>(null);
  const selectTitleRef = useRef<HTMLDivElement>(null);

  const onToggleShowList = useCallback(() => {
    setShowList((current) => !current);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (showList) {
        if (
          e.composedPath().includes(listRef.current!) ||
          e.composedPath().includes(selectedRef.current!)
        )
          return;
        onToggleShowList();
      }
    };
    document.addEventListener('click', handler);
    return () => {
      document.removeEventListener('click', handler);
    };
  }, [onToggleShowList, showList]);

  return (
    <div
      className='
      relative group/list
      sm:basis-[47%] 
      md:basis-[250px] md:grow-0 md:w-[250px]
      '
    >
      <div
        ref={selectedRef}
        onClick={onToggleShowList}
        className={`
          flex items-center justify-between transition cursor-pointer
          h-[56px]  ${showList ? 'bg-[#7e798f]' : 'bg-[#312b45]'}
          text-white rounded-md px-4 font-semibold
        `}
      >
        <p ref={selectTitleRef}>{title}</p>
        <ChevronDownIcon className={`transition ${showList ? 'rotate-180' : 'rotate-0'} w-8`} />
      </div>
      {showList && (
        <CustomSelectList options={options} size={size} visible={showList} ref={listRef} />
      )}
    </div>
  );
};

export default CustomSelect;
