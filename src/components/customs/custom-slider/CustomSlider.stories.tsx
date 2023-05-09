import type { Meta, StoryObj } from '@storybook/react';
import CustomSlider from './CustomSlider';
import CustomButton from '../custom-button/CustomButton';

const GenreItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='!w-[160px] h-[160px] rounded-md bg-[#1f1b2e] flex text-white shrink-0 justify-center items-center'>
      {children}
    </div>
  );
};

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
  'Китай',
  'Корея',
  'Великобритания',
  'Испания',
  'Италия',
  'Бразилия',
  'Индия',
];

const meta: Meta<typeof CustomSlider> = {
  title: 'Custom-UI/Slider',
  component: CustomSlider,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    backgrounds: {
      default: 'ivi',
      values: [{ name: 'ivi', value: '#312b45' }],
    },
  },
};

export default meta;

type Story = StoryObj<typeof CustomSlider>;

export const Default: Story = {
  args: {
    children: sliderData.map((i, idx) => (
      <CustomButton colorType='default' key={idx}>
        {i}
      </CustomButton>
    )),
  },
};
export const GenreSlider: Story = {
  args: {
    children: sliderData.map((i, idx) => <GenreItem key={idx}>{i}</GenreItem>),
  },
};
