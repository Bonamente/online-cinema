import { useEffect, PropsWithChildren } from 'react';
import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { CustomModalProps } from './types';

export const CustomModal: React.FC<PropsWithChildren<CustomModalProps>> = ({
  isOpen = false,
  handleClose,
  hasCloseButton,
  children,
}) => {
  useEffect(() => {
    if (!isOpen) {
      document.documentElement.style.overflow = 'auto';
    } else {
      document.documentElement.style.overflow = 'hidden';
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onClose={handleClose} className='relative z-50'>
      <div className='fixed inset-0 bg-[rgba(7,5,14,.96)]' aria-hidden='true' />

      <Dialog.Panel className='fixed inset-0 flex p-10 text-white bg-transparent'>
        {hasCloseButton ? (
          <button
            className='absolute top-12 right-12 z-[60] w-8 h-8 text-[#a5a1b2] hover:text-white hover:scale-105 focus:text-white focus:scale-105 transition-all duration-300'
            onClick={handleClose}
          >
            <span className='sr-only'>Закрыть модальное окно</span>
            <XMarkIcon className='w-full h-full stroke-[3]' />
          </button>
        ) : null}
        {children}
      </Dialog.Panel>
    </Dialog>
  );
};
