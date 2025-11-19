import type { Meta, StoryObj } from '@storybook/react';
import ActionListItem from './ActionListItem';

const meta = {
  title: 'Components/ActionListItem',
  component: ActionListItem,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ActionListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: '⊹',
    children: 'Action item example',
  },
};

export const DirectionalIcons: Story = {
  render: () => (
    <>
      <ActionListItem icon="⭡">Hide item example</ActionListItem>
      <ActionListItem icon="⭢">Next item example</ActionListItem>
      <ActionListItem icon="⭣">Show item example</ActionListItem>
      <ActionListItem icon="⭠" href="/">Return item example</ActionListItem>
      <ActionListItem icon="⊹">Action item example</ActionListItem>
    </>
  ),
  args: {
    icon: '⊹',
    children: 'Action item',
  },
};

export const WithLinks: Story = {
  render: () => (
    <>
      <ActionListItem icon="⭢" href="https://github.com/deepfates/srcl" target="_blank">
        View the SRCL source code
      </ActionListItem>
      <ActionListItem icon="⭢" href="/storybook">
        Browse component documentation
      </ActionListItem>
    </>
  ),
  args: {
    icon: '⭢',
    children: 'Link item',
  },
};
