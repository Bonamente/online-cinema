import type { Meta, StoryObj } from '@storybook/react';
import TeaserList from './TeaserList';

const meta: Meta<typeof TeaserList> = {
  title: 'Screens/Home/TeaserList',
  component: TeaserList,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'default',
      values: [{ name: 'default', value: '#100e19' }],
    },
  },
};

export default meta;
type Story = StoryObj<typeof TeaserList>;

export const Base: Story = {
  args: {},
};
