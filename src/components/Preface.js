import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import bg from "@/assets/img/bg-art.jpg";
import prewed from "@/assets/img/prewed1.jpg";

export default function Preface() {
  const [openInvitation, setOpenInvitation] = useState(false)

  const clickOpen = () => {
    setOpenInvitation(!openInvitation);
  };

  return (
    <>
      <section
        className={` ${openInvitation === false ? 'flex' : 'hidden' } fixed bg-pink-200 z-20 h-screen w-full overflow-hidden`}
        style={{
          backgroundImage: `url(${bg.src})`,
          width: "100%",
          height: "100%",
          transition: 'all 1s ease-out',
        }}
      >
        <div className="h-screen w-full flex justify-center items-center">
          <div className="relative flex flex-col mx-auto w-11/12 md:w-[450px] bg-white rounded-2xl ">
            <div>
              <Image src={prewed} alt="" className="rounded-2xl shadow-lg shadow-blue-500/50" />
            </div>
            <div className="py-4 flex justify-center items-center pb-10">
              <div className="flex flex-col text-center space-y-3">
                <span className="text-md font-light text-black">
                  We Invite You to the Wedding of
                </span>
                <span className="text-3xl font-brittany text-black">Rahmah & Fian</span>
                <span className="text-lg font-semibold text-black">14 oktober 2023</span>
              </div>
            </div>
            <div className="">
              <div className="absolute -bottom-5 left-0 right-0 mx-auto w-2/3 md:w-1/2 bg-[#6a8369] opacity-95 hover:opacity-100 rounded-full cursor-pointer" onClick={clickOpen}>
                <div className="flex py-2 space-x-1 items-center justify-center text-white">
                  <span className="font-bold text-md md:text-lg">Buka Undangan</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 md:w-6 md:h-6"
                    >
                      <path d="M19.5 22.5a3 3 0 003-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 01-.712 1.321l-5.683-3.06a1.5 1.5 0 00-1.422 0l-5.683 3.06a.75.75 0 01-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 003 3h15z" />
                      <path d="M1.5 9.589v-.745a3 3 0 011.578-2.641l7.5-4.039a3 3 0 012.844 0l7.5 4.039A3 3 0 0122.5 8.844v.745l-8.426 4.926-.652-.35a3 3 0 00-2.844 0l-.652.35L1.5 9.59z" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
