import type { Meta, StoryObj } from '@storybook/react';
import BarLoader from './BarLoader';

const meta = {
  title: 'Components/BarLoader',
  component: BarLoader,
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
  },
} satisfies Meta<typeof BarLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Animated: Story = {
  args: {
    intervalRate: 100,
  },
};

export const Static50: Story = {
  args: {
    progress: 50,
  },
};

export const Static100: Story = {
  args: {
    progress: 100,
  },
};

export const FastAnimation: Story = {
  args: {
    intervalRate: 50,
  },
};
