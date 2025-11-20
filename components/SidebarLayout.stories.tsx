import type { Meta, StoryObj } from '@storybook/react';
import SidebarLayout from './SidebarLayout';

const meta = {
  title: 'Components/SidebarLayout',
  component: SidebarLayout,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SidebarLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Sidebar layout content',
  },
};
