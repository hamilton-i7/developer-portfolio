import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from 'react'
import Button from '../common/button'

const PatternRings = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '53rem',
        height: '12.9rem',
        left: '-34.2rem',
        top: '13rem',
        background: 'no-repeat url(/pattern-rings.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 0,
      }}
    />
  )
}

const PatternCircle = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '12.9rem',
        height: '12.9rem',
        right: '-7rem',
        top: '25rem',
        background: 'no-repeat url(/pattern-circle.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
  )
}

const Hero = () => {
  return (
    <Stack
      component='section'
      sx={{
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 1.6rem',
        overflowX: 'hidden',
      }}>
      <PatternRings />
      <PatternCircle />
      <Box
        component='img'
        src='/image-profile-mobile.webp'
        alt='Picture of Adam Keyes'
        sx={{
          width: '17.4rem',
          mb: '4rem',
          zIndex: 1,
        }}
      />
      <Typography
        variant='h1'
        sx={{
          mb: '2.4rem',
        }}>
        Nice to meet you! <br />
        I'm{' '}
        <Box
          component='span'
          sx={{
            position: 'relative',
            '::after': {
              content: "''",
              height: '0.4rem',
              width: '22.5rem',
              background: theme => theme.palette.primary.main,
              position: 'absolute',
              bottom: '0.25rem',
              left: 0,
            },
          }}>
          Adam Keyes.
        </Box>
      </Typography>
      <Typography
        variant='body1'
        sx={{
          color: theme => theme.palette.neutral.main,
          mb: '2.4rem',
        }}>
        Based in the UK, I'm a front-end developer passionate about building
        accessible web apps that users love.
      </Typography>
      <Button
        sx={{
          mb: '8rem',
        }}>
        Contact me
      </Button>
    </Stack>
  )
}

export default Hero
