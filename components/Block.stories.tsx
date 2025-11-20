import type { Meta, StoryObj } from '@storybook/react';
import Block from './Block';

const meta = {
  title: 'Components/Block',
  component: Block,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Block>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};

export const MultipleBlocks: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column'}}>
      <div><Block/>First block</div>
      <div>Second block<Block/>
      </div>
      <div>Third <Block/>block</div>
    </div>
  ),
};
