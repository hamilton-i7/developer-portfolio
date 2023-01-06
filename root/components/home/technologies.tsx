import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from 'react'
import collections from '../../data/collections.json'
import { ITechnology } from '../../data/technologies'
import Divider from '../common/divider'

const Technologies = () => {
  const { technologies }: { technologies: ITechnology[] } = JSON.parse(
    JSON.stringify(collections),
  )

  return (
    <Box sx={{ padding: '0 1.6rem' }} component='section'>
      <Divider />
      <Grid
        container
        spacing={3}
        sx={{
          textAlign: 'center',
          padding: '4rem 0',
        }}>
        {technologies.map((technology, index) => (
          <Grid key={index} item xs={12}>
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
      <Divider />
    </Box>
  )
}

export default Technologies
