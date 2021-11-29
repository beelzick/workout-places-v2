import type { AppProps } from 'next/app'
import 'mapbox-gl/dist/mapbox-gl.css';
import '../src/styles/reset.css'
import '../src/styles/globals.css'
import Layout from '../src/components/Layout/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  if (Component.name === 'Home') return <Component {...pageProps} />
  else {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}

export default MyApp
