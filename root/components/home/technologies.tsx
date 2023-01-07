import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from 'react'
import collections from '../../data/collections.json'
import { ITechnology } from '../../data/technologies'
import { useSmallScreenMatcher } from '../../utils/responsive'
import Divider from '../common/divider'

const Technologies = () => {
  const { technologies }: { technologies: ITechnology[] } = JSON.parse(
    JSON.stringify(collections),
  )
  const theme = useTheme()
  const matchesSmallScreen = useSmallScreenMatcher(theme)

  return (
    <Box
      sx={{
        padding: {
          xs: '0 1.6rem',
          sm: '0 3.2rem',
          lg: '0 12rem',
          desktop: '0 16.5rem',
        },
      }}
      component='section'>
      <Divider />
      <Grid
        container
        columnSpacing={{ xs: 3 }}
        rowSpacing={{ xs: 3, sm: 7.25 }}
        sx={{
          textAlign: { xs: 'center', sm: 'left' },
          padding: { xs: '4rem 0', sm: '6rem 0 0', lg: '7.2rem 0 0' },
        }}>
        {technologies.map((technology, index) => (
          <Grid component='article' key={index} item xs={12} sm={6} lg={4}>
            <Stack>
              <Typography variant='h2' component='h3'>
                {technology.name}
              </Typography>
              <Typography
                variant='body1'
                sx={{ color: theme => theme.palette.neutral.main }}>
                {technology.experience}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
      {!matchesSmallScreen && <Divider />}
    </Box>
  )
}

export default Technologies
