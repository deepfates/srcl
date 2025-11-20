import type { Meta, StoryObj } from '@storybook/react';
import Divider from './Divider';

const meta = {
  title: 'Components/Divider',
  component: Divider,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: [undefined, 'GRADIENT', 'DOUBLE'],
      description: 'Type of divider',
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Gradient: Story = {
  args: {
    type: 'GRADIENT',
  },
};

export const Double: Story = {
  args: {
    type: 'DOUBLE',
  },
};

export const EntropyArticle: Story = {
  render: () => (
    <div>
      Any sense of order or stability inevitably crumbles. The entire universe follows a dismal trek toward a dull state of ultimate turmoil.
      <br />
      <br />
      <Divider />
      <br />
      To keep track of this cosmic decay, physicists employ a concept called entropy. Entropy is a measure of disorderliness, and the declaration that entropy is always on the rise — known as the second law of thermodynamics — is among nature's most inescapable commandments.
      <br />
      <br />
      <Divider type="DOUBLE" />
      <br />
      I have long felt haunted by the universal tendency toward messiness. Order is fragile. It takes months of careful planning and artistry to craft a vase but an instant to demolish it with a soccer ball.
      <br />
      <br />
      <Divider type="GRADIENT" />
      <br />
      The second law demands that machines can never be perfectly efficient, which implies that whenever structure arises in the universe, it ultimately serves only to dissipate energy further — be it a star that eventually explodes or a living organism converting food into heat.
      <br />
      <br />
      <Divider type="GRADIENT" />
      <br />— Zack Savitzky
    </div>
  ),
  args: {},
};
