import { styled } from '../../styles'

export const ToastContainer = styled('div', {
  position: 'relative',
  padding: '$3 $5',
  backgroundColor: '$gray800',
  color: '$white',
  fontFamily: '$default',
  border: '1px solid $gray600',
  borderRadius: '$md',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '$2',

  h3: {
    margin: 0,
    lineHeight: 'base',
    fontSize: 'xl',
  },

  span: {
    color: '$gray200',
    fontSize: 'sm',
  },

  svg: {
    position: 'absolute',
    right: 16,
    top: 16,
  },
})
