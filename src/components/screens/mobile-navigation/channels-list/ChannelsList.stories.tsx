import type { Meta, StoryObj } from '@storybook/react';
import ChannelsList from './ChannelsList';
import { tvSportLinks } from '@/components/links-list/links';

const meta: Meta<typeof ChannelsList> = {
  title: 'Screens/Mobile-navigation/ChannelsList',
  component: ChannelsList,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'default',
      values: [{ name: 'default', value: '#100e19' }],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ChannelsList>;

export const Base: Story = {
  args: {
    title: 'Спортивные каналы',
    links: tvSportLinks,
  },
};
