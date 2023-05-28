import { TooltipContent, TooltipTrigger } from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipText = styled(TooltipContent, {
  padding: '$3 $4',
  backgroundColor: '$gray900',
  color: '$gray100',
  fontFamily: '$default',
  borderRadius: '8px',

  '&:after': {
    marginBottom: '$3',
  },
})

export const TooltipContainer = styled(TooltipTrigger, {
  paddingTop: '$2',
  backgroundColor: 'transparent',
  color: '$gray100',
  border: 0,
})
