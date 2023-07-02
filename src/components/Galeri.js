import React from "react";
import Link from "next/link";
import Image from "next/image";

import galeri1 from "@/assets/img/galeri1.jpg"
import galeri2 from "@/assets/img/galeri2.jpg"
import galeri3 from "@/assets/img/galeri3.jpg"
import galeri4 from "@/assets/img/galeri4.jpg"
import galeri5 from "@/assets/img/galeri5.jpg"
import galeri6 from "@/assets/img/galeri6.jpg"
import galeri7 from "@/assets/img/galeri7.jpg"
import galeri8 from "@/assets/img/galeri8.jpg"
import galeri9 from "@/assets/img/galeri9.jpg"
import galeri10 from "@/assets/img/galeri10.jpg"
import galeri11 from "@/assets/img/galeri11.jpg"


export default function Galeri() {
  return (
    <>
      <section className="py-20 flex bg-[#f2edea] overflow-y-auto  md:min-h-screen w-full">
        <div className=" w-full flex justify-center items-center">
          <div className="flex  mx-auto max-w-4xl w-9/12 h-96 ">
          
            <div className="py-2 columns-1 md:columns-3">
                <Image src={galeri1} alt="" className="mb-4 rounded-md cursor-zoom-in" />
                <Image src={galeri2} alt="" className="mb-4 rounded-md cursor-zoom-in" />
                <Image src={galeri3} alt="" className="mb-4 rounded-md cursor-zoom-in" />
                <Image src={galeri4} alt="" className="mb-4 rounded-md cursor-zoom-in" />
                <Image src={galeri5} alt="" className="mb-4 rounded-md cursor-zoom-in" />
                <Image src={galeri6} alt="" className="mb-4 rounded-md cursor-zoom-in" />
                <Image src={galeri7} alt="" className="mb-4 rounded-md cursor-zoom-in" />
                <Image src={galeri8} alt="" className="mb-4 rounded-md cursor-zoom-in" />
                <Image src={galeri9} alt="" className="mb-4 rounded-md cursor-zoom-in" />
                <Image src={galeri10} alt="" className="mb-4 rounded-md cursor-zoom-in" />
                <Image src={galeri11} alt="" className="mb-4 rounded-md cursor-zoom-in" />
            </div>
            </div>
        </div>
      </section>
    </>
  );
}
