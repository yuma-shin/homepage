import type { AppProps } from 'next/app'
import { ChakraProvider,Fade } from '@chakra-ui/react'
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
      <Fade in>
      <Component {...pageProps} />
      </Fade>
      <Footer/>
    </ChakraProvider>
  )
}

export default MyApp
