import type { Meta, StoryObj } from '@storybook/react';
import Message from './Message';
import MessageViewer from './MessageViewer';

const meta = {
  title: 'Components/Message',
  component: Message,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Message content',
    },
  },
} satisfies Meta<typeof Message>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'You create the world of the dream, you bring the subject into that dream, and they fill it with their subconscious.',
  },
};

export const Conversation: Story = {
  render: () => (
    <>
      <Message>You create the world of the dream, you bring the subject into that dream, and they fill it with their subconscious.</Message>
      <MessageViewer>How could I ever acquire enough detail to make them think that its reality?</MessageViewer>
      <Message>Well dreams, they feel real while we're in them, right? It's only when we wake up that we realize how things are actually strange.</Message>
      <Message>Let me ask you a question, you, you never really remember the beginning of a dream do you? You always wind up right in the middle of what's going on.</Message>
      <MessageViewer>I guess, yeah.</MessageViewer>
      <Message>So how did we end up here?</Message>
    </>
  ),
  args: {
    children: 'Message',
  },
};

export const ShortMessage: Story = {
  args: {
    children: 'Hi!',
  },
};
