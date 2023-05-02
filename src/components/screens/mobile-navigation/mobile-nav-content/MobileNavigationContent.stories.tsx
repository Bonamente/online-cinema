import type { Meta, StoryObj } from '@storybook/react';
import MobileNavigationContent from './MobileNavigationContent';

const meta: Meta<typeof MobileNavigationContent> = {
  title: 'Screens/Mobile-navigation/MobileNavigationContent',
  component: MobileNavigationContent,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='page-container'>
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
type Story = StoryObj<typeof MobileNavigationContent>;

export const Base: Story = {};
