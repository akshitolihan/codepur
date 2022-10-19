import Head from "next/head";
import Navbar from "../../components/Navbar";

const index = () => {
  return (
    <>
    <Head>
      <title>Blog</title>
      <link rel="icon" href="/codepur.svg" />
    </Head>
    <Navbar />
    <h1>Blog</h1>
  </>
  )
}

export default index;
