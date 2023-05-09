import type { Meta, StoryObj } from '@storybook/react';

import TestButton from './TestButton';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof TestButton> = {
  title: 'Components/TestButton',
  component: TestButton,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TestButton>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Base: Story = {
  args: {},
};

export const Custom: Story = {
  args: {
    label: 'Test',
  },
};
