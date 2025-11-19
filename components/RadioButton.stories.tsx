import type { Meta, StoryObj } from '@storybook/react';
import RadioButton from './RadioButton';

const meta = {
  title: 'Components/RadioButton',
  component: RadioButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Name attribute for the radio button group',
    },
    value: {
      control: 'text',
      description: 'Value of this radio button',
    },
    selected: {
      control: 'boolean',
      description: 'Whether this radio button is selected',
    },
    children: {
      control: 'text',
      description: 'Label text',
    },
  },
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'option',
    value: 'option1',
    children: 'Option 1',
  },
};

export const Selected: Story = {
  args: {
    name: 'option',
    value: 'option1',
    selected: true,
    children: 'Selected Option',
  },
};

export const Group: Story = {
  args: {
    name: 'group',
    value: '1',
    selected: true,
    children: 'Option 1',
  },
  render: () => (
    <>
      <RadioButton name="group" value="1" selected onSelect={(v) => console.log(v)}>
        Option 1
      </RadioButton>
      <RadioButton name="group" value="2" onSelect={(v) => console.log(v)}>
        Option 2
      </RadioButton>
      <RadioButton name="group" value="3" onSelect={(v) => console.log(v)}>
        Option 3
      </RadioButton>
    </>
  ),
};
