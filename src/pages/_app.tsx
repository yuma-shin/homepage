import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from 'components/navbar'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Yuma's Homepage" />
          <meta name="author" content="Yuma Shintani" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <title>Yuma's - Homepage</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
