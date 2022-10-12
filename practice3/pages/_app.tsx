import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { css, Global } from '@emotion/react';
import '@common/axios';
import reset from '@styles/reset';
import '@styles/reset.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global
        styles={css`
          ${reset}
        `}
      ></Global>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
