import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from 'react'
import Link from './link'
import Image from 'next/image'
import githubIcon from '../../public/icon-github.svg'
import frontendMentorIcon from '../../public/icon-frontend-mentor.svg'
import linkedInIcon from '../../public/icon-linkedin.svg'
import twitterIcon from '../../public/icon-twitter.svg'

const Navbar = () => {
  const navbarLinks = [
    { imgSrc: githubIcon, alt: 'Github icon' },
    { imgSrc: frontendMentorIcon, alt: 'Frontend Mentor icon' },
    { imgSrc: linkedInIcon, alt: 'LinkedIn icon' },
    { imgSrc: twitterIcon, alt: 'Twitter icon' },
  ]

  return (
    <Stack
      component='nav'
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
      }}>
      <Link href='#'>
        <Typography variant='h3' component='p'>
          adamkeyes
        </Typography>
      </Link>
      <Stack direction='row'>
        {navbarLinks.map((link, index) => (
          <Image
            key={index}
            src={link.imgSrc}
            alt={link.alt}
            width={24}
            height={24}
          />
        ))}
      </Stack>
    </Stack>
  )
}

export default Navbar
