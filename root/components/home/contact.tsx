import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from 'react'
import Button from '../common/button'
import Divider from '../common/divider'
import Navbar from '../common/navbar'
import TextField from '../common/text-field'

const PatternRings = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '53rem',
        height: '12.9rem',
        left: '-34.2rem',
        bottom: '11.5rem',
        background: 'no-repeat url(/pattern-rings.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 0,
      }}
    />
  )
}

const Contact = () => {
  return (
    <Stack
      component='footer'
      sx={{
        background: theme => theme.palette.neutral.dark,
        padding: '6rem 1.6rem',
        textAlign: 'center',
        alignItems: 'center',
        position: 'relative',
      }}>
      <PatternRings />
      <Typography variant='h1' component='h2' sx={{ mb: '2rem' }}>
        Contact
      </Typography>
      <Typography
        variant='body1'
        sx={{ color: theme => theme.palette.neutral.main, mb: '5rem' }}>
        I would love to hear about your project and how I could help. Please
        fill in the form, and I'll get back to you as soon as possible.
      </Typography>
      <TextField placeholder='NAME' sx={{ mb: '3.2rem' }} />
      <TextField placeholder='EMAIL' type='email' sx={{ mb: '3.2rem' }} />
      <TextField
        placeholder='MESSAGE'
        multiline
        minRows={4}
        sx={{ mb: '3.2rem' }}
      />
      <Button sx={{ alignSelf: 'end', mb: '8.7rem' }}>Send Message</Button>
      <Divider flexItem sx={{ mb: '4rem' }} />
      <Navbar />
    </Stack>
  )
}

export default Contact
