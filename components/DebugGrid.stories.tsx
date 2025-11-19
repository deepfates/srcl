import type { Meta, StoryObj } from '@storybook/react';
import DebugGrid from './DebugGrid';

const meta = {
  title: 'Components/DebugGrid',
  component: DebugGrid,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DebugGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
