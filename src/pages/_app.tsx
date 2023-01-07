import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from 'components/navbar'
import Head from 'next/head'
import Footer from 'components/footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Yuma's - Homepage" />
          <meta name="author" content="Yuma Shintani" />
          <title>Yuma&apos;s - Homepage</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
    </ChakraProvider>
  )
}

export default MyApp
