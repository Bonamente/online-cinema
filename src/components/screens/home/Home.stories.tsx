import type { Meta, StoryObj } from '@storybook/react';
import Home from './Home';

const meta: Meta<typeof Home> = {
  title: 'Screens/Home/Home',
  component: Home,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'default',
      values: [{ name: 'default', value: '#100e19' }],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Home>;

// REFACTOR
const stubData = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
];

export const Base: Story = {
  args: {
    comedyMovies: stubData,
    thrillerMovies: stubData,
    actionMovies: stubData,
  },
};
