import type { Meta, StoryObj } from '@storybook/react';
import Grid from './Grid';

const meta = {
  title: 'Components/Grid',
  component: Grid,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Grid content',
    },
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Grid>
      <div style={{ background: 'var(--theme-border)', padding: '1rem' }}>Grid Item 1</div>
      <div style={{ background: 'var(--theme-border)', padding: '1rem' }}>Grid Item 2</div>
      <div style={{ background: 'var(--theme-border)', padding: '1rem' }}>Grid Item 3</div>
      <div style={{ background: 'var(--theme-border)', padding: '1rem' }}>Grid Item 4</div>
    </Grid>
  ),
};
