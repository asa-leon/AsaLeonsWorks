import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { MainContentProvider } from '../context/main-content-context'

function MyApp({ Component, pageProps }) {
  return (
    <MainContentProvider>
      <Component {...pageProps} />
    </MainContentProvider>
  )
}

export default MyApp
