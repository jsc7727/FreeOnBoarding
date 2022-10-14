import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { css, Global } from '@emotion/react';
import '@common/axios';
import { AppBar, Toolbar } from '@mui/material';

// import reset from '@styles/reset';
// import '@styles/prism.css';
// import '@styles/reset.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Global
        styles={css`
          ${reset}
        `}
      ></Global> */}
      <AppBar
        position="fixed"
        css={css`
          background: white;
          background-color: black;
          &:hover {
            color: ${'gray'};
          }
        `}
      >
        <Toolbar>eclipse</Toolbar>
      </AppBar>
      <Toolbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
