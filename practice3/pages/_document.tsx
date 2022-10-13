import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/default.min.css" />
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="jsc blog" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
