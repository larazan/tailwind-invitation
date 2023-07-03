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
          <div className="relative xs:flex-col md:flex  mx-auto max-w-4xl w-9/12 md:h-96  rounded-2xl bg-transparent shadow">
            
            <div className="w-full py-4 flex-col md:flex justify-center items-center rounded-2xl bg-white md:pb-10 opacity-80">
                <div className="flex justify-center w-full md:w-1/2">
                  <span className="text-3xl text-center font-brittany text-black">
                      We are <br /> getting <br /> married
                  </span>
                </div>
                <div className="flex-col py-10 justify-center w-full md:w-1/2">
                  <div className="text-2xl md:text-lg text-center font-brittany font-bold text-black">
                    Anita Ramadani Rachmah
                  </div>
                  <div className="text-5xl text-center font-brittany font-bold text-black">&</div>
                  <div className="text-2xl md:text-lg text-center font-brittany font-bold text-black">
                    Alfian Nurdiansyah
                  </div>
                </div>
            </div>
            <div className="hidden md:block absolute md:w-1/2 md:right-0  rounded-2xl  h-full shadow-lg shadow-blue-500/50 opacity-100">
              <Image src={prewed} alt="" className="rounded-2xl object-cover h-full " />
            </div>
          </div>
        </div>
      </section>
      </>
    )
}