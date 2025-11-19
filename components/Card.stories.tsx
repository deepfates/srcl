import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Card title',
    },
    mode: {
      control: 'select',
      options: [undefined, 'left', 'right'],
      description: 'Alignment mode',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'C',
    children: 'To seek the timeless way we must first know the quality without a name. There is a central quality which is the root criterion of life and spirit in a man, a town, a building, or a wilderness. This quality is objective and precise, but it cannot be named.',
  },
};

export const LeftAligned: Story = {
  args: {
    title: 'Left-A',
    mode: 'left',
    children: 'Card content with left alignment',
  },
};

export const RightAligned: Story = {
  args: {
    title: 'Right-B',
    mode: 'right',
    children: 'Card content with right alignment',
  },
};

export const Nested: Story = {
  render: () => (
    <Card title="Left-A" mode="left">
      <Card title="Right-B" mode="right">
        <Card title="C">
          We are searching for some kind of harmony between two intangibles: a form which we have not yet designed and a context which we cannot properly describe.
        </Card>
      </Card>
    </Card>
  ),
  args: {
    title: 'Outer',
    children: 'Content',
  },
};

export const ChristopherAlexander: Story = {
  args: {
    title: 'THE TIMELESS WAY',
    children: 'The structure of life I have described in buildings - the structure which I believe to be objective - is deeply and inextricably connected with the human person, and with the innermost nature of human feeling.',
  },
};
