import Head from "next/head";
import Image from "next/image";
import Code1 from "../components/Code1";
import Code from "../components/Code";
import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <>
      <Head>
        <title>Codepur</title>
        <link rel="icon" href="/codepur-nav.svg" />
      </Head>
      <Navbar />
      <section className="flex justify-evenly w-full bg-[#ffffff] my-24 pb-4">
        <section>
          <h1 className="font-bold text-7xl text-start pt-16 py-4 text-[#424242]">
            Welcome to
          </h1>
          <h1 className="font-bold text-7xl typed-out text-start text-[#FFBE6E] py-4">
            CodePur
          </h1>
          <h1 className="font-normal text-xl text-start text-[#424242] py-16 animate-bounce1">
            Learn by reading through one of the top platform.
          </h1>
        </section>
        <section className="grid my-20">
          <span className="m-4 px-4 py-2 bg-[#FFBE6E] rounded-br-3xl rounded-tl-3xl rounded-tr-3xl w-40 text-white font-semibold tracking-wider text-2xl">
            Read
          </span>
          <span className="m-4 px-4 py-2 bg-[#FFBE6E] rounded-br-3xl rounded-tl-3xl rounded-tr-3xl w-40 text-white font-semibold tracking-wider text-2xl">
            Learn
          </span>
          <span className="m-4 px-4 py-2 bg-[#FFBE6E] rounded-br-3xl rounded-tl-3xl rounded-tr-3xl w-40 text-white font-semibold tracking-wider text-2xl">
            Apply
          </span>
        </section>
      </section>
      <section className="bg-[#ffffff] h-60">
        <h1 className="relative top-[20%] text-center text-5xl font-bold text-[#424242]">
          What we got for you?
        </h1>
      </section>
      <section className="grid justify-evenly py-16  my-4 bg-[#FFBE6E]">
        <h1 className="py-8 text-center text-4xl font-bold text-[#424242]">
          Reading Mateirial!
        </h1>
        <section className="max-w-2xl p-8 mb-10 bg-[#ffffff] rounded-lg text-[#000000] text-justify shadow-even">
          <h1 className="py-2 text-2xl font-bold ">
            What is computer Programming?
          </h1>
          <p>
            Computer programming is the process of performing a particular
            computation, usually by designing and building an executable
            computer program. Programming involves tasks such as analysis,
            generating algorithms, profiling algorithms accuracy and resource
            consumption, and the implementation of algorithms
          </p>
        </section>
      </section>
      <section className="grid justify-evenly my-20 bg-[#00C896]">
        <h1 className="mt-16 text-center text-4xl font-bold text-[#424242]">
          Code
        </h1>
        <section className="max-w-lg p-4 text-[#000000] text-justify">
          <Code1
            heading="Program to print in C++"
            code={`// This is the basic program in c++ to print something on the console.

#include <iostream>

using namespace std;

int main()
{
    cout<<"Hello Coders";

    return 0;
}`}
          />
        </section>
      </section>
      <section className="flex justify-center my-4">
        <section className="max-w-3xl shadow-even rounded-lg">
          <p className="p-2 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium quidem doloribus optio et obcaecati voluptatum nobis
            blanditiis quaerat repudiandae possimus?
          </p>
          <Code
            heading="Program to print in C++"
            code={`#include <iostream>

using namespace std;

int main()
{
    cout<<"Hello Coders";

    return 0;
}`}
          />
          <p className="p-2 "></p>
          <Code
            heading="Program to print in C++"
            code={`#include <iostream>

using namespace std;

int main()
{
    cout<<"Hello Coders";

    return 0;
}`}
          />
        </section>
      </section>
    </>
  );
}
