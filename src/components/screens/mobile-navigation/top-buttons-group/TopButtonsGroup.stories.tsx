import type { Meta, StoryObj } from '@storybook/react';
import MobileNavTopButtonsGroup from './TopButtonsGroup';

const meta: Meta<typeof MobileNavTopButtonsGroup> = {
  title: 'Screens/Mobile-navigation/MobileNavTopButtonsGroup',
  component: MobileNavTopButtonsGroup,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'default',
      values: [{ name: 'default', value: '#100e19' }],
    },
  },
};

export default meta;
type Story = StoryObj<typeof MobileNavTopButtonsGroup>;

export const Base: Story = {
  args: {},
};
