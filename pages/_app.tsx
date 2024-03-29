import { AppProps } from "next/dist/shared/lib/router/router";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>My Top - our best top</title>
        <link key={1} rel="icon" href="/favicon2.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <meta
          property="og:url"
          content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath}
        ></meta>
        <meta property="og:locale" content="ru_RU"></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
