import type { Meta, StoryObj } from '@storybook/react';
import MobileFooter from './MobileFooter';

const meta: Meta<typeof MobileFooter> = {
  title: 'Components/MobileFooter',
  component: MobileFooter,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'default',
      values: [{ name: 'default', value: '#100e19' }],
    },
  },
};

export default meta;
type Story = StoryObj<typeof MobileFooter>;

export const Base: Story = {
  args: {},
};
