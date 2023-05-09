import { useContext, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import AppContext from '@/context/AppContext';
import { CustomModal } from '@/components/customs/custom-modal/CustomModal';
import CustomInput from '@/components/customs/custom-input/CustomInput';
import { XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';

interface SearchInputs {
  name: string;
}

const SearchModal = () => {
  const { isSearchModalOpen, onClose } = useContext(AppContext);
  const [results, setResults] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
    formState,
    watch,
    reset,
  } = useForm<SearchInputs>({ mode: 'onSubmit' });

  const searchValue = watch('name');

  const onSubmit: SubmitHandler<SearchInputs> = async (data, e) => {
    // alert(JSON.stringify(data));
    e?.preventDefault();

    // setIsRequested(true);

    try {
      // const response = await fetch(`/movies/${data.name}`); // TODO
      // setResults(response.json());
    } catch (e) {
      // handle your error
    }
  };

  // useEffect(() => {
  //   if (isSubmitSuccessful) {
  //     reset({
  //       name: '',
  //     });
  //   }
  // }, [isSubmitSuccessful, reset]);

  const clearField = () => {
    reset({
      name: '',
    });

    setResults([]);
  };

  return (
    <CustomModal isOpen={isSearchModalOpen} handleClose={onClose} hasCloseButton>
      <div className='flex justify-center w-full h-full pt-[60px]'>
        <div className='max-w-[860px] w-full'>
          <div className='mb-8'>
            <h2 className='text-[40px] leading-[44px] font-bold mb-10'>Поиск</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='flex items-center gap-4'>
              <div className='relative w-full group/search'>
                <CustomInput
                  placeholder='Фильмы, персоны, жанры'
                  name='name'
                  errors={errors.name}
                  register={register}
                  textColor='text-black'
                />

                {searchValue ? (
                  <button
                    className='absolute top-0 right-0 w-10 h-10 flex justify-center items-center text-[rgba(31,27,46,.16)] group-hover/search:text-[rgba(31,27,46,.4)]'
                    type='button'
                    onClick={clearField}
                  >
                    <span className='sr-only'>Очистить поле поиска</span>
                    <XMarkIcon className='w-5 h-5 stroke-[3]' />
                  </button>
                ) : (
                  <div
                    className='absolute top-0 right-0 w-10 h-10 flex justify-center items-center text-[rgba(31,27,46,.16)] group-hover/search:text-[rgba(31,27,46,.4)]'
                    aria-hidden='true'
                  >
                    <MagnifyingGlassIcon className='w-5 h-5 stroke-[3]' />
                  </div>
                )}
              </div>
            </form>
          </div>

          <div>
            {searchValue && isSubmitted && results.length > 0 && 'TODO'}
            {searchValue && isSubmitted && results.length === 0 && (
              <div>
                <h3 className='text-[20px] leading-6 font-bold'>Ничего не нашлось</h3>

                <div className='mt-3 text-[15px] leading-[22px] text-[#a5a1b2]'>
                  <p>Попробуйте ввести название фильма, жанр или имя персоны</p>
                  <p className='mt-3'>Может быть, вы ищете то, чего пока нет в каталоге</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </CustomModal>
  );
};

export default SearchModal;
