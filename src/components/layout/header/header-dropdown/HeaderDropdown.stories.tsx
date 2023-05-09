import type { Meta, StoryObj } from '@storybook/react';
import HeaderDropdown from './HeaderDropdown';

const meta: Meta<typeof HeaderDropdown> = {
  title: 'Components/HeaderDropdown',
  component: HeaderDropdown,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='relative w-full'>
        <Story />
      </div>
    ),
  ],
  parameters: {
    backgrounds: {
      default: 'default',
      values: [{ name: 'default', value: '#100e19' }],
    },
  },
};

export default meta;
type Story = StoryObj<typeof HeaderDropdown>;

export const Base: Story = {
  args: {
    linkType: 'movies',
  },
};
