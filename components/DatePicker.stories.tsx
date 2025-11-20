import type { Meta, StoryObj } from '@storybook/react';
import DatePicker from './DatePicker';

const meta = {
  title: 'Components/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    year: {
      control: 'number',
      description: 'Initial year to display',
    },
    month: {
      control: { type: 'number', min: 1, max: 12 },
      description: 'Initial month to display (1-12)',
    },
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CurrentMonth: Story = {
  args: {},
};

export const FebruaryLeapYear: Story = {
  args: {
    year: 2024,
    month: 2,
  },
};
