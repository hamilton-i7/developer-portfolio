import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from 'react'
import Button from '../common/button'
import Navbar from '../common/navbar'
import TextField from '../common/text-field'

const Contact = () => {
  return (
    <Stack
      sx={{
        background: theme => theme.palette.neutral.dark,
      }}>
      <Typography variant='h1' component='h2'>
        Contact
      </Typography>
      <Typography variant='body1'>
        I would love to hear about your project and how I could help. Please
        fill in the form, and I'll get back to you as soon as possible.
      </Typography>
      <TextField placeholder='Name' />
      <TextField placeholder='Email' type='email' />
      <TextField placeholder='Message' multiline minRows={4} />
      <Button>Send Message</Button>
      <Divider />
      <Navbar />
    </Stack>
  )
}

export default Contact
