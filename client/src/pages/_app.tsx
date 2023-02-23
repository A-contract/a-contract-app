import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import theme from 'utils/theme'
import { CssBaseline, ThemeProvider } from '@mui/material'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>A-contract</title>
        <meta name="description" content="A-contract" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Component {...pageProps} />
      </ThemeProvider>
      
    </>
  
  )
}
