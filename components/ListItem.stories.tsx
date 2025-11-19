import type { Meta, StoryObj } from '@storybook/react';
import ListItem from './ListItem';

const meta = {
  title: 'Components/ListItem',
  component: ListItem,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'List item content',
  },
};

export const RomanHistory: Story = {
  render: () => (
    <ol>
      <ListItem>Year of the Four Emperors</ListItem>
      <ListItem>Flavian dynasty</ListItem>
      <ListItem>Nerva–Antonine dynasty</ListItem>
      <ol>
        <ListItem>Marcus Cocceius Nerva</ListItem>
        <ListItem>Marcus Ulpius Traianus</ListItem>
        <ListItem>Publius Aelius Hadrianus</ListItem>
        <ListItem>Titus Aelius Hadrianus Antoninus Pius</ListItem>
        <ListItem>Marcus Aurelius Antoninus</ListItem>
        <ol>
          <ListItem>Hellenistic philosophy</ListItem>
          <ListItem>Western philosophy</ListItem>
          <ListItem>Stoicism</ListItem>
        </ol>
      </ol>
      <ListItem>Year of the Five Emperors</ListItem>
    </ol>
  ),
  args: {
    children: 'Item',
  },
};

export const ChineseStrategy: Story = {
  render: () => (
    <ul>
      <ListItem>Book of Changes (The I Ching)</ListItem>
      <ListItem>The Analects</ListItem>
      <ListItem>Taoism</ListItem>
      <ListItem>Thirty-Six Stratagems</ListItem>
      <ul>
        <ListItem>Deceive the heavens to cross the sea</ListItem>
        <ListItem>Make a sound in the east, then strike in the west</ListItem>
        <ListItem>Create something from nothing</ListItem>
      </ul>
      <ListItem>The Art of War</ListItem>
      <ListItem>Wuzi</ListItem>
      <ListItem>Six Secret Teachings</ListItem>
    </ul>
  ),
  args: {
    children: 'Item',
  },
};

export const Artists: Story = {
  render: () => (
    <ol>
      <ListItem>
        <a href="https://www.tumblr.com/tagged/hiroo%20isono" target="_blank">
          Hirō Isono
        </a>
      </ListItem>
      <ListItem>
        <a href="https://www.tumblr.com/tagged/rebecca%20guay" target="_blank">
          Rebecca Guay
        </a>
      </ListItem>
      <ListItem>
        <a href="https://www.tumblr.com/tagged/claude%20monet" target="_blank">
          Oscar-Claude Monet
        </a>
      </ListItem>
      <ol>
        <ListItem>
          <a href="https://en.wikipedia.org/wiki/Impressionism" target="_blank">
            Impressionism
          </a>
        </ListItem>
        <ListItem>
          <a href="https://en.wikipedia.org/wiki/Modernism" target="_blank">
            Modernism
          </a>
        </ListItem>
        <ListItem>
          <a href="https://en.wikipedia.org/wiki/En_plein_air" target="_blank">
            Painting Outdoors
          </a>
        </ListItem>
      </ol>
    </ol>
  ),
  args: {
    children: 'Item',
  },
};
