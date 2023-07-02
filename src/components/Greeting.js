import React from "react";
import Link from "next/link";
import Image from "next/image";

import bg from "@/assets/img/bg-art.jpg";
import prewed from "@/assets/img/prewed2.jpg";


export default function Greeting() {
    return (
      <>
        <section
        className=" bg-pink-200 z-20 min-h-screen w-full overflow-hidden2"
        style={{
          backgroundImage: `url(${bg.src})`,
          width: "100%",
          height: "100%",
          transition: 'all 1s ease-out',
        }}
      >
        <div className="min-h-screen w-full flex justify-center items-center">
          <div className="relative flex  mx-auto max-w-4xl w-9/12 h-96  rounded-2xl bg-transparent shadow">
            
            <div className="w-full py-4 flex justify-center items-center rounded-2xl bg-white pb-10 opacity-80">
                <div className="w-1/2">
                <span className="text-3xl text-center font-brittany">
                    We are <br /> getting <br /> married
                </span>
                </div>
            </div>
            <div className="absolute w-1/2 right-0 z-20 rounded-2xl  h-full shadow-lg shadow-blue-500/50 opacity-100">
              <Image src={prewed} alt="" className="rounded-2xl object-cover h-full " />
            </div>
          </div>
        </div>
      </section>
      </>
    )
}