import React from 'react'
import MuiTextField, {
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material/TextField'

const TextField = ({
  variant = 'standard',
  sx,
  ...props
}: MuiTextFieldProps) => {
  return (
    <MuiTextField
      variant='standard'
      fullWidth
      sx={{
        ...sx,
      }}
      {...props}
    />
  )
}

export default TextField
