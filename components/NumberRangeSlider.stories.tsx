import type { Meta, StoryObj } from '@storybook/react';
import NumberRangeSlider from './NumberRangeSlider';

const meta = {
  title: 'Components/NumberRangeSlider',
  component: NumberRangeSlider,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: 'number',
      description: 'Default value of the slider',
    },
    min: {
      control: 'number',
      description: 'Minimum value',
    },
    max: {
      control: 'number',
      description: 'Maximum value',
    },
    step: {
      control: 'number',
      description: 'Step increment',
    },
  },
} satisfies Meta<typeof NumberRangeSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const SmallRange: Story = {
  args: {
    min: 0,
    max: 100,
    defaultValue: 50,
    step: 1,
  },
};

export const LargeRange: Story = {
  args: {
    min: 0,
    max: 10000,
    defaultValue: 2500,
    step: 100,
  },
};

export const WithSteps: Story = {
  args: {
    min: 0,
    max: 1000,
    defaultValue: 500,
    step: 50,
  },
};
