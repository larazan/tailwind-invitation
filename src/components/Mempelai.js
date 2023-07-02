import React from "react";
import Link from "next/link";
import Image from "next/image";

import bg from "@/assets/img/bg-art.jpg";
import men from "@/assets/img/person1.jpg";
import women from "@/assets/img/person2.jpg";

export default function Mempelai() {
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
          <div className="relative flex flex-col space-y-7 p-10 justify-center items-center mx-auto max-w-4xl w-8/12 rounded-2xl bg-white shadow opacity-70">
            <div>
              <span className="text-3xl text-center font-brittany">
                Our wedding
              </span>
            </div>
            <div className=" text-center">
              <span>
                Tanpa mengurangi ras hormat, kami bermaksud mengundang
                Bapak/ibu/Saudara/i untuk menghadiri acara pernikahan kami
              </span>
            </div>
          </div>

          <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl w-9/12 ">
            <div className="flex flex-col space-y-7 h-full justify-center items-center rounded-2xl bg-white pb-10 opacity-80">
              <div className=" z-20 rounded-2xl  w-full shadow-lg shadow-blue-500/50 opacity-100">
                <Image
                  src={women}
                  alt=""
                  className="rounded-2xl object-cover h-full "
                />
              </div>
              <div className="flex flex-col space-y-3 justify-center">
                <span className="text-lg text-center font-brittany font-bold">
                  Anita Ramadani Rachmah
                </span>
                <div className="flex flex-col justify-center items-center text-xs leading-tight">
                  <span>Putri dari</span>
                  <span>Bapak Fatkhur Rakhman</span>
                  <span>&</span>
                  <span>Ibu Miftakhul Jannah</span>
                </div>
                <div className="flex items-center justify-center space-x-1 border rounded-full px-1 py-1 cursor-pointer text-white bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-brand-instagram"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
                      <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                      <path d="M16.5 7.5l0 .01"></path>
                    </svg>
                  </span>
                  <span className="text-xs">anitarachmah</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-7 h-full justify-center items-center rounded-2xl bg-white pb-10 opacity-80">
              <div className=" z-20 rounded-2xl  w-full shadow-lg shadow-blue-500/50 opacity-100">
                <Image
                  src={men}
                  alt=""
                  className="rounded-2xl object-cover h-full "
                />
              </div>
              <div className="flex flex-col space-y-3 justify-center">
                <span className="text-lg text-center font-brittany font-bold">
                  Alfian Nurdiansyah
                </span>
                <div className="flex flex-col justify-center items-center text-xs leading-tight">
                  <span>Putra dari</span>
                  <span>Bapak Turmuji</span>
                  <span>&</span>
                  <span>Ibu Itsna Mahsunah</span>
                </div>
                <div className="flex items-center justify-center space-x-1 border rounded-full px-1 py-1 cursor-pointer text-white bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-brand-instagram"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
                      <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                      <path d="M16.5 7.5l0 .01"></path>
                    </svg>
                  </span>
                  <span className="text-xs">fiansyah</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex p-8 justify-center2 items-center2 mx-auto2 max-w-4xl w-7/12 rounded-2xl bg-white shadow opacity-90">
            
            <div className="flex w-full justify-around text-center">
              <div className="flex flex-col space-y-1">
                <span className="text-2xl">104</span>
                <span className="text-xs font-semibold">Hari</span>
              </div>
              <div className="flex flex-col space-y-1">
                <span className="text-2xl">9</span>
                <span className="text-xs font-semibold">Jam</span>
              </div>
              <div className="flex flex-col space-y-1">
                <span className="text-2xl">13</span>
                <span className="text-xs font-semibold">Menit</span>
              </div>
              <div className="flex flex-col space-y-1">
                <span className="text-2xl">18</span>
                <span className="text-xs font-semibold">Detik</span>
              </div>
            </div>
            <div className="absolute -bottom-5 left-0 right-0 mx-auto w-1/2 bg-[#6a8369] opacity-95 hover:opacity-100 rounded-full cursor-pointer">
                <div className="flex py-2 space-x-1 items-center justify-center text-white">
                  
                  <span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-heart" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M11.5 21h-5.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4"></path>
   <path d="M16 3v4"></path>
   <path d="M8 3v4"></path>
   <path d="M4 11h16"></path>
   <path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z"></path>
</svg>
                  </span>
                  <span className="font-semibold text-md">Simpan Tanggal</span>
                </div>
              </div>
          </div>
        </div>
      </section>
    </>
  );
}
