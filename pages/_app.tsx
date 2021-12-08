import type { AppProps } from 'next/app'
import Layout from '../src/components/Layout/Layout'
import { UserProvider } from '@auth0/nextjs-auth0'
import NextNprogress from 'nextjs-progressbar'
import Head from 'next/head';
import { createContext, Dispatch, SetStateAction, useState } from 'react'
import { initialCurrentState } from '../src/helpers/general'
import { ToastContainer } from 'react-toastify'
import '../src/styles/reset.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import 'react-toastify/dist/ReactToastify.css';
import 'rc-rate/assets/index.css';
import '../src/styles/styles.css'

interface CurrentPlaceContext {
  currentPlace: Place
  setCurrentPlace: Dispatch<SetStateAction<Place>>
}

export const CurrentPlaceContext = createContext<CurrentPlaceContext>({
  currentPlace: initialCurrentState,
  setCurrentPlace: () => { }
})

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [currentPlace, setCurrentPlace] = useState<Place>(initialCurrentState)
  const value = { currentPlace, setCurrentPlace }
  return (
    <>
      <Head>
        <title>Workout Places</title>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <UserProvider>
        <CurrentPlaceContext.Provider value={value}>
          <ToastContainer
            position='bottom-left'
            autoClose={3000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover
            limit={5}
          />
          <NextNprogress options={{ showSpinner: false }} color='#e0525b' />
          {/* {Component.name === 'Home' ? (
            <Component {...pageProps} />
          ) : ( */}
          <Layout>
            <Component {...pageProps} />
          </Layout>
          {/* // )} */}
        </CurrentPlaceContext.Provider>
      </UserProvider>
    </>
  )
}

export default MyApp
