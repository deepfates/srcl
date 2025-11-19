import type { Meta, StoryObj } from '@storybook/react';
import Dither from './dither';

const meta = {
  title: 'Components/Dither',
  component: Dither,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dither>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
