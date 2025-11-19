import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import ModalTrigger from './ModalTrigger';
import ModalStack from './ModalStack';
import ModalAlert from './modals/ModalAlert';
import ModalError from './modals/ModalError';
import ModalCreateAccount from './modals/ModalCreateAccount';
import ModalMatrixModes from './modals/ModalMatrixModes';

const meta = {
  title: 'Components/Modals',
  component: ModalStack,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ModalStack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllModals: Story = {
  render: () => {
    return (
      <div style={{ padding: '48px', display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '800px' }}>
        <h1>Modal System Examples</h1>
        <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>
          Click any button to open the corresponding modal. Modals stack on top of each other when multiple are opened.
        </p>

        <section>
          <h2>Alert & Error Modals</h2>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '16px' }}>
            <ModalTrigger modal={ModalAlert} modalProps={{ message: 'This is a simple alert message.' }}>
              <Button>Alert Modal</Button>
            </ModalTrigger>
            
            <ModalTrigger modal={ModalError} modalProps={{ 
              title: 'ERROR', 
              message: 'An error occurred while processing your request. Please try again.' 
            }}>
              <Button>Error Modal</Button>
            </ModalTrigger>
          </div>
        </section>

        <section>
          <h2>Form Modals</h2>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '16px' }}>
            <ModalTrigger modal={ModalCreateAccount}>
              <Button>Create Account Form</Button>
            </ModalTrigger>
          </div>
        </section>

        <section>
          <h2>Special Modals</h2>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '16px' }}>
            <ModalTrigger modal={ModalMatrixModes}>
              <Button>Matrix Loader Modes</Button>
            </ModalTrigger>
          </div>
        </section>

        <section style={{ marginTop: '32px', padding: '16px', background: 'var(--color-background-secondary)', borderRadius: '4px' }}>
          <h3>How to Use Modals</h3>
          <pre style={{ fontSize: '12px', overflow: 'auto' }}>
{`import ModalTrigger from '@components/ModalTrigger';
import Button from '@components/Button';
import ModalAlert from '@components/modals/ModalAlert';

// Wrap any clickable element with ModalTrigger
<ModalTrigger 
  modal={ModalAlert} 
  modalProps={{ message: 'Hello!' }}
>
  <Button>Open Modal</Button>
</ModalTrigger>

// Or use the modal context directly
import { useModals } from '@components/page/ModalContext';

const { open, close } = useModals();
open(ModalAlert, { message: 'Hello!' });
close(); // closes topmost modal`}
          </pre>
        </section>

        <ModalStack />
      </div>
    );
  },
  args: {},
};

export const StackingBehavior: Story = {
  render: () => {
    return (
      <div style={{ padding: '48px', display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '800px' }}>
        <h1>Modal Stacking Demo</h1>
        <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>
          Open multiple modals to see how they stack with blur and offset effects.
        </p>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <ModalTrigger modal={ModalAlert} modalProps={{ message: 'First modal - open more to see stacking!' }}>
            <Button>Open Modal 1</Button>
          </ModalTrigger>
          
          <ModalTrigger modal={ModalAlert} modalProps={{ message: 'Second modal stacks on top!' }}>
            <Button>Open Modal 2</Button>
          </ModalTrigger>
          
          <ModalTrigger modal={ModalAlert} modalProps={{ message: 'Third modal - notice the blur effect!' }}>
            <Button>Open Modal 3</Button>
          </ModalTrigger>
        </div>

        <ModalStack />
      </div>
    );
  },
  args: {},
};
