import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import Providers from './Providers';
import { useGlobalNavigationHotkeys } from '@common/hooks';
import Button from './Button';

const meta = {
  title: 'Components/Providers',
  component: Providers,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Providers>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Wrapped content',
  },
};

export const WithGlobalNavigationHotkeys: Story = {
  render: () => {
    const NavigationDemo = () => {
      useGlobalNavigationHotkeys();
      const [lastClicked, setLastClicked] = React.useState<string>('None');
      
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px' }}>
          <h3>Global Navigation Hotkeys Demo</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Button onClick={() => setLastClicked('Button 1')}>Button 1</Button>
            <Button onClick={() => setLastClicked('Button 2')}>Button 2</Button>
            <Button onClick={() => setLastClicked('Button 3')}>Button 3</Button>
            <Button onClick={() => setLastClicked('Button 4')}>Button 4</Button>
          </div>
          <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>
            Last clicked: <strong>{lastClicked}</strong>
          </p>
          <div style={{ fontSize: '12px', color: 'var(--color-text-tertiary)' }}>
            <p>Try these keyboard shortcuts:</p>
            <ul>
              <li>↑/↓ or ←/→ to navigate between buttons</li>
              <li>Enter or Space to click the focused button</li>
            </ul>
          </div>
        </div>
      );
    };
    
    return (
      <Providers>
        <NavigationDemo />
      </Providers>
    );
  },
  args: {
    children: <div />,
  },
};
