import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.scss'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { GlobalContextProvider } from '../context/global'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }:AppProps) {
  return (
    <GlobalContextProvider>
      <Component {...pageProps} />
    </GlobalContextProvider>
  )
}

export default MyApp
