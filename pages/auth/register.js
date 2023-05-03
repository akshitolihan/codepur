import React from "react";
import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { AiFillGoogleCircle } from "react-icons/ai";
const register = () => {
  return (
    <>
      <Head>
        <title>Auth - Register</title>
        <link rel="icon" href="/codepur-nav.svg" />
      </Head>
      {/* <Navbar bgColor="#" /> */}
        <section className="shadow-even p-3 m-10 z-10">
          <div className="flex justify-center ">
            <span className="a-width text-start font-bold  py-2 bg-gradient-to-r from-[#FF9671] to-[#FF6F91] text-transparent bg-clip-text hover:bg-gradient-to-l p-1">
              <span className="text-start font-bold  py-2 text-[#465775] p-4">
                Welcome to
              </span>
              Codepur
            </span>
          </div>
          <h1 className="text-center text-[#465775] font-semibold text-sm p-2">
            Please enter your details
          </h1>
          <section className="flex justify-center ">
            <section>
              <form action="">
                <h1 className="text-[#465775] font-semibold text-sm p-2">
                  Name
                </h1>
                <input
                  className="m-2 p-2 rounded-xl h-10 outline-0 border-2 w-72"
                  type="text"
                />
                <h1 className="text-[#465775] font-semibold text-sm p-2">
                  Email
                </h1>
                <input
                  className="m-2 p-2 rounded-xl h-10 outline-0 border-2 w-72"
                  type="email"
                />
                <h1 className="text-[#465775] font-semibold text-sm p-2">
                  Password
                </h1>
                <input
                  className="m-2 p-2 rounded-xl h-10 outline-0 border-2 w-72"
                  type="passaord"
                />
                <button
                  className="block m-2 p-2 rounded-xl w-72 bg-gradient-to-r from-[#FF9671] to-[#FF6F91] hover:bg-gradient-to-l text-white font-semibold"
                  type="submit"
                >
                  Register
                </button>
                <h1 className="text-center text-[#465775] font-semibold text-sm p-2">
                  or
                </h1>
                <section
                  className="flex justify-center m-2 p-2 border-2 rounded-xl w-72 bg-gradient-to-r bg-white"
                  type="submit"
                >
                  <AiFillGoogleCircle className="text-2xl" />{" "}
                  <span className="px-2">Sign in with Google</span>
                </section>
                <section className="flex justify-between">
                  <h1 className="text-center text-[#465775] font-semibold text-sm p-2">
                    Have an account?
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

export default register;
