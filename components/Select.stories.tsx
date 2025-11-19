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

export const Dinosaurs: Story = {
  args: {
    name: 'favorite_dinosaur',
    options: ['T-Rex', 'Triceratops', 'Velociraptor', 'Stegosaurus', 'Brachiosaurus', 'Diplodocus', 'Spinosaurus', 'Allosaurus', 'Ankylosaurus', 'Iguanodon', 'Parasaurolophus', 'Pachycephalosaurus', 'Pteranodon', 'Apatosaurus', 'Archaeopteryx', 'Oviraptor', 'Gallimimus', 'Ceratosaurus', 'Deinonychus', 'Megalosaurus'],
    defaultValue: 'T-Rex',
    placeholder: 'Select your favorite dinosaur...',
  },
};

export const DeepSeaAnimals: Story = {
  args: {
    name: 'favorite_deepsea_animal',
    options: ['Giant Squid', 'Vampire Squid', 'Anglerfish', 'Goblin Shark', 'Fangtooth Fish', 'Dumbo Octopus', 'Frilled Shark', 'Blobfish', 'Barreleye Fish', 'Lanternfish', 'Viperfish', 'Gulper Eel', 'Sea Spider', 'Dragonfish', 'Cookiecutter Shark', 'Hagfish', 'Chimaera', 'Deep Sea Octopus', 'Sea Pig', 'Sea Cucumber'],
    defaultValue: 'Giant Squid',
    placeholder: 'Select your favorite deep sea creature...',
  },
};

export const WithPlaceholder: Story = {
  args: {
    name: 'select-placeholder',
    options: ['Red', 'Green', 'Blue', 'Yellow'],
    placeholder: 'Choose a color...',
  },
};

export const WithChangeHandler: Story = {
  args: {
    name: 'select-handler',
    options: ['First', 'Second', 'Third'],
    placeholder: 'Select...',
    onChange: (value) => console.log('Selected:', value),
  },
};
