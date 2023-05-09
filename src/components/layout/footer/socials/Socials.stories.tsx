import type { Meta, StoryObj } from '@storybook/react';
import Socials from './Socials';
import { socialsLinks } from '@/components/links-list/links';

const meta: Meta<typeof Socials> = {
  title: 'Components/Socials',
  component: Socials,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'default',
      values: [{ name: 'default', value: '#100e19' }],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Socials>;

export const Base: Story = {
  args: {
    links: socialsLinks,
  },
};
