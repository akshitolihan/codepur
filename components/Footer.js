import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Code1 from "../components/Code1";
import extra from "../styles/Extra.module.css";
import Video from "../components/Video";
import Navbar from "../components/Navbar";
import ReactPlayer from "react-player";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer className="mt-10 bg-[#ffffff]">
        <section className="flex justify-between ">
          <section className="bg-[#845EC2] flex justify-center w-full py-10 shadow-even rounded-lg m-2">
            <section className="grid justify-center">
              <Link href="/" passHref>
                <button
                  id={extra.edu}
                  className="m-2 text-4xl font-bold tracking-wider mt-2 text-[#ffffff]"
                >
                  codepur
                </button>
              </Link>
              <h1 className="text-[#ffffff] font-semibold">
                A place of learning for all the folks!
              </h1>
            </section>
          </section>
          <section className="bg-[#ADAFFF] w-full py-10 shadow-even rounded-lg m-2">
            <h1 className="flex justify-center text-2xl font-semibold text-[#ffffff]">
              We Social
            </h1>
            <section className="flex justify-center">
              <AiFillInstagram className="m-4 text-2xl text-[#ffffff]" />{" "}
              <AiFillYoutube className="m-4 text-2xl text-[#ffffff]" />{" "}
              <AiFillGithub className="m-4 text-2xl text-[#ffffff]" />
            </section>
          </section>
          <section className="bg-[#FEAA2E] w-full py-10 shadow-even rounded-lg m-2 grid justify-center">
            <h1
              id={extra.caveat}
              className="flex justify-center text-2xl font-semibold text-[#ffffff]"
            >
              Made with ❤ by Villager
            </h1>
            <section className="flex justify-center">
              <button
                id={extra.caveat}
                className="text-2xl font-semibold bg-[#ffffff] text-[#FEAA2E] px-2 leading-[8px] rounded-full "
              >
                Know More
              </button>
            </section>
          </section>
        </section>
      </footer>
    </>
  );
};

export default Footer;
