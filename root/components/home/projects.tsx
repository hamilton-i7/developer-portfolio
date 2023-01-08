import React from 'react'
import { IProject } from '../../data/projects'
import collections from '../../data/collections.json'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '../common/button'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material'
import {
  useLargeScreenMatcher,
  useSmallScreenMatcher,
} from '../../utils/responsive'
import ImageButton from '../common/image-button'

const PatternRings = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '53rem',
        height: '12.9rem',
        right: { xs: '-34.2rem', lg: '-26.2rem' },
        top: '-6.5rem',
        background: 'no-repeat url(/pattern-rings.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 0,
      }}
    />
  )
}

type ProjectProps = {
  project: IProject
  useLargeImage?: boolean
}

const Project = ({ project, useLargeImage }: ProjectProps) => {
  return (
    <Stack>
      <Box
        component='img'
        src={useLargeImage ? project.imgSrc.large : project.imgSrc.small}
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

const ProjectDesktop = ({ project }: ProjectProps) => {
  return (
    <Stack>
      <ImageButton img={project.imgSrc.large} />
      <Typography
        variant='h4'
        component='h3'
        sx={{ mb: { xs: '2rem', lg: '0.7rem' }, mt: { lg: '2rem' } }}>
        {project.name}
      </Typography>
      <Stack direction='row' spacing={2.25} sx={{ mb: '2rem' }}>
        {project.technologies.map((technology, index) => (
          <Typography key={index}>{technology}</Typography>
        ))}
      </Stack>
    </Stack>
  )
}

const Projects = () => {
  const { projects }: { projects: IProject[] } = JSON.parse(
    JSON.stringify(collections),
  )
  const theme = useTheme()
  const matchesSmallScreen = useSmallScreenMatcher(theme)
  const matchesLargeScreen = useLargeScreenMatcher(theme)

  return (
    <Stack
      component='section'
      sx={{
        padding: {
          xs: '8rem 1.6rem',
          sm: '10rem 3.2rem',
          lg: '14rem 12rem',
          desktop: '14rem 16.5rem',
        },
        position: 'relative',
      }}>
      <PatternRings />
      <Stack
        component='header'
        direction='row'
        sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: { xs: '4rem', sm: '6rem' },
        }}>
        <Typography variant='h1' component='h2'>
          Projects
        </Typography>
        <Button href='#contact'>Contact me</Button>
      </Stack>
      <Grid
        container
        columnSpacing={{ xs: 5, tablet: 3, lg: 3.75 }}
        rowSpacing={{ xs: 5, tablet: 7.5, lg: 8.75 }}>
        {projects.map((project, index) => (
          <Grid component='article' key={index} item xs={12} tablet={6} xl={4}>
            {matchesLargeScreen ? (
              <ProjectDesktop project={project} />
            ) : (
              <Project project={project} useLargeImage={matchesSmallScreen} />
            )}
          </Grid>
        ))}
      </Grid>
    </Stack>
  )
}

export default Projects
