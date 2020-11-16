import '../styles/style.css'
import 'suneditor/dist/css/suneditor.min.css';
import '../styles/animation.css'
import { CookiesProvider } from 'react-cookie';


function MyApp({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <Component {...pageProps} />
    </CookiesProvider>
  )
}

export default MyApp
