import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'
import '../styles/main.css'

function MyApp({ Component, pageProps: { ...pageProps } }) {
  return (
    <ThemeProvider enableSystem={false} attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
