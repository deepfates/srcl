import type { Meta, StoryObj } from '@storybook/react';
import Indent from './Indent';

const meta = {
  title: 'Components/Indent',
  component: Indent,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Indented content',
    },
  },
} satisfies Meta<typeof Indent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This content is indented',
  },
};

export const NestedIndent: Story = {
  render: () => (
    <>
      <div>Level 0</div>
      <Indent>
        <div>Level 1</div>
        <Indent>
          <div>Level 2</div>
        </Indent>
      </Indent>
    </>
  ),
};
