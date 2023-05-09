import CustomButton from '@/components/customs/custom-button/CustomButton';
import CustomSelect from '@/components/customs/custom-select/CustomSelect';
import { PlusIcon } from '@heroicons/react/20/solid';

const FilterBar = () => {
  const a: { title: string; size?: 'big'; options: string[] }[] = [
    {
      title: 'Жанры',
      size: 'big',
      options: [
        'something',
        'something',
        'something',
        'something',
        'something',
        'something',
        'something',
        'something',
        'something',
        'something',
        'something',
        'something',
        'something',
        'something',
        'something',
        'something',
        'something',
        'something',
        'something',
        'something',
        'something',
        'something',
        'something',
        'something',
        'something',
        'something',
      ],
    },
    {
      title: 'Страны',
      size: 'big',
      options: [
        'something',
        'something',
        'something',
        'something',
        'something',
        'something',
        'something',
        'something',
        'something',
        'something',
        'something',
        'something',
        'something',
      ],
    },
    {
      title: 'Годы',
      options: ['something', 'something', 'something', 'something', 'something', 'something'],
    },
    {
      title: 'Рейтинг',
      options: ['something', 'something', 'something', 'something', 'something'],
    },
  ];

  return (
    <div className='flex flex-col bg-[#1f1b2e]  mx-auto p-4'>
      <div
        className='
            flex flex-col gap-2 
            sm:flex-row sm:flex-wrap sm:justify-between
            md:flex-nowrap
            '
      >
        {a.map((data) => (
          <CustomSelect key={data.title} {...data} />
        ))}
      </div>
      <div className='flex gap-2 my-6 flex-wrap'>
        <CustomButton icon={<PlusIcon className='w-6' />} colorType='default'>
          Бесплатные
        </CustomButton>
        <CustomButton icon={<PlusIcon className='w-6' />} colorType='default'>
          По подписке
        </CustomButton>
        <CustomButton icon={<PlusIcon className='w-6' />} colorType='default'>
          На языке оригинала
        </CustomButton>
        <CustomButton icon={<PlusIcon className='w-6' />} colorType='default'>
          С субтитрами
        </CustomButton>
        <CustomButton icon={<PlusIcon className='w-6' />} colorType='default'>
          Объемный звук
        </CustomButton>
      </div>
      <button className='text-white opacity-30 inline-flex w-[180px] items-center justify-evenly'>
        <PlusIcon className='w-8 rotate-45' />
        Сбросить фильтры
      </button>
    </div>
  );
};

export default FilterBar;
