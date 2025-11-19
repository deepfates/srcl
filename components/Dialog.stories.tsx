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

export const UnsavedChanges: Story = {
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

export const SessionTimeout: Story = {
  args: {
    title: 'GOODBYE',
    children: (
      <>
        The 2024 session is nearly out of time.
        <br />
        Save progress and load 2025?
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
