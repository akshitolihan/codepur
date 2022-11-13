import Head from "next/head";
import Navbar from "../components/Navbar";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Code from "../components/Code1";
import { BiCopy } from "react-icons/fa";
const about = () => {
  var code = `// This is the basic program in c++ to print something on the console.

  #include <iostream>
  
  using namespace std;
  
  int main()
  {
      cout<<"Hello Coders";
  
      return 0;
  }`;
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Navbar />
      <h1>About</h1>
      <section className="flex justify-center">
        <Code heading="Program to print in C++" code={code} />

        <CopyToClipboard text={code} onclick={() => "Copied"}>
          <button className="bg-[#FFBE6E] text-white px-2 rounded-lg max-h-8 -mx-16">
            Copy
          </button>
        </CopyToClipboard>
      </section>
    </>
  );
};

export default about;
