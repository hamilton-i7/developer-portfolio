import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from 'react'
import {
  useLargeScreenMatcher,
  useSmallScreenMatcher,
  useTabletScreenMatcher,
} from '../../utils/responsive'
import Button from '../common/button'

const PatternRings = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '53rem',
        height: '12.9rem',
        left: { xs: '-34.2rem', lg: '-10rem' },
        top: { xs: '13rem', sm: '8.6rem', lg: '13.3rem', desktop: '13rem' },
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
        right: { xs: '-7rem', lg: '40rem', desktop: '54.5rem' },
        top: { xs: '25rem', sm: '31.5rem', lg: '36rem', desktop: '51rem' },
        background: 'no-repeat url(/pattern-circle.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: { sm: 2 },
      }}
    />
  )
}

const Heading = () => {
  const theme = useTheme()
  const matchesTabletScreen = useTabletScreenMatcher(theme)
  const matchesLargeScreen = useLargeScreenMatcher(theme)

  const text = matchesLargeScreen ? (
    <>
      Nice to meet you!
      <br />
      I'm{' '}
      <Box
        component='span'
        sx={{
          position: 'relative',
          '::after': {
            content: "''",
            height: '0.4rem',
            width: { xs: '22.5rem', sm: '40.2rem', desktop: '49.2rem' },
            background: theme => theme.palette.primary.main,
            position: 'absolute',
            bottom: '0.25rem',
            left: 0,
          },
        }}>
        Adam Keyes.
      </Box>
    </>
  ) : matchesTabletScreen ? (
    <>
      Nice to <br />
      meet you! I'm <br />
      <Box
        component='span'
        sx={{
          position: 'relative',
          '::after': {
            content: "''",
            height: '0.4rem',
            width: { xs: '22.5rem', sm: '40.2rem' },
            background: theme => theme.palette.primary.main,
            position: 'absolute',
            bottom: '0.25rem',
            left: 0,
          },
        }}>
        Adam Keyes.
      </Box>
    </>
  ) : (
    <>
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
    </>
  )

  return (
    <Typography
      variant='h1'
      sx={{
        mb: { xs: '2.4rem', sm: '6rem', lg: '4.2rem' },
        mt: { sm: '15rem', desktop: '19.8rem' },
      }}>
      {text}
    </Typography>
  )
}

const Hero = () => {
  const theme = useTheme()
  const matchesSmallScreen = useSmallScreenMatcher(theme)
  const matchesLargeScreen = useLargeScreenMatcher(theme)

  return (
    <Stack
      component='header'
      sx={{
        alignItems: { xs: 'center', sm: 'start' },
        textAlign: { xs: 'center', sm: 'left' },
        padding: {
          xs: '0 1.6rem',
          sm: '0 3.2rem',
          lg: '0 12rem',
          desktop: '0 16.5rem',
        },
        overflowX: 'hidden',
      }}>
      <PatternRings />
      <PatternCircle />
      <Box
        component='img'
        src={
          matchesLargeScreen
            ? '/image-profile-desktop.webp'
            : matchesSmallScreen
            ? '/image-profile-tablet.webp'
            : '/image-profile-mobile.webp'
        }
        alt='Picture of Adam Keyes'
        sx={{
          width: {
            xs: '17.4rem',
            sm: '24rem',
            tablet: '32.2rem',
            lg: '33.5rem',
            desktop: '44.5rem',
          },
          mb: { xs: '4rem', sm: 0 },
          zIndex: 1,
          position: { sm: 'absolute' },
          right: { sm: 0, lg: '12rem', desktop: '16.5rem' },
          top: { sm: 0 },
        }}
      />
      <Box
        sx={{
          width: { sm: '33rem', tablet: '44.5rem', lg: '70.6rem' },
          zIndex: { sm: 2 },
        }}>
        <Heading />
        <Typography
          variant='body1'
          sx={{
            color: theme => theme.palette.neutral.main,
            mb: { xs: '2.4rem', sm: '3.4rem', lg: '6.6rem' },
            width: { lg: '44.5rem' },
          }}>
          Based in the UK, I'm a front-end developer passionate about building
          accessible web apps that users love.
        </Typography>
        <Button
          href='#contact'
          sx={{
            mb: { xs: '8rem', sm: '6rem', lg: '12rem', desktop: '22rem' },
          }}>
          Contact me
        </Button>
      </Box>
    </Stack>
  )
}

export default Hero
