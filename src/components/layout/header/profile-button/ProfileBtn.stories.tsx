import type { Meta, StoryObj } from '@storybook/react';
import ProfileBtn from './ProfileBtn';

const meta: Meta<typeof ProfileBtn> = {
  title: 'Components/ProfileBtn',
  component: ProfileBtn,
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
type Story = StoryObj<typeof ProfileBtn>;

export const Base: Story = {
  args: {},
};
