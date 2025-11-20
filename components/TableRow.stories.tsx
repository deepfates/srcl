import type { Meta, StoryObj } from '@storybook/react';
import TableRow from './TableRow';

const meta = {
  title: 'Components/TableRow',
  component: TableRow,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TableRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Row content',
  },
};
