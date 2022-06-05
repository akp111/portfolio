import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head';
import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
        <title>Akp</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Space+Mono&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
