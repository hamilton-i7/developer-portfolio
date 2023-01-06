import React from 'react'
import MuiDivider, {
  DividerProps as MuiDividerProps,
} from '@mui/material/Divider'

const Divider = ({ light = true, sx, ...props }: MuiDividerProps) => {
  return (
    <MuiDivider
      light={light}
      sx={{
        borderColor: theme => theme.palette.common.white,
        ...sx,
      }}
      {...props}
    />
  )
}

export default Divider
