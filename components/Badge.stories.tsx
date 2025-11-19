import type { Meta, StoryObj } from '@storybook/react';
import Badge from './Badge';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Badge content',
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Example',
  },
};

export const Number: Story = {
  args: {
    children: '42',
  },
};

export const Version: Story = {
  args: {
    children: 'v1.1.7',
  },
};

export const Status: Story = {
  args: {
    children: 'NEW',
  },
};

export const LongerText: Story = {
  args: {
    children: 'FEATURED',
  },
};
