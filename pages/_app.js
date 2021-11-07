import '../styles/globals.css'

import Head from 'next/head'
import React from 'react'
import { Provider } from 'react-redux'
import store from '../redux/store'
import { checkUser } from '../redux/features/authSlice'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomProvider } from '../components/CustomProvider'

store.dispatch(checkUser())

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment

  return (
    <Provider store={store} >
      <CustomProvider >
        <Head>
          <title>movie app</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <script src="https://kit.fontawesome.com/2ceb233dee.js" crossorigin="anonymous" defer></script>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CustomProvider>
    </Provider >
  )
}

export default MyApp
