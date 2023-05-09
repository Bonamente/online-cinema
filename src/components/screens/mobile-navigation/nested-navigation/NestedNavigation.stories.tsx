import type { Meta, StoryObj } from '@storybook/react';
import NestedNavigation from './NestedNavigation';

const meta: Meta<typeof NestedNavigation> = {
  title: 'Screens/Mobile-navigation/NestedNavigation',
  component: NestedNavigation,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'default',
      values: [{ name: 'default', value: '#100e19' }],
    },
  },
};

export default meta;
type Story = StoryObj<typeof NestedNavigation>;

export const Base: Story = {};
