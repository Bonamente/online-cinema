import type { Meta, StoryObj } from '@storybook/react';

import LinksList from './LinksList';
import { movieYears } from './links';

const meta: Meta<typeof LinksList> = {
  title: 'Components/LinksList',
  component: LinksList,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'initial',
      values: [{ name: 'initial', value: '#100e19' }],
    },
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof LinksList>;

export const Row: Story = {
  args: {
    direction: 'row',
    links: movieYears,
  },
};

export const Column: Story = {
  args: {
    direction: 'column',
    links: movieYears,
  },
};
