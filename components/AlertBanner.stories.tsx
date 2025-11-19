import type { Meta, StoryObj } from '@storybook/react';
import AlertBanner from './AlertBanner';

const meta = {
  title: 'Components/AlertBanner',
  component: AlertBanner,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Banner content',
    },
  },
} satisfies Meta<typeof AlertBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is an alert banner message',
  },
};

export const LongMessage: Story = {
  args: {
    children: 'This is a longer alert banner message that contains more detailed information for the user to read and understand.',
  },
};

export const WithCustomStyle: Story = {
  args: {
    children: 'Styled alert',
    style: { padding: '2rem' },
  },
};
