import type { Meta, StoryObj } from '@storybook/react';
import TreeView from './TreeView';

const meta = {
  title: 'Components/TreeView',
  component: TreeView,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TreeView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AnimalKingdom: Story = {
  render: () => (
    <TreeView defaultValue={true} isRoot title="Animal Kingdom" style={{ minWidth: '71ch' }}>
      <TreeView defaultValue={true} title="Chordata">
        <TreeView defaultValue={true} title="Mammalia">
          <TreeView defaultValue={true} title="Primates">
            <TreeView title="Hominidae.csv" isFile />
            <TreeView title="Cercopithecidae.csv" isFile />
          </TreeView>
          <TreeView defaultValue={true} title="Carnivora">
            <TreeView title="Felidae.csv" isFile />
            <TreeView title="Canidae.csv" isFile />
          </TreeView>
          <TreeView defaultValue={true} title="Cetacea">
            <TreeView title="Delphinidae.csv" isFile />
            <TreeView title="Balaenidae.csv" isFile />
          </TreeView>
        </TreeView>
        <TreeView defaultValue={true} title="Aves">
          <TreeView defaultValue={true} title="Passeriformes">
            <TreeView title="Corvidae.csv" isFile />
            <TreeView title="Fringillidae.csv" isFile />
          </TreeView>
          <TreeView defaultValue={true} title="Accipitriformes">
            <TreeView title="Accipitridae.csv" isFile />
            <TreeView title="Pandionidae.csv" isFile />
          </TreeView>
        </TreeView>
        <TreeView defaultValue={true} title="Reptilia">
          <TreeView defaultValue={true} title="Squamata">
            <TreeView title="Viperidae.csv" isFile />
            <TreeView title="Iguanidae.csv" isFile />
          </TreeView>
          <TreeView defaultValue={true} title="Testudines">
            <TreeView title="Cheloniidae.csv" isFile />
            <TreeView title="Testudinidae.csv" isFile />
          </TreeView>
        </TreeView>
      </TreeView>
      <TreeView defaultValue={true} title="Arthropoda">
        <TreeView defaultValue={true} title="Insecta">
          <TreeView defaultValue={true} title="Coleoptera">
            <TreeView title="Coccinellidae.csv" isFile />
            <TreeView title="Scarabaeidae.csv" isFile />
          </TreeView>
          <TreeView defaultValue={true} title="Diptera">
            <TreeView title="Culicidae.csv" isFile />
            <TreeView title="Syrphidae.csv" isFile />
          </TreeView>
        </TreeView>
        <TreeView defaultValue={true} title="Arachnida">
          <TreeView defaultValue={true} title="Araneae">
            <TreeView title="Salticidae.csv" isFile />
            <TreeView title="Theraphosidae.csv" isFile />
          </TreeView>
        </TreeView>
      </TreeView>
    </TreeView>
  ),
  args: {
    title: 'Root',
  },
};

export const Simple: Story = {
  render: () => (
    <TreeView defaultValue={true} isRoot title="Documents">
      <TreeView title="Projects">
        <TreeView title="project1.md" isFile />
        <TreeView title="project2.md" isFile />
      </TreeView>
      <TreeView title="Notes">
        <TreeView title="meeting-notes.txt" isFile />
      </TreeView>
    </TreeView>
  ),
  args: {
    title: 'Documents',
  },
};
