import React from 'react'
import MuiTextField, {
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material/TextField'

const TextField = ({ variant = 'standard', ...props }: MuiTextFieldProps) => {
  return <MuiTextField variant='standard' {...props} />
}

export default TextField
