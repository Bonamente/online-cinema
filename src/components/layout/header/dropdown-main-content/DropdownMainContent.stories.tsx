import type { Meta, StoryObj } from '@storybook/react';
import DropdownMainContent from './DropdownMainContent';
import {
  movieGenresLinks,
  movieContries,
  movieYears,
  movieNew,
} from '@/components/links-list/links';

const meta: Meta<typeof DropdownMainContent> = {
  title: 'Components/DropdownMainContent',
  component: DropdownMainContent,
  tags: ['autodocs'],
  argTypes: {
    genresLinks: movieGenresLinks,
    contriesLinks: movieContries,
    yearsLinks: movieYears,
    newLinks: movieNew,
  },
  parameters: {
    backgrounds: {
      default: 'default',
      values: [{ name: 'default', value: '#1f1b2e' }],
    },
  },
};

export default meta;
type Story = StoryObj<typeof DropdownMainContent>;

export const Base: Story = {
  args: {
    genresLinks: movieGenresLinks,
    contriesLinks: movieContries,
    yearsLinks: movieYears,
    newLinks: movieNew,
  },
};
