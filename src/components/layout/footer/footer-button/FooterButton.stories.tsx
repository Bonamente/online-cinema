import type { Meta, StoryObj } from '@storybook/react';
import FooterButton from './FooterButton';
import { EnvelopeIcon } from '@heroicons/react/20/solid';
import { NewspaperIcon } from '@heroicons/react/24/solid';

const meta: Meta<typeof FooterButton> = {
  title: 'Components/FooterButton',
  component: FooterButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FooterButton>;

export const Small: Story = {
  render: () => (
    <FooterButton size='small'>
      <EnvelopeIcon className='w-4 h-4 stroke-[2.5]' />
    </FooterButton>
  ),
};

export const Middle: Story = {
  render: () => <FooterButton size='middle'>Some text</FooterButton>,
};

export const Large: Story = {
  render: () => (
    <FooterButton size='large'>
      <NewspaperIcon className='w-5 h-5 mx-3 text-white/[.48]' />
      <span>Активация сертификата</span>
    </FooterButton>
  ),
};
