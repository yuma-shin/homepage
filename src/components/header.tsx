import Head from 'next/head'

function Header () {
    return (
        <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Yuma's - Homepage" />
          <meta name="author" content="Yuma Shintani" />
          <link rel="apple-touch-icon" href="apple-touch-icon.png" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <meta name="twitter:title" content="Yuma Shintani" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@TSUMTSUM_YUMA" />
          <meta name="twitter:creator" content="@TSUMTSUM_YUMA" />
          <meta name="twitter:image" content="https://www.y-shin.net/myphoto.webp" />
          <meta property="og:site_name" content="Yuma Shintani" />
          <meta name="og:title" content="Yuma Shintani" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://www.y-shin.net/myphoto.webp" />
          <title>Yuma&apos;s - Homepage</title>    
        </Head>
        </>
    )
}

export default Header