import type { AppProps } from 'next/app'
import 'mapbox-gl/dist/mapbox-gl.css'
import '../src/styles/reset.css'
import '../src/styles/globals.css'
import Layout from '../src/components/Layout/Layout'
import { UserProvider } from '@auth0/nextjs-auth0'
import NextNprogress from 'nextjs-progressbar'
import { createContext, Dispatch, SetStateAction, useState } from 'react'
import { initialCurrentState } from '../src/helpers/general'

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
    <UserProvider>
      <CurrentPlaceContext.Provider value={value}>
        <NextNprogress options={{ showSpinner: false }} color='#e0525b' />
        {Component.name === 'Home' ? (
          <Component {...pageProps} />
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </CurrentPlaceContext.Provider>
    </UserProvider>
  )

}

export default MyApp
