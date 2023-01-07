import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from 'react'
import { useSmallScreenMatcher } from '../../utils/responsive'
import Button from '../common/button'
import Divider from '../common/divider'

const PatternRings = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '53rem',
        height: '12.9rem',
        left: '-34.2rem',
        top: { xs: '13rem', sm: '8.6rem' },
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
        top: { xs: '25rem', sm: '31.5rem' },
        background: 'no-repeat url(/pattern-circle.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: { sm: 2 },
      }}
    />
  )
}

const Hero = () => {
  const theme = useTheme()
  const matchesSmallScreen = useSmallScreenMatcher(theme)

  return (
    <Stack
      component='header'
      sx={{
        alignItems: { xs: 'center', sm: 'start' },
        textAlign: { xs: 'center', sm: 'left' },
        padding: { xs: '0 1.6rem', sm: '0 3.2rem' },
        overflowX: 'hidden',
      }}>
      <PatternRings />
      <PatternCircle />
      <Box
        component='img'
        src={
          matchesSmallScreen
            ? '/image-profile-tablet.webp'
            : '/image-profile-mobile.webp'
        }
        alt='Picture of Adam Keyes'
        sx={{
          width: { xs: '17.4rem', sm: '24rem' },
          mb: '4rem',
          zIndex: 1,
          position: { sm: 'absolute' },
          right: { sm: 0 },
          top: { sm: 0 },
        }}
      />
      <Box
        sx={{
          width: { sm: '33rem', tablet: '44.5rem' },
          zIndex: { sm: 2 },
        }}>
        <Typography
          variant='h1'
          sx={{
            mb: { xs: '2.4rem', sm: '6rem' },
            mt: { sm: '15rem' },
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
            mb: { xs: '2.4rem', sm: '3.4rem' },
          }}>
          Based in the UK, I'm a front-end developer passionate about building
          accessible web apps that users love.
        </Typography>
        <Button
          sx={{
            mb: { xs: '8rem', sm: '6rem' },
          }}>
          Contact me
        </Button>
      </Box>
    </Stack>
  )
}

export default Hero
