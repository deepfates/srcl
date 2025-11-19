import type { Meta, StoryObj } from '@storybook/react';
import Block from './Block';

const meta = {
  title: 'Components/Block',
  component: Block,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Content to display inline',
    },
  },
} satisfies Meta<typeof Block>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Inline block content',
  },
};

export const MultipleBlocks: Story = {
  render: () => (
    <>
      <Block>First block</Block>
      <Block>Second block</Block>
      <Block>Third block</Block>
    </>
  ),
};
