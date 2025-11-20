import type { Meta, StoryObj } from '@storybook/react';
import TableColumn from './TableColumn';

const meta = {
  title: 'Components/TableColumn',
  component: TableColumn,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TableColumn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Column content',
  },
};
