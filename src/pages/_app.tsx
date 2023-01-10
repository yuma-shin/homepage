import type { AppProps } from 'next/app'
import { ChakraProvider,extendTheme } from '@chakra-ui/react'
import Navbar from 'components/navbar'
import Head from 'next/head'
import Footer from 'components/footer'
import Fonts from 'components/fonts'
//import 'components/style.css'

const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

const theme = extendTheme({ fonts })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
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
