import type { Meta, StoryObj } from '@storybook/react';
import MessageViewer from './MessageViewer';

const meta = {
  title: 'Components/MessageViewer',
  component: MessageViewer,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MessageViewer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Message viewer content',
  },
};
