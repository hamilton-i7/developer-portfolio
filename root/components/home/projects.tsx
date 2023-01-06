import React from 'react'
import { IProject } from '../../data/projects'
import collections from '../../data/collections.json'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '../common/button'
import Grid from '@mui/material/Grid'
import Image from 'next/image'

const Project = ({ project }: { project: IProject }) => {
  return (
    <Stack>
      <Image
        src={project.imgSrc.small}
        alt={project.name}
        width={345}
        height={253}
      />
      <Typography variant='h4' component='h3'>
        {project.name}
      </Typography>
      <Stack direction='row'>
        {project.technologies.map((technology, index) => (
          <Typography key={index}>{technology}</Typography>
        ))}
      </Stack>
      <Stack direction='row'>
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
    <Stack>
      <Stack
        direction='row'
        sx={{
          justifyContent: 'space-between',
        }}>
        <Typography variant='h1' component='h2'>
          Projects
        </Typography>
        <Button>Contact me</Button>
      </Stack>
      <Grid container spacing={2}>
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
