import type { Meta, StoryObj } from '@storybook/react';
import AboutInfo from './AboutInfo';

const meta: Meta<typeof AboutInfo> = {
  title: 'Components/AboutInfo',
  component: AboutInfo,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'default',
      values: [{ name: 'default', value: '#100e19' }],
    },
  },
};

export default meta;
type Story = StoryObj<typeof AboutInfo>;

export const Base: Story = {
  args: {},
};
