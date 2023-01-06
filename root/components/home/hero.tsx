import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import React from 'react'
import profilePictureMobile from '../../public/image-profile-mobile.webp'
import Button from '../common/button'

const Hero = () => {
  return (
    <Stack
      sx={{
        alignItems: 'center',
      }}>
      <Image src={profilePictureMobile} alt='Picture of Adam Keyes' />
      <Typography variant='h1'>
        Nice to meet you! <br />
        I'm <Box component='span'>Adam Keyes</Box>
      </Typography>
      <Typography variant='body1'>
        Based in the UK, I’m a front-end developer passionate about building
        accessible web apps that users love.
      </Typography>
      <Button>Contact me</Button>
    </Stack>
  )
}

export default Hero
