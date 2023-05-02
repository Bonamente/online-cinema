import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import DropdownBtn from './DropdownBtn';

const meta: Meta<typeof DropdownBtn> = {
  title: 'Components/DropdownBtn',
  component: DropdownBtn,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'default',
      values: [{ name: 'default', value: '#100e19' }],
    },
  },
};

export default meta;
type Story = StoryObj<typeof DropdownBtn>;

const ButtonWithHooks = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownBtn isDropdownOpen={isOpen} handleClick={onClick}>
      Some text
    </DropdownBtn>
  );
};

export const Base: Story = {
  render: () => <ButtonWithHooks />,
};
