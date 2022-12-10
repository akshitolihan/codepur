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
      <section className="grid md:flex justify-around mt-16">
        <div className="flex m-4 rounded-lg p-4">
          <Image
            className="p-4 rounded-lg overflow-visible"
            src="/images/fear.jpg"
            alt="logo"
            height={300}
            width={500}
          />
        </div>

        <section>
          <section className="relative top-10 justify-start p-4 m-4">
            {/* <span className="text-start font-bold  py-2 text-[#465775] p-1">
              Don&apos;t fear,
            </span> */}
            <span className="a-width text-start font-bold  py-2 bg-gradient-to-r from-[#FF9671] to-[#FF6F91] text-transparent bg-clip-text hover:bg-gradient-to-l p-1">
              <span className="text-start font-bold  py-2 text-[#465775] p-1">
                Don&apos;t fear,
              </span>{" "}
              learn the right way.
            </span>

            <h1 className="text-start  font-[500] py-6 text-[#465775]">
              Get rid of your fear.
            </h1>
            <button className="p-2 px-4 text-lg my-4 bg-[#FF9671] rounded-full text-white font-semibold">
              Start Learning now!
            </button>
          </section>
        </section>
      </section>
    </>
  );
};

export default learn;
