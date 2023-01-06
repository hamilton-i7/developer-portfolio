import React from 'react'
import { IProject } from '../../data/projects'
import collections from '../../data/collections.json'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '../common/button'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

const PatternRings = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '53rem',
        height: '12.9rem',
        right: '-34.2rem',
        top: '-6.5rem',
        background: 'no-repeat url(/pattern-rings.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 0,
      }}
    />
  )
}

const Project = ({ project }: { project: IProject }) => {
  return (
    <Stack>
      <Box
        component='img'
        src={project.imgSrc.small}
        alt={project.name}
        sx={{ mb: '2rem' }}
      />
      <Typography variant='h4' component='h3' sx={{ mb: '2rem' }}>
        {project.name}
      </Typography>
      <Stack direction='row' spacing={2.25} sx={{ mb: '2rem' }}>
        {project.technologies.map((technology, index) => (
          <Typography key={index}>{technology}</Typography>
        ))}
      </Stack>
      <Stack direction='row' spacing={3.75}>
        <Button>View Project</Button>
        <Button>View Code</Button>
      </Stack>
    </Stack>
  )
}

const Projects = () => {
  const { projects }: { projects: IProject[] } = JSON.parse(
    JSON.stringify(collections),
  )
  return (
    <Stack
      component='main'
      sx={{
        padding: '8rem 1.6rem',
        position: 'relative',
      }}>
      <PatternRings />
      <Stack
        direction='row'
        sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: '4rem',
        }}>
        <Typography variant='h1' component='h2'>
          Projects
        </Typography>
        <Button>Contact me</Button>
      </Stack>
      <Grid container spacing={5}>
        {projects.map((project, index) => (
          <Grid key={index} item xs={12} tablet={6}>
            <Project project={project} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  )
}

export default Projects
