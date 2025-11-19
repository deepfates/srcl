import type { Meta, StoryObj } from '@storybook/react';
import BlockLoader from './BlockLoader';

const meta = {
  title: 'Components/BlockLoader',
  component: BlockLoader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    mode: {
      control: { type: 'select' },
      options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      description: 'Animation mode (0-10)',
    },
  },
} satisfies Meta<typeof BlockLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Mode0: Story = {
  args: { mode: 0 },
};

export const Mode1: Story = {
  args: { mode: 1 },
};

export const Mode2: Story = {
  args: { mode: 2 },
};

export const Mode3: Story = {
  args: { mode: 3 },
};

export const Mode4: Story = {
  args: { mode: 4 },
};
