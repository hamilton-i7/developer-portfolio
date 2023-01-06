import Stack from '@mui/material/Stack'
import Head from 'next/head'

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
        }}></Stack>
    </>
  )
}
