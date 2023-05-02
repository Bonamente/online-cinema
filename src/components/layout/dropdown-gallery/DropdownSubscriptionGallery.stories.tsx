import type { Meta, StoryObj } from '@storybook/react';
import DropdownSubscriptionGallery from './DropdownSubscriptionGallery';

const meta: Meta<typeof DropdownSubscriptionGallery> = {
  title: 'Components/DropdownSubscriptionGallery',
  component: DropdownSubscriptionGallery,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'default',
      values: [{ name: 'default', value: '#100e19' }],
    },
  },
};

export default meta;
type Story = StoryObj<typeof DropdownSubscriptionGallery>;

export const Base: Story = {
  args: {},
};
