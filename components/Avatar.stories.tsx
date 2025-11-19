import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './Avatar';
import Indent from './Indent';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: 'Image source URL',
    },
    href: {
      control: 'text',
      description: 'Link URL',
    },
    target: {
      control: 'text',
      description: 'Link target',
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://pbs.twimg.com/profile_images/1958569334726668288/GFE8mhKI_400x400.jpg',
    href: 'https://internet.dev',
    target: '_blank',
  },
};

export const Webmasters: Story = {
  render: () => (
    <>
      <Avatar src="https://pbs.twimg.com/profile_images/1958569334726668288/GFE8mhKI_400x400.jpg" href="https://internet.dev" target="_blank" />
      <Avatar src="https://pbs.twimg.com/profile_images/1748647089633169408/B7vd7ito_400x400.jpg" href="https://internet.dev" target="_blank" />
      <Avatar src="https://pbs.twimg.com/profile_images/1890125319224598528/ZILr9OGp_400x400.jpg" href="https://internet.dev" target="_blank" />
      <Avatar src="https://pbs.twimg.com/profile_images/1919579065444663300/cxCRW91y_400x400.jpg" href="https://internet.dev" target="_blank" />
      <Avatar src="https://avatars.githubusercontent.com/u/10610892?v=4" href="https://internet.dev" target="_blank" />
      <Avatar src="https://pbs.twimg.com/profile_images/1947754354368536576/Jc96WEuk_400x400.jpg" href="https://internet.dev" target="_blank" />
      <Avatar src="https://pbs.twimg.com/profile_images/1925213285663805441/fUiKWlj2_400x400.jpg" href="https://internet.dev" target="_blank" />
    </>
  ),
  args: {
    src: 'https://pbs.twimg.com/profile_images/1958569334726668288/GFE8mhKI_400x400.jpg',
  },
};

export const WithDetails: Story = {
  render: () => (
    <>
      <Avatar src="https://pbs.twimg.com/profile_images/1958569334726668288/GFE8mhKI_400x400.jpg" href="https://x.com/aalimbuyuguen" target="_blank">
        <Indent>
          ANDREW ALIMBUYUGUEN
          <br />
          Webmaster
        </Indent>
      </Avatar>
      <Avatar src="https://pbs.twimg.com/profile_images/1925213285663805441/fUiKWlj2_400x400.jpg" href="https://x.com/wwwjim" target="_blank">
        <Indent>
          JIMMY LEE
          <br />
          Staff Janitor
        </Indent>
      </Avatar>
    </>
  ),
  args: {
    src: 'https://pbs.twimg.com/profile_images/1958569334726668288/GFE8mhKI_400x400.jpg',
    children: 'Details',
  },
};

export const ChristopherAlexander: Story = {
  args: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/ChristopherAlexander2012_cropped.jpg',
    href: 'https://internet.dev',
    target: '_blank',
    children: (
      <Indent>
        CHRISTOPHER ALEXANDER
        <br />
        1-1-2002
      </Indent>
    ),
  },
};
