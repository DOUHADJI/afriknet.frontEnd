import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { CssBaseline } from '@nextui-org/react'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles]),
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>{CssBaseline.flush()}</Head>
        <body className='bg-[url("/images/bg-light.png")] bg-cover dark:bg-[url("/images/bg-dark.png")] bg-cover '>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
