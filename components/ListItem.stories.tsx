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


