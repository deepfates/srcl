import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import ActionButton from './ActionButton';
import BlockLoader from './BlockLoader';
import { useHotkeys } from '@modules/hotkeys';

const meta = {
  title: 'Components/ActionButton',
  component: ActionButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ActionButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Click Me',
  },
};

export const WithHotkey: Story = {
  args: {
    hotkey: '⌘+S',
    children: 'Save',
  },
};

export const WorkingHotkey: Story = {
  render: () => {
    const [clicks, setClicks] = React.useState(0);
    
    useHotkeys('cmd+s, ctrl+s', () => {
      setClicks(c => c + 1);
    }, { document: typeof document !== 'undefined' ? document : undefined });
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
        <ActionButton hotkey="⌘+S" onClick={() => setClicks(c => c + 1)}>
          Save (clicked {clicks} times)
        </ActionButton>
        <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>
          Press ⌘+S (Mac) or Ctrl+S (Windows) to trigger
        </p>
      </div>
    );
  },
};

export const MultipleHotkeys: Story = {
  render: () => {
    const [lastAction, setLastAction] = React.useState<string>('None');
    
    useHotkeys('cmd+n, ctrl+n', () => setLastAction('New'), { document: typeof document !== 'undefined' ? document : undefined });
    useHotkeys('cmd+o, ctrl+o', () => setLastAction('Open'), { document: typeof document !== 'undefined' ? document : undefined });
    useHotkeys('cmd+s, ctrl+s', () => setLastAction('Save'), { document: typeof document !== 'undefined' ? document : undefined });
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <ActionButton hotkey="⌘+N" onClick={() => setLastAction('New')}>New</ActionButton>
          <ActionButton hotkey="⌘+O" onClick={() => setLastAction('Open')}>Open</ActionButton>
          <ActionButton hotkey="⌘+S" onClick={() => setLastAction('Save')}>Save</ActionButton>
        </div>
        <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>
          Last action: <strong>{lastAction}</strong>
        </p>
        <p style={{ fontSize: '12px', color: 'var(--color-text-tertiary)' }}>
          Try ⌘+N, ⌘+O, ⌘+S (Mac) or Ctrl+N, Ctrl+O, Ctrl+S (Windows)
        </p>
      </div>
    );
  },
};

export const WithLoader: Story = {
  render: () => (
    <ActionButton hotkey={<BlockLoader mode={9} />}>
      Loading
    </ActionButton>
  ),
  args: {
    children: 'Loading',
  },
};

export const Navigation: Story = {
  args: {
    children: 'NAVIGATION ITEM',
  },
};
