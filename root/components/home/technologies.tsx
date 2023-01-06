import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from 'react'
import collections from '../../data/collections.json'
import { ITechnology } from '../../data/technologies'

const Technologies = () => {
  const { technologies }: { technologies: ITechnology[] } = JSON.parse(
    JSON.stringify(collections),
  )

  return (
    <Grid container spacing={2}>
      {technologies.map((technology, index) => (
        <Grid key={index} item xs={12}>
          <Stack>
            <Typography variant='h2' component='h3'>
              {technology.name}
            </Typography>
            <Typography variant='body1'>{technology.experience}</Typography>
          </Stack>
        </Grid>
      ))}
    </Grid>
  )
}

export default Technologies
