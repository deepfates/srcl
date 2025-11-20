import type { Meta, StoryObj } from '@storybook/react';
import Table from './Table';
import TableRow from './TableRow';
import TableColumn from './TableColumn';
import Divider from './Divider';

const meta = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Startups: Story = {
  render: () => (
    <Table>
      <TableRow>
        <TableColumn style={{ width: '16ch' }}>
          COMPANY
          <br />
          <Divider />
        </TableColumn>
        <TableColumn>
          DESCRIPTION
          <br />
          <Divider />
        </TableColumn>
      </TableRow>
      <TableRow>
        <TableColumn>⍓ Bluesky</TableColumn>
        <TableColumn>Building a social internet.</TableColumn>
      </TableRow>
      <TableRow>
        <TableColumn>⍓ Coordination Network</TableColumn>
        <TableColumn>Collaborative tools for solving complex problems together.</TableColumn>
      </TableRow>
      <TableRow>
        <TableColumn>⍓ Doola</TableColumn>
        <TableColumn>Tools to start your US business from anywhere and keep it compliant.</TableColumn>
      </TableRow>
      <TableRow>
        <TableColumn>⍓ General Fabrication</TableColumn>
        <TableColumn>Machine tools to enable permanent industrial revolution.</TableColumn>
      </TableRow>
      <TableRow>
        <TableColumn>⍓ Glif</TableColumn>
        <TableColumn>Building foundational tools for the Filecoin Ecosystem.</TableColumn>
      </TableRow>
      <TableRow>
        <TableColumn>⍓ Lightcell</TableColumn>
        <TableColumn>An engine that uses light to make electricity.</TableColumn>
      </TableRow>
      <TableRow>
        <TableColumn>⍓ Orchid</TableColumn>
        <TableColumn>Mitigate risks with the world's most advanced whole genome screening for embryos.</TableColumn>
      </TableRow>
      <TableRow>
        <TableColumn>⍓ Wilderness Labs</TableColumn>
        <TableColumn>Enables mainstream businesses and .NET developers to create sophisticated embedded-IoT solutions.</TableColumn>
      </TableRow>
      <TableRow>
        <TableColumn>⍓ YellowHeart</TableColumn>
        <TableColumn>Ticketing to empower fans, artists, and sports teams.</TableColumn>
      </TableRow>
    </Table>
  ),
  args: {
    children: 'Table content',
  },
};

export const Simple: Story = {
  render: () => (
    <Table>
      <TableRow>
        <TableColumn>Name</TableColumn>
        <TableColumn>Role</TableColumn>
      </TableRow>
      <TableRow>
        <TableColumn>John Doe</TableColumn>
        <TableColumn>Developer</TableColumn>
      </TableRow>
      <TableRow>
        <TableColumn>Jane Smith</TableColumn>
        <TableColumn>Designer</TableColumn>
      </TableRow>
    </Table>
  ),
  args: {
    children: 'Table',
  },
};
