import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head';
import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
      <title>Ashis: Portfolio Website</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Ashis: Portfolio Website" key="title" />
        <meta property="og:description" content="Ashis: Portfolio In Terminal Style" key="title" />
        <meta name="twitter:site" content="@akp111_eth" />
        <meta name="twitter:creator" content="@akp111_eth" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="icon" href="/A.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Space+Mono&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
