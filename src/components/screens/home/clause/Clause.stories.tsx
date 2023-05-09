import type { Meta, StoryObj } from '@storybook/react';
import Clause from './Clause';

const meta: Meta<typeof Clause> = {
  title: 'Screens/Home/Clause',
  component: Clause,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'default',
      values: [{ name: 'default', value: '#100e19' }],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Clause>;

export const Base: Story = {
  args: {},
};
