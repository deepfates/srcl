import type { Meta, StoryObj } from '@storybook/react';
import DefaultMetaTags from './DefaultMetaTags';

const meta = {
  title: 'Components/DefaultMetaTags',
  component: DefaultMetaTags,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DefaultMetaTags>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
