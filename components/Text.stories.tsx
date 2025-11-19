import type { Meta, StoryObj } from '@storybook/react';
import Text from './Text';

const meta = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Text content',
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is a text paragraph',
  },
};

export const LongText: Story = {
  args: {
    children: 'This is a longer text paragraph that demonstrates how the Text component handles multiple lines and wrapping behavior when the content exceeds the available width.',
  },
};

export const WithCustomStyle: Story = {
  args: {
    children: 'Styled text',
    style: { color: 'var(--theme-accent)' },
  },
};
