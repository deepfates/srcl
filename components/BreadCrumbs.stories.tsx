import type { Meta, StoryObj } from '@storybook/react';
import BreadCrumbs from './BreadCrumbs';

const meta = {
  title: 'Components/BreadCrumbs',
  component: BreadCrumbs,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BreadCrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Philosophy: Story = {
  args: {
    items: [
      { name: 'Philosophical Taoism', url: 'https://en.wikipedia.org/wiki/Taoist_philosophy' },
      { name: 'Ursula K. Le Guin', url: 'https://en.wikipedia.org/wiki/Ursula_K._Le_Guin' },
      { name: 'The Lathe of Heaven', url: 'https://en.wikipedia.org/wiki/The_Lathe_of_Heaven' },
    ],
  },
};
