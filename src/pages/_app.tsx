/* eslint-disable prettier/prettier */
import React from 'react';
import '../styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { Box } from '@mui/system';
import CssBaseline from '@mui/material/CssBaseline';
import { useRouter } from 'next/router';
import { createTheme, ThemeProvider } from '@mui/material';
import Header from '@/Components/Student/Layout/Header';
import Footer from '@/Components/Student/Layout/Footer';
import SideBar from '@/Components/Student/Layout/SiderBar';
import ScrollToTop from '@/Components/Student/Layout/ScrollToTop';
import NextNProgress from 'nextjs-progressbar';
import Loading from '@/Components/Student/Layout/Loading';
const theme = createTheme({
  typography: {
    fontFamily: `montserrat`,
    fontSize: 14,
  },
});
export default function MyApp({ Component, pageProps }: AppProps) {
  const[showLoading,setShowLoading]= React.useState(true)
  React.useEffect(() => {
    setTimeout(() => setShowLoading(false), 1000)
}, []);
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Hec - E Services Portal</title>
      </Head>
      {showLoading==true && <Loading/> }
      {showLoading==false && <div>
        {router.pathname !== `/Login` &&
        router.pathname !== `/Focalperson` &&
        router.pathname !== `/Admin` ? (
        <ThemeProvider theme={theme}>
           <Header />
          <SideBar />
          <Box sx={{ m: { lg: `6em 2em 0 6em`, md: `6em 2em 0 0em` } }}>
            <NextNProgress height={2} />
            <Component {...pageProps} />
          </Box>
          <ScrollToTop />
          <Footer />
        </ThemeProvider>
      ) : (
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <ScrollToTop />
        </ThemeProvider>
      )}
      </div>}
    </>
  );
}

