import React from 'react'
import * as TooltipRadix from '@radix-ui/react-tooltip'
import { TooltipContainer, TooltipText } from './style'

export interface TooltipProps extends React.HTMLProps<HTMLButtonElement> {
  text: string
}

export function Tooltip({ text, ...props }: TooltipProps) {
  return (
    <TooltipRadix.Provider>
      <TooltipRadix.Root delayDuration={200}>
        <TooltipContainer>
          <div {...(props as any)} />
        </TooltipContainer>
        <TooltipRadix.Portal>
          <TooltipText>
            {text}
            <TooltipRadix.Arrow />
          </TooltipText>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
