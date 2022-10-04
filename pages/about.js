import Head from "next/head";
import Navbar from "../components/Navbar";

const about = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <link rel="icon" href="/codepur.svg" />
      </Head>
      <Navbar />
      <h1>About</h1>
    </>
  );
};

export default about;
