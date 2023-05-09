import type { Meta, StoryObj } from '@storybook/react';
import LangSwitcher from './LangSwitcher';

const meta: Meta<typeof LangSwitcher> = {
  title: 'Components/LangSwitcher',
  component: LangSwitcher,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
  parameters: {
    backgrounds: {
      default: 'default',
      values: [{ name: 'default', value: '#100e19' }],
    },
  },
};

export default meta;
type Story = StoryObj<typeof LangSwitcher>;

export const Base: Story = {
  args: {},
};
