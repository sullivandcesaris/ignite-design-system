import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipProps } from '@dcesaris-design-system/react'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  decorators: [
    (Story) => (
      <div style={{ marginTop: '2rem', marginLeft: '2rem' }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {
    children: 'Hover me',
    text: 'This is a tooltip',
  },
}
