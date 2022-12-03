import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'
import '../styles/main.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

function MyApp({ Component, pageProps: { ...pageProps } }) {
  return (
    <ThemeProvider enableSystem={false} attribute="class">
      <Component {...pageProps} />
      <ToastContainer />
    </ThemeProvider>
  )
}

export default MyApp
