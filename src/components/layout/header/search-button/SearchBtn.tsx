const SearchBtn: React.FC = () => {
  return (
    <div className='flex h-full items-center'>
      <button
        className='header-link flex justify-between items-center w-[70px] h-10 py-[10px] font-bold'
        type='button'
      >
        <span className='w-4 h-4'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={3}
            stroke='currentColor'
            className='w-4 h-4'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
            />
          </svg>
        </span>
        <span>Поиск</span>
      </button>
    </div>
  );
};

export default SearchBtn;
