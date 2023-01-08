import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Head from 'next/head'
import Divider from '../components/common/divider'
import Navbar from '../components/common/navbar'
import Contact from '../components/home/contact'
import Hero from '../components/home/hero'
import Projects from '../components/home/projects'
import Technologies from '../components/home/technologies'

export default function Home() {
  return (
    <>
      <Head>
        <title>Adam Keyes</title>
        <meta
          name='description'
          content="Adam Keyes' portfolio. Challenge by Frontend mentor"
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon-32x32.png' />
      </Head>
      <Box
        sx={{
          background: theme => theme.palette.common.black,
          minHeight: '100vh',
          width: '100%',
          overflowX: 'hidden',
          position: 'relative',
          color: theme => theme.palette.common.white,
        }}>
        <Navbar
          aria-label='Top navigation bar'
          sx={{
            position: 'absolute',
            top: { xs: '2rem', sm: '3rem', lg: '4rem' },
            left: { xs: '50%', sm: 0 },
            transform: { xs: 'translateX(-50%)', sm: 'none' },
            width: '100%',
            px: { sm: '3rem', lg: '12rem', desktop: '16.5rem' },
          }}
        />
        <Hero />
        <main>
          <Technologies />
          <Projects />
        </main>
        <Contact />
      </Box>
    </>
  )
}
