import React from 'react'
import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button'

type ButtonProps = MuiButtonProps & {
  children: React.ReactNode
}

const Button = ({ children, variant = 'text', ...props }: ButtonProps) => {
  return (
    <MuiButton variant={variant} {...props}>
      {children}
    </MuiButton>
  )
}

export default Button
