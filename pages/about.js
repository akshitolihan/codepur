import Head from "next/head";
import Navbar from "../components/Navbar";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Code from "../components/Code1";
import { BiCopy } from "react-icons/fa";
const about = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Navbar />
      <h1>About</h1>
    </>
  );
};

export default about;
