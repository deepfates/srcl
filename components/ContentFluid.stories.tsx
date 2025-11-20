import type { Meta, StoryObj } from '@storybook/react';
import ContentFluid from './ContentFluid';

const meta = {
  title: 'Components/ContentFluid',
  component: ContentFluid,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Fluid content that adapts to container',
    },
  },
} satisfies Meta<typeof ContentFluid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is fluid content that adapts to its container width',
  },
};
