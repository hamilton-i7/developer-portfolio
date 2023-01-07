import Stack, { StackProps } from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from 'react'
import Link from './link'
import GitHubIcon from '@mui/icons-material/GitHub'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import SvgIcon from '@mui/material/SvgIcon'

const Navbar = ({ sx }: StackProps) => {
  return (
    <Stack
      component='nav'
      sx={{
        alignItems: 'center',
        zIndex: 1_000,
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: { sm: 'space-between' },
        ...sx,
      }}>
      <Link href='#'>
        <Typography variant='h3' component='p'>
          adamkeyes
        </Typography>
      </Link>
      <Stack
        direction='row'
        spacing={3}
        sx={{
          mt: { xs: '2rem', sm: 0 },
          px: '2rem',
          '& > .MuiSvgIcon-root': {
            cursor: 'pointer',
            color: theme => theme.palette.common.white,
            transition: theme =>
              theme.transitions.create('color', {
                easing: theme.transitions.easing.easeIn,
                duration: theme.transitions.duration.shortest,
              }),
            ':hover': {
              color: theme => theme.palette.primary.main,
              background: 'none',
            },
          },
        }}>
        <GitHubIcon fontSize='large' />
        <SvgIcon fontSize='large'>
          <path d='M13.084.23a.751.751 0 0 0-.736.75v14.267a.75.75 0 1 0 1.5 0V.98a.75.75 0 0 0-.763-.75ZM24.44 4.504a.752.752 0 0 0-.284.064l-6.44 2.875a.752.752 0 0 0 0 1.37l6.44 2.884a.75.75 0 0 0 .612-1.369L19.861 8.13l4.907-2.191a.753.753 0 0 0 .38-.99.752.752 0 0 0-.708-.444ZM1.371 9.663a.752.752 0 0 0-.74.938C2.41 17.447 8.603 22.23 15.685 22.23a.75.75 0 1 0 0-1.501A14.053 14.053 0 0 1 2.083 10.225a.75.75 0 0 0-.712-.561v-.001Z' />
        </SvgIcon>
        <LinkedInIcon fontSize='large' />
        <TwitterIcon fontSize='large' />
      </Stack>
    </Stack>
  )
}

export default Navbar
