import type { Meta, StoryObj } from '@storybook/react';
import Dither from './Dither';

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
  args: {
    src: "https://upload.wikimedia.org/wikipedia/commons/0/0f/ChristopherAlexander2012_cropped.jpg"
  },
};
