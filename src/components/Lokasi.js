import React from "react";
import Link from "next/link";
import Image from "next/image";

import bg from "@/assets/img/bg-art.jpg";

export default function Lokasi() {
  return (
    <>
      <section
        className=" bg-pink-200 z-20 h-full min-h-screen  w-full overflow-hidden2"
        style={{
          backgroundImage: `url(${bg.src})`,
          width: "100%",
          height: "100%",
          transition: "all 1s ease-out",
        }}
      >
        <div className="min-h-screen py-16 w-full flex flex-col space-y-8 justify-center items-center">
          <div className="relative flex flex-col space-y-7 p-10 justify-center items-center mx-auto max-w-4xl w-8/12 rounded-2xl bg-white shadow opacity-80">
            <div>
              <span className="text-3xl text-center font-brittany">
                Wedding Venue
              </span>
            </div>
            <div className=" text-center">
              <span>
                Jika anda akan hadir pada pernikahan kami, harap melakukan reservasi pada form RSVP di bawah ini
              </span>
            </div>
          </div>

          <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl w-9/12 ">
            <div className="relative flex flex-col space-y-7 p-3 h-full justify-center2 items-center rounded-2xl bg-white pb-10 opacity-90">
              <div className="absolute -top-5 z-20 "> 
                <div className="rounded-full bg-white text-gray-600 px-3 py-3 border shadow-lg shadow-pink-500/50">
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
   <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
</svg>
                    </span>
                </div>
              </div>
              <div className="flex flex-col py-6 space-y-3 justify-center items-center rounded-2xl w-full bg-white border shadow-lg  opacity-100">
                <span className="text-lg text-center font-brittany">Akad</span>
                <div className="flex flex-col items-center space-y-1">
                    <span className="text-xs font-semibold">Jumat</span>
                    <div className="flex items-center">
                        <div className="pr-2 border-r-4 border-slate-950">
                        <span className="text-[40px] font-semibold">13</span>
                        </div>
                        <div className="flex flex-col pl-2">
                            <span className="text-sm font-semibold">Oktober</span>
                            <span className="text-[20px] font-semibold">2023</span>
                        </div>
                    </div>
                    <span className="text-xs font-semibold">14:00 - Selesai WIB</span>
                </div>
              </div>
              <div className="flex flex-col space-y-3 justify-center">
                <span className="text-sm leading-tight text-center font-semibold">
                  Rumah Mempelai Wanita
                </span>
                <div className="flex flex-col justify-center items-center text-center text-xs leading-tight">
                  <span>Jl. Aries Munandar Gang 1 no 997, Kota Malang</span>
                </div>
                <div className="flex items-center justify-center space-x-1 border-2 border-pink-400 bg-pink-400 hover:bg-pink-500 rounded-full px-1 py-1 cursor-pointer">
                  <span className="text-md text-white">Lokasi</span>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col space-y-7 p-3 h-full justify-center items-center rounded-2xl bg-white pb-10 opacity-90">
            <div className="absolute -top-5 z-20 "> 
                <div className="rounded-full bg-white text-gray-600 px-3 py-3 border shadow-lg shadow-pink-500/50">
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
   <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
</svg>
                    </span>
                </div>
              </div>
              <div className="flex flex-col py-6 space-y-3 justify-center items-center rounded-2xl w-full bg-white border shadow-lg  opacity-100">
                <span className="text-lg text-center font-brittany">Resepsi</span>
                <div className="flex flex-col items-center space-y-1">
                    <span className="text-xs font-semibold">Sabtu</span>
                    <div className="flex items-center">
                        <div className="pr-2 border-r-4 border-slate-950">
                        <span className="text-[40px] font-semibold">14</span>
                        </div>
                        <div className="flex flex-col pl-2">
                            <span className="text-sm font-semibold">Oktober</span>
                            <span className="text-[20px] font-semibold">2023</span>
                        </div>
                    </div>
                    <span className="text-xs font-semibold">10:00 - 13:30 WIB</span>
                </div>
              </div>
              <div className="flex flex-col space-y-3 justify-center">
                <span className="text-sm leading-tight text-center font-semibold">
                  Gedung Sasana Krida Universitas Negeri Malang
                </span>
                <div className="flex flex-col justify-center items-center text-center text-xs leading-tight">
                  <span>Jl. Veteran Sumbersari, Kec. Lowokwaru, Kota Malang</span>
                </div>
                <div className="flex items-center justify-center space-x-1 border-2 border-pink-400 bg-pink-400 hover:bg-pink-500 rounded-full px-1 py-1 cursor-pointer">
                  <span className="text-md text-white">Lokasi</span>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </section>
    </>
  );
}
