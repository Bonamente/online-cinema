import type { Meta, StoryObj } from '@storybook/react';
import NotificationBtn from './NotificationBtn';

const meta: Meta<typeof NotificationBtn> = {
  title: 'Components/NotificationBtn',
  component: NotificationBtn,
  tags: ['autodocs'],
  argTypes: {
    handleHovering: () => {},
    handleClick: () => {},
  },
  parameters: {
    backgrounds: {
      default: 'default',
      values: [{ name: 'default', value: '#100e19' }],
    },
  },
};

export default meta;
type Story = StoryObj<typeof NotificationBtn>;

export const Base: Story = {
  args: {},
};
