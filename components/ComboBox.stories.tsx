import type { Meta, StoryObj } from '@storybook/react';
import ComboBox from './ComboBox';

const LANDSCAPES = [
  ['Location', 'Description'],
  ['Sahara Desert', 'The Sahara stretches across North Africa with shifting dunes that tower above the horizon. Even in its harsh sunlight and cold nights, resilient life finds a way to endure.'],
  ['Grand Canyon', 'Carved by the Colorado River, the Grand Canyon reveals layers of ancient rock. Its chasms echo with wind and the distant calls of raptors gliding through the afternoon sky.'],
  ['Amazon Rainforest', 'The Amazon Rainforest teems with biodiversity under a dense green canopy. Rivers and flooded plains sustain countless species, while humid air hangs heavy with the promise of storms.'],
  ['Rocky Mountains', 'The Rockies rise like rugged spines across the continent. Snowpack feeds rivers that carve valleys where elk graze, and fir trees cling to the slopes.'],
  ['Gobi Desert', 'The Gobi Desert rolls out in arid sweeps across northern China and southern Mongolia. Sparse grasses and hardy camels testify to its unforgiving climate.'],
  ['Andes Mountains', 'The Andes dominate western South America with ragged peaks and hidden valleys. Llamas graze on high plateaus, and glaciers feed the rivers far below.'],
  ['Serengeti Plains', 'The Serengeti spreads under the African sun in rolling grasslands. Wildebeests and zebras migrate in vast herds, guided by the promise of water and fresh pasture.'],
  ['Yosemite Valley', 'Glacial forces shaped this granite cradle in California. Towering waterfalls cascade from sheer cliffs, while giant sequoias stand in quiet strength.'],
];

const meta = {
  title: 'Components/ComboBox',
  component: ComboBox,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      description: 'Array of data entries (2D array)',
    },
    label: {
      control: 'text',
      description: 'Label for the search input',
    },
  },
} satisfies Meta<typeof ComboBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WorldLandscapes: Story = {
  args: {
    data: LANDSCAPES,
    label: 'SEARCH THE WORLD',
  },
};

export const WithoutLabel: Story = {
  args: {
    data: LANDSCAPES,
  },
};
