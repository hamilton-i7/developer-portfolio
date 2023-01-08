import React from 'react'
import MuiTextField, {
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'

type TextFieldProps = MuiTextFieldProps & {
  endIcon?: React.ReactNode
  ariaLabel?: string
}

const TextField = ({
  variant = 'standard',
  helperText,
  error,
  endIcon,
  sx,
  ariaLabel,
  ...props
}: TextFieldProps) => {
  return (
    <MuiTextField
      variant='standard'
      fullWidth
      error={error}
      helperText={helperText}
      InputProps={{
        endAdornment: <InputAdornment position='end'>{endIcon}</InputAdornment>,
        'aria-label': ariaLabel,
      }}
      sx={{
        ...sx,
      }}
      {...props}
    />
  )
}

export default TextField
