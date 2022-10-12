import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Next.js CRUD" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
