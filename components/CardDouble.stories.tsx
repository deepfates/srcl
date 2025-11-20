import type { Meta, StoryObj } from '@storybook/react';
import CardDouble from './CardDouble';

const meta = {
  title: 'Components/CardDouble',
  component: CardDouble,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardDouble>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    children: 'Card content goes here',
  },
};
