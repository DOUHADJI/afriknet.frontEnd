import { ThemeProvider } from 'next-themes'
import { SessionProvider } from 'next-auth/react'
import '../styles/globals.css'
import '../styles/main.css'
/* import { axios} from 'axios' */
import { useEffect, useState } from 'react'

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
