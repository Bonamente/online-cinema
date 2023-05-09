import type { Meta, StoryObj } from '@storybook/react';
import SubscriptionBtn from './SubscriptionBtn';

const meta: Meta<typeof SubscriptionBtn> = {
  title: 'Components/SubscriptionBtn',
  component: SubscriptionBtn,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    backgrounds: {
      default: 'default',
      values: [{ name: 'default', value: '#100e19' }],
    },
  },
};

export default meta;
type Story = StoryObj<typeof SubscriptionBtn>;

export const Gradient: Story = {
  args: {
    text: 'Оплатить подписку',
    bgColor: 'gradient',
  },
};

export const Solid: Story = {
  args: {
    text: 'Смотреть 30 дней за 1 ₽',
    bgColor: 'solid',
  },
};
