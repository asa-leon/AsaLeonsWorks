import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.scss'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { GlobalContextProvider } from '../context/global'

function MyApp({ Component, pageProps }) {
  return (
    <GlobalContextProvider>
      <Component {...pageProps} />
    </GlobalContextProvider>
  )
}

export default MyApp
