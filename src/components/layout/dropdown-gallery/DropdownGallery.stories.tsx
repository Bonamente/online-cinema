import type { Meta, StoryObj } from '@storybook/react';
import DropdownGallery from './DropdownGallery';

const meta: Meta<typeof DropdownGallery> = {
  title: 'Components/DropdownGallery',
  component: DropdownGallery,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DropdownGallery>;

export const Base: Story = {
  args: {},
};
