import type { Meta, StoryObj } from '@storybook/react';
import RatingsGroup from './RatingsGroup';

const meta: Meta<typeof RatingsGroup> = {
  title: 'Screens/Mobile-navigation/RatingsGroup',
  component: RatingsGroup,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'default',
      values: [{ name: 'default', value: '#100e19' }],
    },
  },
};

export default meta;
type Story = StoryObj<typeof RatingsGroup>;

export const Base: Story = {};
