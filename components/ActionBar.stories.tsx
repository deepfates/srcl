import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import ActionBar from './ActionBar';
import { useHotkeys } from '@modules/hotkeys';

const meta = {
  title: 'Components/ActionBar',
  component: ActionBar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ActionBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithHotkeys: Story = {
  args: {
    items: [
      { hotkey: '⌘+1', body: 'Example I' },
      { hotkey: '⌘+2', body: 'Example II' },
      { hotkey: '⌘+3', body: 'Example III' },
    ],
  },
};

export const WorkingHotkeys: Story = {
  render: (args) => {
    const [activeTab, setActiveTab] = React.useState<string>('None');
    
    useHotkeys('cmd+1, ctrl+1', () => setActiveTab('Example I'), { document: typeof document !== 'undefined' ? document : undefined });
    useHotkeys('cmd+2, ctrl+2', () => setActiveTab('Example II'), { document: typeof document !== 'undefined' ? document : undefined });
    useHotkeys('cmd+3, ctrl+3', () => setActiveTab('Example III'), { document: typeof document !== 'undefined' ? document : undefined });
    
    return (
      <div>
        <ActionBar
          items={[
            { hotkey: '⌘+1', body: 'Example I' },
            { hotkey: '⌘+2', body: 'Example II' },
            { hotkey: '⌘+3', body: 'Example III' },
          ]}
        />
        <div style={{ padding: '24px', textAlign: 'center' }}>
          <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>
            Active tab: <strong>{activeTab}</strong>
          </p>
          <p style={{ fontSize: '12px', color: 'var(--color-text-tertiary)', marginTop: '8px' }}>
            Press ⌘+1, ⌘+2, ⌘+3 (Mac) or Ctrl+1, Ctrl+2, Ctrl+3 (Windows)
          </p>
        </div>
      </div>
    );
  },
  args: {
    items: [],
  },
};

export const Simple: Story = {
  args: {
    items: [
      { body: 'File' },
      { body: 'Edit' },
      { body: 'View' },
      { body: 'Help' },
    ],
  },
};
