import "../styles/globals.css";
import Prism from "prismjs";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/codepur-nav.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
