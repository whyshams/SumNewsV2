import { Html, Head, Main, NextScript } from 'next/document';


export default function Document() {
  return (
    <Html lang='en'>
      <Head >
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.0/css/bootstrap.min.css" integrity="sha512-XWTTruHZEYJsxV3W/lSXG1n3Q39YIWOstqvmFsdNEEQfHoZ6vm6E9GK2OrF6DSJSpIbRbi+Nn0WDPID9O7xB2Q==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      <meta name="google-site-verification" content="b7mMdsfYA5BmRlJ9yfBhwdwgUYTki-J0sso1t1YXZ8k" />
       </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}