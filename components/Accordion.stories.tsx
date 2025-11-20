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
