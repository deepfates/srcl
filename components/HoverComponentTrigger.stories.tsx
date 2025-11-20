import type { Meta, StoryObj } from '@storybook/react';
import HoverComponentTrigger from './HoverComponentTrigger';
import Button from './Button';

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

export const WithTooltip: Story = {
  args: {
    children: <Button>Hover over me</Button>,
    text: 'This is a helpful tooltip!',
    component: 'tooltip',
  },
};

export const WithPopover: Story = {
  args: {
    children: <Button>Hover for popover</Button>,
    text: 'This is a popover with more detailed information.',
    component: 'popover',
  },
};
