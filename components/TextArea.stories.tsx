import type { Meta, StoryObj } from '@storybook/react';
import TextArea from './TextArea';

const meta = {
  title: 'Components/TextArea',
  component: TextArea,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    autoPlay: {
      control: 'text',
      description: 'Text to automatically type out',
    },
    autoPlaySpeedMS: {
      control: 'number',
      description: 'Speed of auto-play typing in milliseconds',
    },
    isBlink: {
      control: 'boolean',
      description: 'Whether cursor should blink',
    },
  },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your text here...',
  },
};

export const WithBlinkingCursor: Story = {
  args: {
    isBlink: true,
  },
};

export const WithPlaceholder: Story = {
  args: {
    placeholder: 'There he took up again his great Ring in Barad-dur.',
  },
};

export const AutoPlay: Story = {
  args: {
    autoPlay: "The doom of the Elves is to be immortal, to love the beauty of the world, to bring it to full flower with their gifts of delicacy and perfection, to last while it lasts, never leaving it even when 'slain', but returning – and yet, when the Followers come, to teach them, and make way for them, to 'fade' as the Followers grow and absorb the life from which both proceed. The Doom (or the Gift) of Men is mortality, freedom from the circles of the world.",
    autoPlaySpeedMS: 50,
  },
};
