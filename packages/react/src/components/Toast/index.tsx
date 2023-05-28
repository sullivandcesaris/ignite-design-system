import React, { useState } from 'react'
import { X } from 'phosphor-react'
import { ToastContainer } from './styles'

export interface ToastProps {
  title: string
  description: string
}

export function Toast({ title, description }: ToastProps) {
  const [isToastVisible, setToastVisible] = useState(true)

  const handleCloseToast = () => {
    setToastVisible(false)
  }

  return (
    <ToastContainer style={{ display: isToastVisible ? 'flex' : 'none' }}>
      <h3>{title}</h3>
      <span>{description}</span>
      <X width={20} height={20} onClick={handleCloseToast}></X>
    </ToastContainer>
  )
}

Toast.displayName = 'Toast'
