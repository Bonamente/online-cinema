const DropdownNotificationContent = () => {
  return (
    <div className='flex mt-16 p-8'>
      <div className='flex flex-col items-center w-full h-full mt-12'>
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
            className='w-14 h-14 text-[#a5a1b2]'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5'
            />
          </svg>
        </div>
        <h3 className='mt-6 text-[15px] text-[#a5a1b2]'>
          Здесь появляются только важные сообщения
        </h3>
      </div>
    </div>
  );
};

export default DropdownNotificationContent;
