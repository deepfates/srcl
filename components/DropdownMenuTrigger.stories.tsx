import type { Meta, StoryObj } from '@storybook/react';
import DropdownMenuTrigger from './DropdownMenuTrigger';
import Button from './Button';

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
    children: <Button>Click me</Button>,
    items: [
      { body: 'Option 1' },
      { body: 'Option 2' },
      { body: 'Option 3' },
    ],
  },
};
