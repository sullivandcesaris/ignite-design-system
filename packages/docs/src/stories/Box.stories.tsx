import { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps } from '@dcesaris-design-system/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <span>Testando o elemento box</span>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  tags: ['autodocs'],
} as Meta

export const Primary: StoryObj<BoxProps> = {}
