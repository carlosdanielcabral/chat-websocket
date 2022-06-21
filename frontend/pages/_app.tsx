import AppContext from '../context/AppContext';
import Provider from '../context/Provider';
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
