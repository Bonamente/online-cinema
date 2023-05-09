import type { Meta, StoryObj } from '@storybook/react';
import SubscriptionBlock from './SubscriptionBlock';

const meta: Meta<typeof SubscriptionBlock> = {
  title: 'Components/SubscriptionBlock',
  component: SubscriptionBlock,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'default',
      values: [{ name: 'default', value: '#100e19' }],
    },
  },
};

export default meta;
type Story = StoryObj<typeof SubscriptionBlock>;

export const Base: Story = {
  args: {},
};
