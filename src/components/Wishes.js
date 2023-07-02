import React from "react";
import Link from "next/link";
import Image from "next/image";

import masker from "@/assets/img/masker.png"
import cuci from "@/assets/img/cuci.png"
import jarak from "@/assets/img/jarak.png"
import tangan from "@/assets/img/tangan.png"

export default function Wishes() {
  return (
    <>
      <section className=" bg-[#f2edea] z-20 h-full   w-full overflow-hidden2">
        <div className="min-h-screen py-16 w-full flex flex-col space-y-8 justify-center items-center">
            <div className="relative flex flex-col space-y-7 p-10 justify-center items-center mx-auto max-w-4xl w-9/12 md:w-8/12 ">
                <div>
                    <span className="text-3xl text-center font-brittany text-black">Wedding Wishes</span>
                </div>
                <div className="flex flex-col items-center justify-center space-y-4">
                    <input type="text" id="nama" name="nama" placeholder="Nama" className="w-80 appearance-none rounded-full border-0 bg-white p-2 px-4 focus:ring-2 focus:ring-orange-500 shadow-lg" />
                    <input type="text" id="alamat" name="alamat" placeholder="Alamat" className="w-80 appearance-none rounded-full border-0 bg-white p-2 px-4 focus:ring-2 focus:ring-orange-500 shadow-lg" />
                    <textarea  id="harapan" name="harapan" placeholder="Tulis harapan kamu" className="w-80 h-40 appearance-none rounded-lg border-0 bg-white p-2 px-4 focus:ring-2 focus:ring-orange-500 shadow-lg" ></textarea>
                    <button className="w-80 rounded-full bg-[#6a8369] p-2 px-4 text-white opacity-95 hover:opacity-100">Kirim</button>
                </div>
            </div>
            <div className="relative flex flex-col space-y-7 p-10 justify-center items-center mx-auto max-w-4xl w-9/12 md:w-8/12 ">
            <div>
              <span className="text-3xl text-center font-brittany text-black">
                Wedding Gift
              </span>
            </div>
            <div className="text-center text-sm leading-tight2 text-black">
              <span>
                Doa restu anda merupakan karunia yang sangat berarti bagi kami. 
                Dan jika memberi adalah ungkapan tanda kasih anda, anda dapat memberi hadiah secara digital melalui pengisian data dan metode pembayaran dibawah ini.
              </span>
            </div>
            <button className="w-80 rounded-full bg-[#6a8369] p-2 px-4 text-white opacity-95 hover:opacity-100">Kirim Hadiah</button>
          </div>
        </div>
      </section>
    </>
  );
}
