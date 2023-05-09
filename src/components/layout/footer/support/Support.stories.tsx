import type { Meta, StoryObj } from '@storybook/react';
import Support from './Support';

const meta: Meta<typeof Support> = {
  title: 'Components/Support',
  component: Support,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'default',
      values: [{ name: 'default', value: '#100e19' }],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Support>;

export const Base: Story = {
  args: {},
};
