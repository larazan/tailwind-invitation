import React from "react";
import Link from "next/link";
import Image from "next/image";

import bg from "@/assets/img/bg-art.jpg";
import galeri from "@/assets/img/galeri12.jpg";


export default function Thanks() {
    return (
      <>
        <section
        className=" h-screen md:h-96 w-full"
        style={{
          backgroundImage: `url(${bg.src})`,
          width: "100%",
          height: "100%",
          transition: 'all 1s ease-out',
        }}
      >
        <div className="py-20 w-full flex justify-center items-center">
          <div className="relative xs:flex-col md:flex  mx-auto max-w-4xl w-9/12 h-96  rounded-2xl bg-white md:bg-transparent shadow">
            
            <div className="w-full py-4 flex justify-center items-center rounded-2xl bg-white pb-10 opacity-80">
                <div className="flex flex-col w-1/2 space-y-3">
                    <span className="text-3xl text-center font-brittany text-black">
                        Thank You
                    </span>
                    <span className="text-sm text-center text-black">
                        Terima kasih sudah bergabung di acara pernikahan kami
                    </span>
                </div>
                <div className="md:w-1/2"></div>
            </div>
            <div className="absolute w-full md:w-1/2 right-0 z-20 rounded-2xl  h-full shadow-lg shadow-blue-500/50 opacity-100">
              <Image src={galeri} alt="" className="rounded-2xl object-cover h-full " />
            </div>
          </div>
        </div>
      </section>
      </>
    )
}