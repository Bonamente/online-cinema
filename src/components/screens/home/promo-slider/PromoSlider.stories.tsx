import type { Meta, StoryObj } from '@storybook/react';
import PromoSlider from './PromoSlider';

const meta: Meta<typeof PromoSlider> = {
  title: 'Screens/Home/PromoSlider',
  component: PromoSlider,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'default',
      values: [{ name: 'default', value: '#100e19' }],
    },
  },
};

export default meta;
type Story = StoryObj<typeof PromoSlider>;

export const Base: Story = {
  args: {},
};
