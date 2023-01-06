import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from 'react'
import Link from './link'
import Box from '@mui/material/Box'

const Navbar = () => {
  const navbarLinks = [
    { imgSrc: '/icon-github.svg', alt: 'Github icon' },
    { imgSrc: '/icon-frontend-mentor.svg', alt: 'Frontend Mentor icon' },
    { imgSrc: '/icon-linkedin.svg', alt: 'LinkedIn icon' },
    { imgSrc: '/icon-twitter.svg', alt: 'Twitter icon' },
  ]

  return (
    <Stack
      component='nav'
      sx={{
        position: 'absolute',
        top: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        alignItems: 'center',
        zIndex: 1_000,
      }}>
      <Link href='#'>
        <Typography variant='h3' component='p'>
          adamkeyes
        </Typography>
      </Link>
      <Stack direction='row' spacing={3} sx={{ mt: '2rem' }}>
        {navbarLinks.map((link, index) => (
          <Link href='#' key={index}>
            <Box component='img' src={link.imgSrc} alt={link.alt} />
          </Link>
        ))}
      </Stack>
    </Stack>
  )
}

export default Navbar
