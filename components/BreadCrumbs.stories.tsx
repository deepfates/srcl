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

export const RomanHistory: Story = {
  args: {
    items: [
      { name: '161 AD', url: 'https://en.wikipedia.org/wiki/161' },
      { name: 'Nerva–Antonine dynasty', url: 'https://en.wikipedia.org/wiki/Nerva–Antonine_dynasty' },
      { name: 'Marcus Aurelius Antoninus', url: 'https://en.wikipedia.org/wiki/Marcus_Aurelius' },
      { name: 'The Meditations', url: 'https://classics.mit.edu/Antoninus/meditations.html' },
    ],
  },
};

export const Literature: Story = {
  args: {
    items: [
      { name: 'Orthos Logos', url: 'https://orthoslogos.fr/' },
      { name: 'Littérature', url: 'https://orthoslogos.fr/litterature' },
      { name: 'Discours', url: 'https://orthoslogos.fr/litterature/discours/' },
      { name: 'Patrick Geddes', url: 'https://en.wikipedia.org/wiki/Patrick_Geddes' },
    ],
  },
};

export const BlogPost: Story = {
  args: {
    items: [
      { name: 'Christopher Alexander', url: 'https://www.youtube.com/watch?v=98LdFA-_zfA' },
      { name: 'The Nature of Order', url: 'http://www.natureoforder.com/overview.htm' },
      { name: 'Book 1: The Phenomenon of Life' },
      { name: 'A World Picture' },
    ],
  },
};
