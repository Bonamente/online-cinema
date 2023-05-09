import type { Meta, StoryObj } from '@storybook/react';
import DropdownNotificationContent from './DropdownNotificationContent';

const meta: Meta<typeof DropdownNotificationContent> = {
  title: 'Components/DropdownNotificationContent',
  component: DropdownNotificationContent,
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
type Story = StoryObj<typeof DropdownNotificationContent>;

export const Base: Story = {
  args: {},
};
