import type { Meta, StoryObj } from '@storybook/react';
import DropdownSubscriptionContent from './DropdownSubscriptionContent';

const meta: Meta<typeof DropdownSubscriptionContent> = {
  title: 'Components/DropdownSubscriptionContent',
  component: DropdownSubscriptionContent,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    backgrounds: {
      default: 'default',
      values: [{ name: 'default', value: '#1f1b2e' }],
    },
  },
};

export default meta;
type Story = StoryObj<typeof DropdownSubscriptionContent>;

export const Base: Story = {
  args: {},
};
