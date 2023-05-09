import type { Meta, StoryObj } from '@storybook/react';
import DropdownTvContent from './DropdownTvContent';
import { tvLinks } from '@/components/links-list/links';

const meta: Meta<typeof DropdownTvContent> = {
  title: 'Components/DropdownTvContent',
  component: DropdownTvContent,
  tags: ['autodocs'],
  argTypes: {
    tvLinks,
  },
  parameters: {
    backgrounds: {
      default: 'default',
      values: [{ name: 'default', value: '#1f1b2e' }],
    },
  },
};

export default meta;
type Story = StoryObj<typeof DropdownTvContent>;

export const Base: Story = {
  args: {
    tvLinks,
  },
};
