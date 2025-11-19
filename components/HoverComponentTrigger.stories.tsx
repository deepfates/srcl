import type { Meta, StoryObj } from '@storybook/react';
import HoverComponentTrigger from './HoverComponentTrigger';

const meta = {
  title: 'Components/HoverComponentTrigger',
  component: HoverComponentTrigger,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HoverComponentTrigger>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Hover over me',
  },
};
