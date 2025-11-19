import type { Meta, StoryObj } from '@storybook/react';
import MatrixLoader from './MatrixLoader';

const meta = {
  title: 'Components/MatrixLoader',
  component: MatrixLoader,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    rows: {
      control: 'number',
      description: 'Number of rows',
    },
    direction: {
      control: 'select',
      options: ['top-to-bottom', 'left-to-right'],
      description: 'Animation direction',
    },
    mode: {
      control: 'select',
      options: ['greek', 'katakana'],
      description: 'Character set mode',
    },
  },
} satisfies Meta<typeof MatrixLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rows: 25,
    direction: 'top-to-bottom',
    mode: 'greek',
  },
};

export const Katakana: Story = {
  args: {
    rows: 25,
    direction: 'top-to-bottom',
    mode: 'katakana',
  },
};

export const LeftToRight: Story = {
  args: {
    rows: 25,
    direction: 'left-to-right',
    mode: 'greek',
  },
};
