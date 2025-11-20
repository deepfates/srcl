import type { Meta, StoryObj } from '@storybook/react';
import Select from './Select';

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Name attribute for the select',
    },
    options: {
      description: 'Array of option values',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when nothing is selected',
    },
    defaultValue: {
      control: 'text',
      description: 'Default selected value',
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'favorite_dinosaur',
    options: ['T-Rex', 'Triceratops', 'Velociraptor', 'Stegosaurus', 'Brachiosaurus', 'Diplodocus', 'Spinosaurus', 'Allosaurus', 'Ankylosaurus', 'Iguanodon', 'Parasaurolophus', 'Pachycephalosaurus', 'Pteranodon', 'Apatosaurus', 'Archaeopteryx', 'Oviraptor', 'Gallimimus', 'Ceratosaurus', 'Deinonychus', 'Megalosaurus'],
    defaultValue: 'T-Rex',
    placeholder: 'Select your favorite dinosaur...',
  },
};

export const WithPlaceholder: Story = {
  args: {
    name: 'select-placeholder',
    options: ['Red', 'Green', 'Blue', 'Yellow'],
    placeholder: 'Choose a color...',
  },
};
