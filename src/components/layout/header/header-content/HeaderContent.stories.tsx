import type { Meta, StoryObj } from '@storybook/react';
import HeaderContent from './HeaderContent';

const meta: Meta<typeof HeaderContent> = {
  title: 'Components/HeaderContent',
  component: HeaderContent,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    backgrounds: {
      default: 'default',
      values: [{ name: 'default', value: '#100e19' }],
    },
  },
};

export default meta;
type Story = StoryObj<typeof HeaderContent>;

export const Base: Story = {
  args: {},
};
