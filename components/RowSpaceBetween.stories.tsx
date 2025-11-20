import type { Meta, StoryObj } from '@storybook/react';
import RowSpaceBetween from './RowSpaceBetween';

const meta = {
  title: 'Components/RowSpaceBetween',
  component: RowSpaceBetween,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Row content with space-between layout',
    },
  },
} satisfies Meta<typeof RowSpaceBetween>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <RowSpaceBetween>
      <span>Left</span>
      <span>Right</span>
    </RowSpaceBetween>
  ),
};

export const WithThreeItems: Story = {
  render: () => (
    <RowSpaceBetween>
      <span>Start</span>
      <span>Middle</span>
      <span>End</span>
    </RowSpaceBetween>
  ),
};
