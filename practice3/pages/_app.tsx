import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { css, EmotionCache } from '@emotion/react';
import '@common/axios';
import { AppBar, Toolbar } from '@mui/material';
import Link from 'next/link';
import createEmotionCache from '@assets/theme/createEmotionCache';
import Head from 'next/head';
import PageProvider from '@components/helpers/PageProvider';
import Header from '@components/Header';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }: MyAppProps) {
  return (
    <PageProvider emotionCache={emotionCache}>
      <Header></Header>
      <Component {...pageProps} />
    </PageProvider>
  );
}

export default MyApp;
