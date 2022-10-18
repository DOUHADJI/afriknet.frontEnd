import { ThemeProvider } from 'next-themes'
import { SessionProvider } from 'next-auth/react'
import '../styles/globals.css'
import '../styles/main.css'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider enableSystem={false} attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  )
}

export default MyApp
