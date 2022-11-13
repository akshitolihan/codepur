import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Code1 from "../components/Code1";
import extra from "../styles/Extra.module.css";
import Video from "../components/Video";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReactPlayer from "react-player";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";
// import Tiranga from '../public/Tiranga.mp4';
export default function Home() {
  const [isPlaying] = useState(true);
  return (
    <>
      <Head>
        <title>Codepur</title>
        <link rel="icon" href="/codepur-nav.svg" />
      </Head>
      <Navbar />

      <section className="flex justify-evenly w-full bg py-32 pb-8 mb-10">
        <section className="">
          <h1
            id={extra.eu}
            className="py-4 font-bold text-6xl typed-out text-start my-4 text-[#845EC2]"
          >
            Want to Learn Code!
          </h1>
          <h1
            id={extra.eu}
            className="text-lg text-start text-[#9CB0A4] my-6 mb-12 max-w-lg"
          >
            Learn to code from the basics through our platform. Choose courses
            as per your interest and start learning.
          </h1>
          <button className="px-6 p-2 bg-[#845EC2] rounded-full text-white font-semibold text-xl animate-bounce1">
            Enroll
          </button>
        </section>
        <section>
          <div className="flex mt-4 shadow-even rounded-lg p-4 bg-[#2F4858]">
            <Image
              className="p-4 rounded-lg overflow-visible"
              src="/code.svg"
              alt="logo"
              height={245}
              width={400}
            />
          </div>
        </section>
      </section>

      <section className="py-16 bg-[#845EC2] mt-28 m-4 shadow-even rounded-lg">
        <h1 className="py-8 text-center text-4xl font-bold text-[#2F4858]">
          What we have for you!
        </h1>
        <section className="flex justify-evenly py-10">
          <section className="bg-[#ffffff] p-2 shaddow-even rounded-lg">
            <h1 className="text-xl font-semibold text-[#2F4858]">
              Reading Mateirial
            </h1>
          </section>
          <section className="bg-[#ffffff] p-2 shaddow-even rounded-lg">
            <h1 className="text-xl font-semibold text-[#2F4858]">Codes</h1>
          </section>
          <section className="bg-[#ffffff] p-2 shaddow-even rounded-lg">
            <h1 className="text-xl font-semibold text-[#2F4858]">Videos</h1>
          </section>
        </section>
      </section>

      <section className="my-40 bg-gradient-to-r m-4 shadow-even rounded-lg bg-[#2F4858]">
        <h1 className="py-8 text-center text-4xl font-bold text-[#ffffff]">
          What can you learn?
        </h1>
        <section className="grid md:grid-cols-4 justify-evenly">
          <section className="flex justify-center py-10">
            <h1 className="text-xl font-semibold text-[#ffffff] bg-[#FF7BA6]  p-2 shaddow-even rounded-lg ">
              C++
            </h1>
          </section>
          <section className="flex justify-center py-10">
            <h1 className="text-xl font-semibold text-[#ffffff] bg-[#FF9485]  p-2 shaddow-even rounded-lg ">
              Python
            </h1>
          </section>
          <section className="flex justify-center py-10">
            <h1 className="text-xl font-semibold text-[#ffffff] bg-[#FFB56B]  p-2 shaddow-even rounded-lg ">
              JavaScript
            </h1>
          </section>
          <section className="flex justify-center py-10">
            <h1 className="text-xl font-semibold text-[#ffffff] bg-[#FFD762]  p-2 shaddow-even rounded-lg ">
              HTML
            </h1>
          </section>
          <section className="flex justify-center py-10">
            <h1 className="text-xl font-semibold text-[#ffffff] bg-[#FF7BA6]  p-2 shaddow-even rounded-lg ">
              C++
            </h1>
          </section>
          <section className="flex justify-center py-10">
            <h1 className="text-xl font-semibold text-[#ffffff] bg-[#FF9485]  p-2 shaddow-even rounded-lg ">
              Python
            </h1>
          </section>
          <section className="flex justify-center py-10">
            <h1 className="text-xl font-semibold text-[#ffffff] bg-[#FFB56B]  p-2 shaddow-even rounded-lg ">
              JavaScript
            </h1>
          </section>
          <section className="flex justify-center py-10">
            <h1 className="text-xl font-semibold text-[#ffffff] bg-[#FFD762]  p-2 shaddow-even rounded-lg ">
              HTML
            </h1>
          </section>
        </section>
      </section>
      <section>
        <section className="grid justify-evenly py-16">
          <h1 className="py-8 text-center text-4xl font-bold text-[#2F4858]">
            Reading Mateirial!
          </h1>
          <section className="max-w-2xl p-8 mb bg-[#ffffff] rounded-lg text-[#2F4858] text-justify shadow-even">
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
        <div className="mt- py-16">
          <h1 className="py-8 text-center text-4xl font-bold text-[#2F4858]">
            Coding Mateirial
          </h1>
          <Code1
            heading="Program to print in C++"
            code={`#include <iostream>

using namespace std;

int main()
{
    cout<<"Hello Coders";

    return 0;
}`}
          />
        </div>
      </section>
      <section className="grid justify-evenly py-16  my-4 ">
        <h1 className="py-8 text-center text-4xl font-bold text-[#2F4858]">
          Videos
        </h1>
        <section className="flex justify-center">
          <video
            className="pt-[-200px] bg-[#ffffff] max-w-lg h-auto w-auto rounded-lg"
            src="/Nodejs_install.mp4"
            controls
            poster="video-poster.jpg"
          ></video>
        </section>
      </section>
      <section className=" bg-[#2F4858]">
        <section className="flex justify-around ">
          <section className="max-w-2xl my-10">
            <h1 className="p-4 text-4xl font-bold text-[#845EC2]">
              Get certified!
            </h1>
            <h1 className="p-4 text-xl font-bold text-[#ffffff]">
              Complete a course
            </h1>
            <button className="px-4 py-2 m-4 bg-[#ffffff] rounded-full text-[#2F4858] font-semibold text-xl">
              Start Now!!
            </button>
          </section>
          <section className="max-w-2xl">
            <Image
              className=""
              src="/../certificate.svg"
              alt=""
              width="500px"
              height="300px"
            />
          </section>
        </section>
      </section>
      <Footer />
    </>
  );
}
