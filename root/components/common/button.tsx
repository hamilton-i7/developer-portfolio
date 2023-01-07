import React from 'react'
import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button'

type ButtonProps = MuiButtonProps & {
  children: React.ReactNode
  component?: React.ElementType
}

const Button = ({
  children,
  variant = 'text',
  component = 'button',
  sx,
  ...props
}: ButtonProps) => {
  return (
    <MuiButton
      variant={variant}
      component={component}
      sx={{
        padding: 0,
        color: theme => theme.palette.common.white,
        transition: theme =>
          theme.transitions.create('color', {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.shortest,
          }),
        ':hover': {
          color: theme => theme.palette.primary.main,
          background: 'none',
        },
        '& .MuiTouchRipple-root': {
          display: 'none',
        },
        '::after': {
          content: "''",
          position: 'absolute',
          bottom: '-1rem',
          left: '50%',
          transform: 'translateX(-50%)',
          height: '0.2rem',
          width: '95%',
          background: theme => theme.palette.primary.main,
        },
        ...sx,
      }}
      {...props}>
      {children}
    </MuiButton>
  )
}

export default Button
