import type { Meta, StoryObj } from '@storybook/react';
import FooterTab from './FooterTab';
import { HomeIcon } from '@heroicons/react/24/outline';

const meta: Meta<typeof FooterTab> = {
  title: 'Components/FooterTab',
  component: FooterTab,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='footer-tab-item'>
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
type Story = StoryObj<typeof FooterTab>;

const InnerContent = () => (
  <>
    <HomeIcon className='w-[20px] h-[20px] stroke-[3]' />
    <span className='mt-[4px]'>Мой Иви</span>
  </>
);

export const Active: Story = {
  render: () => (
    <FooterTab isActive>
      <InnerContent />
    </FooterTab>
  ),
};

export const Inactive: Story = {
  render: () => (
    <FooterTab isActive={false}>
      <InnerContent />
    </FooterTab>
  ),
};
