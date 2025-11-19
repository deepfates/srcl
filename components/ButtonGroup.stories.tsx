import type { Meta, StoryObj } from '@storybook/react';
import ButtonGroup from './ButtonGroup';

const meta = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FontSizes: Story = {
  args: {
    items: [
      { body: '16 PX', selected: true },
      { body: '32 PX' },
      { body: '42 PX' },
    ],
  },
};

export const FullWidth: Story = {
  args: {
    isFull: true,
    items: [
      { body: '16 PX', selected: true },
      { body: '32 PX' },
      { body: '42 PX' },
    ],
  },
};

export const Actions: Story = {
  args: {
    isFull: true,
    items: [
      { body: 'FAVORITE' },
      { body: 'DONATE' },
      { body: 'LEARN MORE' },
    ],
  },
};

export const ManyButtons: Story = {
  args: {
    items: [
      { body: 'One' },
      { body: 'Two' },
      { body: 'Three' },
      { body: 'Four' },
      { body: 'Five' },
    ],
  },
};
