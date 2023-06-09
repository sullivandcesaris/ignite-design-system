import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@dcesaris-design-system/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/sullivandcesaris.png',
    alt: 'Sullivan Dcesaris',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
  tags: ['autodocs'],
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
