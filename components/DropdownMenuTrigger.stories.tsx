import type { Meta, StoryObj } from '@storybook/react';
import DropdownMenuTrigger from './DropdownMenuTrigger';

const meta = {
  title: 'Components/DropdownMenuTrigger',
  component: DropdownMenuTrigger,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DropdownMenuTrigger>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Click me',
  },
};
