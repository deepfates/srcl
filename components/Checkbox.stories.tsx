import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from './Checkbox';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Name attribute for the checkbox',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Whether checkbox is checked by default',
    },
    children: {
      control: 'text',
      description: 'Label text for the checkbox',
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'checkbox-default',
    children: 'The past, though a tutor, is not a thing to lament, but a wellspring of wisdom from which we draw without regret.',
  },
};

export const Checked: Story = {
  args: {
    name: 'checkbox-checked',
    defaultChecked: true,
    children: 'A measure of obsession doth sharpen the will, for the long path, though beset with trials, leadeth ever toward glories.',
  },
};

export const Principles: Story = {
  render: () => (
    <>
      <Checkbox name="1">The past, though a tutor, is not a thing to lament, but a wellspring of wisdom from which we draw without regret.</Checkbox>
      <Checkbox name="2">A measure of obsession doth sharpen the will, for the long path, though beset with trials, leadeth ever toward glories.</Checkbox>
      <Checkbox name="3">Kindness and gratitude must light our way in all dealings, regardless of circumstance.</Checkbox>
      <Checkbox name="4">Stand firm beside thy fellow for shared triumph is the sweetest of all.</Checkbox>
      <Checkbox name="5">Let us strive that design be not a mere ornament to the world, but a worthy service to humanity itself.</Checkbox>
      <Checkbox name="6">Artifacts built with care do grant webmasters the power to shape their own fates, and to serve those thou dost cherish is an honor beyond measure.</Checkbox>
      <Checkbox name="7">Intensity, as fire contained, burneth most brightly when turned toward aims; thus, let us spurn the call of mediocrity and cast aside the seductions of decay.</Checkbox>
      <Checkbox name="8">Mistakes are not curses, but treasures wrapped in adversity, offered to those wise enough to seize their lessons.</Checkbox>
      <Checkbox name="9">Expect naught, but receive all with gratitude, and find a place of trust wherein thou mayest dwell for a time.</Checkbox>
      <Checkbox name="10">From thy master learn what thou canst, and from all others likewise, for wisdom hath many guises.</Checkbox>
    </>
  ),
  args: {
    name: 'principles',
    children: 'First principle',
  },
};

export const WithHandler: Story = {
  args: {
    name: 'checkbox-handler',
    children: 'Thy fate lieth ever in thine own hands, and the soul readeth not only the landscape, but the heart that beats beneath it.',
    onChange: (e) => console.log('Checkbox changed:', e.target.checked),
  },
};
