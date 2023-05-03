import React from "react";
import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { AiFillGoogleCircle } from "react-icons/ai";

const forgot = () => {
  return (
    <>
      <Head>
        <title>Auth</title>
        <link rel="icon" href="/codepur-nav.svg" />
      </Head>
      <section className="shadow-even p-4 m-10 z-10 relative top-28">
        <div className="flex justify-center ">
          <span className="a-width text-start font-bold  py-2 bg-gradient-to-r from-[#FF9671] to-[#FF6F91] text-transparent bg-clip-text hover:bg-gradient-to-l p-1">
            <span className="text-start font-bold  py-2 text-[#465775] p-4">
              Reset Password
            </span>
          </span>
        </div>

        <section className="flex justify-center">
          <section>kkkkk
            <form action="">
              <h1 className="text-[#465775] font-semibold text-sm p-2">
                Enter Your Email
              </h1>
              <input
                className="m-2 p-2 rounded-xl h-10 outline-0 border-2 w-72"
                type="email"
              />

              <button
                className="block m-2 p-2 rounded-xl w-72 bg-gradient-to-r from-[#FF9671] to-[#FF6F91] hover:bg-gradient-to-l text-white font-semibold"
                type="submit"
              >
                Reset Password
              </button>
              <h1 className="text-center text-[#465775] font-semibold text-sm p-2">
                or
              </h1>

              <section className="flex justify-between">
                <h1 className="text-center text-[#465775] font-semibold text-sm p-2">
                  Remember Password ?
                </h1>
                <Link href="/auth/login">
                  <a href="" className="text-blue-500 p-2">
                    Sign in
                  </a>
                </Link>
              </section>
            </form>
          </section>
        </section>
      </section>
    </>
  );
};

export default forgot;
