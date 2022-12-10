import "../styles/globals.css";
import Prism from "prismjs";
import Head from "next/head";
import { CopyToClipboard } from "react-copy-to-clipboard";

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
