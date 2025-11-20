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
