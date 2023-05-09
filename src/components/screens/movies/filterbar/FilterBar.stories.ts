import type { Meta, StoryObj } from '@storybook/react';
import FilterBar from './FilterBar';

const meta: Meta<typeof FilterBar> = {
  title: 'Components/Filter bar',
  component: FilterBar,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof FilterBar>;

export const Default: Story = {
  args: {},
};
