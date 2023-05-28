import type { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps } from '@dcesaris-design-system/react'

export default {
  title: 'Form/Toast',
  component: Toast,
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  tags: ['autodocs'],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
  },
}
