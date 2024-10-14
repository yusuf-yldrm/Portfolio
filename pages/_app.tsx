import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import "./global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>Yusuf Y. - Portfolio</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen">
        <Component {...pageProps} />
      </div>
    </React.Fragment>
  );
}

export default MyApp;
