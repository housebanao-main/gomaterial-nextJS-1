import { Fragment } from "react";
import Head from "next/head";
import "./global.css"; // Assuming this is your global CSS file
import "../components/typewriter.module.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Gomaterial - All your construction needs</title>
        <link rel='icon' href='/public/favicon.ico' />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
