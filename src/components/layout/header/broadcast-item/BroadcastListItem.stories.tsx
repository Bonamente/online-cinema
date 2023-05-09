import type { Meta, StoryObj } from '@storybook/react';
import BroadcastListItem from './BroadcastListItem';
import { broadcastsData } from '../broadcast-list/broadcastsData';

const meta: Meta<typeof BroadcastListItem> = {
  title: 'Components/BroadcastListItem',
  component: BroadcastListItem,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'default',
      values: [{ name: 'default', value: '#100e19' }],
    },
  },
};

export default meta;
type Story = StoryObj<typeof BroadcastListItem>;

const { title, date, type, imgUrl } = broadcastsData[0];

export const Base: Story = {
  args: {
    title,
    date,
    type,
    imgUrl,
  },
};
