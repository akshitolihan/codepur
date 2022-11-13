import React from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../../components/Navbar";
const learn = () => {
  return (
    <>
      <Head>
        <title>Learn</title>
      </Head>
      <Navbar />
      <section className="flex justify-between bg-gradient-to-r from-[#845EC2] via-[#00ACAA] to-[#2F4858]">
        <section className="w-1/4 h-96"></section>
        <section className="w-full h-96">
          <section className="h-96 m-10 w-auto text-xl font-semibold text-[#ffffff] bg-[#FFD762]  p-2 shaddow-even rounded-lg ">
            HTML
          </section>

          <section className="h-96 m-10 w-auto text-xl font-semibold text-[#ffffff] bg-[#FF7BA6]  p-2 shaddow-even rounded-lg ">
            C++
          </section>

          <section className="h-96 m-10 w-auto text-xl font-semibold text-[#ffffff] bg-[#FF9485]  p-2 shaddow-even rounded-lg ">
            Python
          </section>

          <section className="h-96 m-10 w-auto text-xl font-semibold text-[#ffffff] bg-[#FFB56B]  p-2 shaddow-even rounded-lg ">
            JavaScript
          </section>
          {/* <section className="">
            <section className="p-8">
              <Image
                className="w-full rounded-xl filter brightness-  backdrop-filter backdrop-hue-rotate-90 opacity-75 filter: drop-shadow(0 4px 3px rgb(105, 240, 174)) contrast-200 drop-shadow-lg"
                src="/laptop.jpg"
                alt=""
                width="500px"
                height="300px"
              />
            </section>
          </section> */}
        </section>
      </section>
    </>
  );
};

export default learn;
