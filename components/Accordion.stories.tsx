import type { Meta, StoryObj } from '@storybook/react';
import Accordion from './Accordion';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: 'boolean',
      description: 'Whether the accordion is open by default',
    },
    title: {
      control: 'text',
      description: 'The accordion header title',
    },
    children: {
      control: 'text',
      description: 'The accordion content',
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Collapsed: Story = {
  args: {
    title: 'ACCORDION EXAMPLE',
    defaultValue: false,
    children: 'This is the accordion content. Click the header to toggle visibility.',
  },
};

export const Expanded: Story = {
  args: {
    title: 'EXPANDED ACCORDION',
    defaultValue: true,
    children: 'This accordion is expanded by default. You can still collapse it by clicking the header.',
  },
};

export const LongContent: Story = {
  args: {
    title: 'PHILOSOPHY',
    defaultValue: true,
    children: `There are two visions of America a half century from now. One is of a society more divided between the haves and the have-nots, a country in which the rich live in gated communities, send their children to expensive schools, and have access to first-rate medical care. Meanwhile, the rest live in a world marked by insecurity, at best mediocre education, and in effect rationed health care―they hope and pray they don't get seriously sick. At the bottom are millions of young people alienated and without hope.`,
  },
};

export const MultipleAccordions: Story = {
  args: {
    title: 'SECTION ONE',
    defaultValue: true,
    children: 'Content for section one',
  },
  render: (args) => (
    <div>
      <Accordion {...args} />
      <Accordion title="SECTION TWO" defaultValue={false}>
        Content for section two
      </Accordion>
      <Accordion title="SECTION THREE" defaultValue={false}>
        Content for section three
      </Accordion>
    </div>
  ),
};
