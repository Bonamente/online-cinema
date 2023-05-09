import type { Meta, StoryObj } from '@storybook/react';
import DropdownProfileContent from './DropdownProfileContent';

const meta: Meta<typeof DropdownProfileContent> = {
  title: 'Components/DropdownProfileContent',
  component: DropdownProfileContent,
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
type Story = StoryObj<typeof DropdownProfileContent>;

export const Base: Story = {
  args: {},
};
