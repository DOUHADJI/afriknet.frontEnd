import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { CssBaseline } from '@nextui-org/react'
import { ToastContainer } from 'react-toastify'

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
        <body className="bg-white dark:bg-black">
          <Main />

          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
