import type { Meta, StoryObj } from '@storybook/react';
import BarProgress from './BarProgress';

const meta = {
  title: 'Components/BarProgress',
  component: BarProgress,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    intervalRate: {
      control: 'number',
      description: 'Animation interval rate in ms',
    },
    progress: {
      control: { type: 'range', min: 0, max: 100 },
      description: 'Progress percentage (0-100)',
    },
    fillChar: {
      control: 'text',
      description: 'Character to use for progress bar',
    },
  },
} satisfies Meta<typeof BarProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    progress: 50,
  },
};

export const Animated: Story = {
  args: {
    intervalRate: 100,
  },
};

export const CustomCharacter: Story = {
  args: {
    progress: 75,
    fillChar: '█',
  },
};

export const FullProgress: Story = {
  args: {
    progress: 100,
    fillChar: '▓',
  },
};
