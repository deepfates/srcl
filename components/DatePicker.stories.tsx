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

export const December2012: Story = {
  args: {
    year: 2012,
    month: 12,
  },
};

export const December2024: Story = {
  args: {
    year: 2024,
    month: 12,
  },
};

export const January2025: Story = {
  args: {
    year: 2025,
    month: 1,
  },
};

export const FebruaryLeapYear: Story = {
  args: {
    year: 2024,
    month: 2,
  },
};
