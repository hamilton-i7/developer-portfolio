import ButtonBase from '@mui/material/ButtonBase'
import { styled } from '@mui/material/styles'
import React from 'react'
import Button from './button'

const ComplexButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '& .MuiButtonBase-root': {
    display: 'none',
    transition: theme.transitions.create('display', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.standard,
    }),
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.75,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
    '& .MuiButtonBase-root': {
      display: 'block',
    },
  },
})) as typeof ButtonBase

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
})

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}))

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0,
  transition: theme.transitions.create('opacity'),
}))

type ImageButtonProps = {
  img: string
  component?: React.ElementType
}

const ImageButton = ({ img, component = 'div' }: ImageButtonProps) => {
  return (
    <ComplexButton
      component={component}
      focusRipple
      style={{
        width: '100%',
        maxWidth: '54rem',
        height: '40rem',
        padding: '13.8rem 0',
      }}>
      <ImageSrc style={{ backgroundImage: `url(${img})` }} />
      <ImageBackdrop className='MuiImageBackdrop-root' />
      <Image>
        <Button sx={{ mb: '4.8rem' }}>View Project</Button>
        <Button>View Code</Button>
      </Image>
    </ComplexButton>
  )
}

export default ImageButton
