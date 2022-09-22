import Head from "next/head";
import Image from "next/image";
import Code from "../components/Code";
export default function Home() {
  return (
    <>
      <Head>
        <title>Codepur</title>
        <link rel="icon" href="/codepur.svg" />
      </Head>
      <section className="flex justify-center my-4">
        <section className="max-w-3xl shadow-even rounded-lg">
          <p className="p-2 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium quidem doloribus optio et obcaecati voluptatum nobis blanditiis quaerat repudiandae possimus?</p>
          <Code heading="Program to print in C++"
            code={`#include <iostream>

using namespace std;

int main()
{
    cout<<"Hello Coders";

    return 0;
}`}
          />
          <p className="p-2 "></p>
          <Code heading="Program to print in C++"
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
