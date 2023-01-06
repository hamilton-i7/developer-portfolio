import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import Head from 'next/head'
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
      <Stack
        sx={{
          background: theme => theme.palette.common.black,
          minHeight: '100vh',
          width: '100%',
          alignItems: 'center',
          overflowX: 'hidden',
          position: 'relative',
          color: theme => theme.palette.common.white,
        }}>
        <Navbar />
        <Hero />
        <Divider />
        <Technologies />
        <Divider />
        <Projects />
        <Contact />
      </Stack>
    </>
  )
}
