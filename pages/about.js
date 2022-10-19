import Head from "next/head";
import Navbar from "../components/Navbar";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Code from "../components/Code1";
import { BiCopy } from "react-icons/fa";
const about = () => {
  var code =`// This is the basic program in c++ to print something on the console.

  #include <iostream>
  
  using namespace std;
  
  int main()
  {
      cout<<"Hello Coders";
  
      return 0;
  }`;
var code1 = `print akshit`;
  return (
    <>
      <Head>
        <title>About</title>
        <link rel="icon" href="/codepur.svg" />
      </Head>
      <Navbar />
      <h1>About</h1>
<section className="flex justify-center">


      <Code
            heading="Program to print in C++"
            code={code}
          />

        <CopyToClipboard text={code} onCopy={() => "Copied"}>
          
          <button className="bg-[#FFBE6E] text-white px-2 rounded-lg max-h-8 -mx-16">Copy</button>
        </CopyToClipboard>   
        </section>
        <section className="flex justify-center">


      <Code
            heading="Program to print in C++"
            code={code1}
          />

        <CopyToClipboard text={code1} onCopy={() => "Copied"}>
          
          <button className="bg-[#FFBE6E] px-2 rounded-lg max-h-8 -mx-16">Copy</button>
        </CopyToClipboard>   
        </section>
        </>
  );
};

export default about;

