import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text displayed above the input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    isBlink: {
      control: 'boolean',
      description: 'Whether the caret should blink',
    },
    caretChars: {
      control: 'text',
      description: 'Custom characters to display as the caret',
    },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number'],
      description: 'Input type',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'USERNAME',
    name: 'username',
  },
};

export const WithPlaceholder: Story = {
  args: {
    label: 'EMAIL',
    placeholder: 'Enter your email address',
    name: 'email',
  },
};

export const Password: Story = {
  args: {
    label: 'PASSWORD',
    type: 'password',
    name: 'password',
  },
};

export const WithBlinkingCaret: Story = {
  args: {
    label: 'CARET BLINK',
    isBlink: true,
    name: 'blink',
  },
};

export const CustomCaret: Story = {
  args: {
    label: 'CUSTOM CARET',
    caretChars: '(✿﹏●)',
    isBlink: true,
    name: 'custom',
  },
};

export const NoLabel: Story = {
  args: {
    placeholder: 'Input without label',
    name: 'nolabel',
  },
};

export const MultipleInputs: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Input label="FIRST NAME" name="firstname" />
      <Input label="LAST NAME" name="lastname" />
      <Input label="EMAIL" type="email" name="email" />
    </div>
  ),
};
