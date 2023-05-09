import type { Meta, StoryObj } from '@storybook/react';
import FooterContent from './FooterContent';

const meta: Meta<typeof FooterContent> = {
  title: 'Components/FooterContent',
  component: FooterContent,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'default',
      values: [{ name: 'default', value: '#100e19' }],
    },
  },
};

export default meta;
type Story = StoryObj<typeof FooterContent>;

export const Base: Story = {
  args: {},
};
