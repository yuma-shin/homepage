import type { AppProps } from 'next/app'
import { ChakraProvider,extendTheme } from '@chakra-ui/react'
import Navbar from 'components/navbar'
import Footer from 'components/footer'
import Fonts from 'components/fonts'
import Header from 'components/header'

const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

const theme = extendTheme({ fonts })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Header />
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
    </ChakraProvider>
  )
}

export default MyApp
