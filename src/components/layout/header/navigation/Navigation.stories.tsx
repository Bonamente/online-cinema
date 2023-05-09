import type { Meta, StoryObj } from '@storybook/react';
import Navigation from './Navigation';

const meta: Meta<typeof Navigation> = {
  title: 'Components/Navigation',
  component: Navigation,
  tags: ['autodocs'],
  argTypes: {
    handleHovering: () => {},
    handleClick: () => {},
  },
  parameters: {
    backgrounds: {
      default: 'default',
      values: [{ name: 'default', value: '#1f1b2e' }],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Navigation>;

export const Base: Story = {
  args: {},
};
