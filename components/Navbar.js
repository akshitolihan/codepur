import React, { useState } from "react";
import Head from "next/head";
import extra from "../styles/Extra.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { CgMenuLeftAlt } from "react-icons/cg";
import { MdEmojiPeople } from "react-icons/md";

const Navbar = (props) => {
  const router = useRouter();
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <>
      <main className="">
        <div className="pb-20 md:pb-20 text-[#2F4858] ">
          <nav className="justify-around rounded-b-xl md:justify-around pb-[84px] w-full mx-auto flex-row fixed bg-[#69F0AE] z-[1]">
            <nav className="justify-around rounded-b-2xl md:justify-around pb-4 w-full mx-auto flex-row fixed bg-[#ffffff] z-[1]">
              <div
                className={`hidden w-full md:flex justify-around pt-4 -mb-4 `}
              >
                <div id={extra.edu} className="px-2">
                  <Link href="/" passHref>
                    <div className="flex">
                      <Image
                        className="p-4"
                        src="/codepur-nav.svg"
                        alt="logo"
                        height={36}
                        width={36}
                      />
                      <h1 className="m-2 flex justify-center text-4xl font-[600] tracking-wider mt-2 cursor-pointer text-[#69F0AE]">
                        codepur
                      </h1>
                    </div>
                  </Link>
                </div>
                <span className="hidden md:flex text-base text-[#2F4858] font-[600] pt-6 justify-evenly">
                  <span
                    className={`${
                      router.pathname == "/" ? "active" : ""
                    } px-4 rounded-full`}
                  >
                    <Link href="/">
                      <a
                        className={`${
                          router.pathname == "/" ? "active-link" : ""
                        } px-2 py-3 rounded-full`}
                      >
                        Home
                      </a>
                    </Link>
                  </span>

                  <span
                    className={`${
                      router.pathname == "/blog" ? "active" : ""
                    } px-4 rounded-full`}
                  >
                    <Link href="/blog">
                      <a
                        className={`${
                          router.pathname == "/blog" ? "active-link" : ""
                        } px-2 py-3 rounded-full`}
                      >
                        Blog
                      </a>
                    </Link>
                  </span>
                  <span
                    className={`${
                      router.pathname == "/about" ? "active" : ""
                    } px-4 rounded-full`}
                  >
                    <Link href="/about">
                      <a
                        className={`${
                          router.pathname == "/about" ? "active-link" : ""
                        } px-2 py-3 rounded-full`}
                      >
                        About
                      </a>
                    </Link>
                  </span>
                </span>
                <div className="flex p-4">
                  <button className="bg-[#ffffff] px-2 py-1 text-[#2F4858] rounded-3xl mx-1 text-md font-semibold">
                    Log in
                  </button>
                  <button className="bg-[#69F0AE] px-2 py-1 text-white rounded-3xl mx-1 text-md font-semibold">
                    Sign Up
                  </button>
                </div>
              </div>
              <div className="md:hidden w-full justify-evenly">
                <div className="flex justify-around">
                  <button
                    type="button"
                    className="text-[#ffffff] "
                    onClick={handleClick}
                  >
                    <CgMenuLeftAlt className="text-3xl" />
                  </button>
                  <div className="px-2">
                    <Link href="/" passHref>
                      <div className="flex">
                        <h1 className="m-2 flex justify-center text-4xl font-[600]  tracking-wider mt-2 cursor-pointer text-[#ffffff]">
                          donatepur
                        </h1>
                      </div>
                    </Link>
                  </div>
                  <div className="flex pt-4">
                    <MdEmojiPeople className="text-3xl text-[#ffffff]" />
                  </div>
                </div>
                <div className={`${active ? "" : "hidden"}   w-full `}>
                  <div className="w-full flex jusitfy-around flex-col text-[#ffffff] px-8">
                    <Link href="/">
                      <a className="w-auto py-2 rounded text-md">Home</a>
                    </Link>
                    <Link href="/blog">
                      <a className="w-auto py-2 rounded text-md">Blog</a>
                    </Link>
                    <Link href="/about">
                      <a className="w-auto py-2 rounded text-md">About</a>
                    </Link>
                  </div>
                </div>
              </div>
              {/* <div className="bg-[#69F0AE] p-[2px] w-full my-4 rounded-b-xl fixed z-1"></div> */}
            </nav>
          </nav>
        </div>
      </main>
    </>
  );
};

export default Navbar;
