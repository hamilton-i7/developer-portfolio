import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React, { useState } from 'react'
import Button from '../common/button'
import Divider from '../common/divider'
import Navbar from '../common/navbar'
import TextField from '../common/text-field'
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined'
import { EMAIL_REGEX } from '../../utils/regex'

const PatternRings = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '53rem',
        height: '12.9rem',
        left: { xs: '-34.2rem', lg: '-20.5rem' },
        bottom: { xs: '11.5rem', sm: '14.5rem', lg: '22.5rem' },
        background: 'no-repeat url(/pattern-rings.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 0,
      }}
    />
  )
}

const Contact = () => {
  const [email, onEmailChange] = useState('')
  const [isError, onErrorChange] = useState(false)
  const [enableValidation, onEnableValidationChange] = useState(false)

  const handleEnableValidationChange = () => {
    onEnableValidationChange(true)
    onErrorChange(!EMAIL_REGEX.test(email))
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onEmailChange(event.target.value)
    if (!enableValidation) return

    onErrorChange(!EMAIL_REGEX.test(event.target.value))
  }

  return (
    <Stack
      component='footer'
      id='contact'
      sx={{
        background: theme => theme.palette.neutral.dark,
        padding: {
          xs: '6rem 1.6rem',
          sm: '6rem 3.2rem',
          lg: '8.4rem 12rem',
          desktop: '8.4rem 16.5rem',
        },
        position: 'relative',
        alignItems: 'center',
      }}>
      <PatternRings />
      <Stack
        sx={{
          textAlign: { xs: 'center', lg: 'left' },
          alignItems: { xs: 'center', lg: 'start' },
          justifyContent: { lg: 'space-between' },
          flexDirection: { xs: 'column', lg: 'row' },
          width: { sm: '44.5rem', lg: '100%' },
        }}>
        <Box sx={{ width: { sm: '44.5rem' } }}>
          <Typography
            variant='h1'
            component='h2'
            sx={{ mb: '2rem', lg: '3.6rem' }}>
            Contact
          </Typography>
          <Typography
            variant='body1'
            sx={{ color: theme => theme.palette.neutral.main, mb: '5rem' }}>
            I would love to hear about your project and how I could help. Please
            fill in the form, and I&apos;ll get back to you as soon as possible.
          </Typography>
        </Box>

        <Stack
          component='form'
          sx={{
            alignItems: 'end',
            width: { xs: '100%', lg: '44.5rem' },
          }}>
          <TextField
            placeholder='NAME'
            ariaLabel='name'
            sx={{ mb: '3.2rem' }}
          />
          <TextField
            placeholder='EMAIL'
            type='email'
            sx={{ mb: '3.2rem' }}
            error={isError}
            ariaLabel='email'
            helperText={
              isError ? (
                <Typography variant='overline'>
                  Sorry, invalid format here
                </Typography>
              ) : (
                ' '
              )
            }
            endIcon={isError && <ErrorOutlineOutlinedIcon color='error' />}
            onChange={handleEmailChange}
          />
          <TextField
            placeholder='MESSAGE'
            multiline
            minRows={4}
            ariaLabel='message'
            sx={{ mb: '3.2rem' }}
          />
          <Button
            sx={{ alignSelf: 'end', mb: '8.7rem' }}
            onClick={handleEnableValidationChange}>
            Send Message
          </Button>
        </Stack>
      </Stack>
      <Divider flexItem sx={{ mb: '4rem' }} />
      <Navbar aria-label='Bottom navigation bar' sx={{ width: '100%' }} />
    </Stack>
  )
}

export default Contact
