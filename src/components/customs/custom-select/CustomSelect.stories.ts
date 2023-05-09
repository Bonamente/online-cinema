import type { Meta, StoryObj } from '@storybook/react';
import CustomSelect from './CustomSelect';

const meta: Meta<typeof CustomSelect> = {
  title: 'Custom-UI/Select',
  component: CustomSelect,
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: 'заголовок селекта',
      control: { type: 'text' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof CustomSelect>;

export const Default: Story = {
  args: {
    title: 'Года',
    options: ['2012', '2019', '2020', '2021'],
  },
};

export const Big: Story = {
  args: {
    title: 'Жанры',
    size: 'big',
    options: ['something', 'something'],
  },
};
