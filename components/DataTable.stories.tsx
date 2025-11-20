import type { Meta, StoryObj } from '@storybook/react';
import DataTable from './DataTable';

const SAMPLE_TABLE_DATA = [
  ['NAME', 'SYMBOL', 'PRICE', 'HOLDINGS'],
  ['Bat', 'BAT', '$9.01', '400'],
  ['Bear', 'BR', '$56.78', '200'],
  ['Camel', 'CML', '$55.67', '70'],
  ['Cheetah', 'CHT', '$13.45', '150'],
  ['Crab', 'CRB', '$15.67', '250'],
  ['Deer', 'DER', '$29.99', '110'],
  ['Dolphin', 'DLP', '$77.89', '50'],
  ['Eagle', 'EGL', '$45.67', '90'],
  ['Falcon', 'FLC', '$40.22', '85'],
  ['Fox', 'FOX', '$12.34', '100'],
  ['Giraffe', 'GRF', '$44.56', '80'],
  ['Lion', 'LION', '$67.89', '80'],
  ['Panda', 'PND', '$78.90', '55'],
  ['Shark', 'SHK', '$89.01', '50'],
  ['Tiger', 'TGR', '$34.56', '120'],
  ['Whale', 'WHL', '$123.45', '30'],
  ['Wolf', 'WLF', '$23.45', '150'],
  ['Zebra', 'ZBR', '$65.43', '60'],
];

const meta = {
  title: 'Components/DataTable',
  component: DataTable,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: SAMPLE_TABLE_DATA,
  },
};
