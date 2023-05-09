import type { Meta, StoryObj } from '@storybook/react';
import BroadcastList from './BroadcastList';
import { broadcastsData } from '../broadcast-list/broadcastsData';

const meta: Meta<typeof BroadcastList> = {
  title: 'Components/BroadcastList',
  component: BroadcastList,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'default',
      values: [{ name: 'default', value: '#100e19' }],
    },
  },
};

export default meta;
type Story = StoryObj<typeof BroadcastList>;

export const Base: Story = {
  args: {
    title: 'Трансляции',
    list: broadcastsData,
  },
};
