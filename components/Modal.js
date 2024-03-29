import React, { useState } from "react";
import { AiFillFire, AiFillPlayCircle } from "react-icons/ai";
import Image from "next/image";

function Modal({ children, shown, close }) {
  return shown ? (
    <div
      className="modal-backdrop"
      onClick={() => {
        // close modal when outside of modal is clicked
        close();
      }}
    >
      <div
        className="modal-content"
        onClick={(e) => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}
      >
        <section className="flex justify-center">
          <video
            autoplay="true"
            className="pt-[-200px] bg-[#ffffff] max-w-2xl h-auto w-auto"
            src="/Nodejs_install.mp4"
            controls
            poster="video-poster.jpg"
          ></video>
        </section>
        {children}
      </div>
    </div>
  ) : null;
}

const TestModals = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex md:flex-col justify-center items-center mt-0 ">
      <section>
        <div
          className="flex justify-center rounded-lg p-4 bg-[#2F4858] h-auto w-auto"
          onClick={() => setShowModal(true)}
        >
          <Image
            className="p-4 rounded-lg"
            src="/code.svg"
            alt="logo"
            height={245}
            width={400}
          />
        </div>
      </section>
      <section className="flex justify-center relative">
        <button
          className="text-white bg-[#FF9671] flex justify-center items-center
      font-bold px-6 h-12 rounded-md shadow hover:shadow-lg outline-none focus:outline-none w-20 relative -top-44"
          type="button"
          onClick={() => setShowModal(true)}
        >
          {" "}
          <AiFillPlayCircle className="text-4xl text-white hover:text-[#ffffff]" />
        </button>
      </section>
      {showModal ? (
        <div className="-mt-20 ">
          <Modal
            shown={showModal}
            close={() => {
              setShowModal(false);
            }}
          ></Modal>
        </div>
      ) : null}
    </div>
  );
};

export default TestModals;
