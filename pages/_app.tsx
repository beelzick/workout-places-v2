import type { AppProps } from 'next/app'
import 'mapbox-gl/dist/mapbox-gl.css'
import '../src/styles/reset.css'
import '../src/styles/globals.css'
import Layout from '../src/components/Layout/Layout'
import { UserProvider } from '@auth0/nextjs-auth0'
function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <UserProvider>
      {Component.name === 'Home' ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </UserProvider>
  )

}

export default MyApp
