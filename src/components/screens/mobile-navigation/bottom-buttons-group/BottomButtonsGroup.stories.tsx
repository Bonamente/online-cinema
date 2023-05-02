import type { Meta, StoryObj } from '@storybook/react';
import MobileNavBottomButtonsGroup from './BottomButtonsGroup';

const meta: Meta<typeof MobileNavBottomButtonsGroup> = {
  title: 'Screens/Mobile-navigation/MobileNavBottomButtonsGroup',
  component: MobileNavBottomButtonsGroup,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'default',
      values: [{ name: 'default', value: '#100e19' }],
    },
  },
};

export default meta;
type Story = StoryObj<typeof MobileNavBottomButtonsGroup>;

export const Base: Story = {
  args: {},
};
