import type { Meta, StoryObj } from '@storybook/react';
import TvDropdownPopular from './TvDropdownPopular';

const meta: Meta<typeof TvDropdownPopular> = {
  title: 'Components/TvDropdownPopular',
  component: TvDropdownPopular,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='w-3/4 pl-3'>
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
type Story = StoryObj<typeof TvDropdownPopular>;

export const Base: Story = {};
