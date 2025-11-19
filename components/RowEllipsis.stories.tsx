import type { Meta, StoryObj } from '@storybook/react';
import RowEllipsis from './RowEllipsis';

const meta = {
  title: 'Components/RowEllipsis',
  component: RowEllipsis,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Row content with ellipsis overflow',
    },
  },
} satisfies Meta<typeof RowEllipsis>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Short text',
  },
};

export const LongTextWithEllipsis: Story = {
  args: {
    children: 'This is a very long text that will be truncated with ellipsis when it exceeds the available width of the container',
  },
};
