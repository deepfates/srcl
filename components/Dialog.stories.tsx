import type { Meta, StoryObj } from '@storybook/react';
import Dialog from './Dialog';

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MultiLine: Story = {
  args: {
    title: 'FAREWELL',
    children: (
      <>
        There are unsaved changes.
        <br />
        Are you sure you want to start the new year?
      </>
    ),
  },
};

export const Simple: Story = {
  args: {
    title: 'CONFIRM',
    children: 'Are you sure you want to proceed?',
  },
};
