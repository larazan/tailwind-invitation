import React from "react";
import Link from "next/link";
import Image from "next/image";

import masker from "@/assets/img/masker.png"
import cuci from "@/assets/img/cuci.png"
import jarak from "@/assets/img/jarak.png"
import tangan from "@/assets/img/tangan.png"

export default function Protokol() {
  return (
    <>
      <section className=" bg-[#f2edea] z-20 h-full   w-full overflow-hidden2">
        <div class="py-20 max-w-7xl w-full md:mx-auto">
          <div class="flex flex-col items-center justify-center">
            <p class="font-semibold text-2xl md:text-3xl text-center">
              Protokol Kesehatan
            </p>
            <svg
              width="149"
              height="11"
              viewBox="0 0 149 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="ml-8"
            >
              <path
                d="M1.67188 9.3999C8.47091 1.6097 14.254 2.49642 19.8471 2.40267C27.6614 2.27169 29.4813 6.82827 34.7211 8.40847C40.8343 10.252 46.0658 6.57986 50.3153 5.33616C52.7986 4.60937 55.2927 4.14208 57.8344 4.20629C61.2436 4.29242 64.3176 7.7547 67.6538 8.64751C70.9373 9.52621 73.9298 8.81145 77.0033 7.05887C78.3838 6.27169 79.7089 5.34577 81.1075 4.61336C82.8666 3.69219 84.8003 3.23567 86.7383 3.04276M86.7383 3.04276C87.6873 2.9483 88.6373 2.91704 89.5684 2.92537M86.7383 3.04276C87.6284 2.96911 88.5845 2.92261 89.5684 2.92537M89.5684 2.92537C90.0742 2.9299 90.5744 2.94611 91.0658 2.97022M89.5684 2.92537C92.1615 2.93266 94.9479 3.28217 97.2279 4.37882C98.6523 5.06391 100.01 5.94486 101.418 6.68529C104.554 8.3338 107.57 8.94785 110.82 7.95964C114.122 6.95557 117.068 3.39238 120.472 3.19205C123.01 3.04269 125.519 3.42612 128.028 4.06923C132.32 5.16977 138.15 9.6473 146.672 3.55006"
                stroke="#FF6D42"
                stroke-width="3"
                stroke-linecap="round"
              ></path>
            </svg>
          </div>
          <div class="flex items-center justify-center md:mt-8">
            <div class="w-full flex flex-col md:flex-row  items-center justify-around">
              <div class="flex flex-col items-center justify-center ">
                
                <div class="mt-10">
                  <Image
                    src={masker}
                    alt="detail image"
                    loading="lazy"
                    width="250"
                    height="250"
                  />
                </div>
                <div class="flex w-full xs:w-auto justify-center pt-3 px-4">
                  {/* <span class="text-xl font-medium">01.</span> */}
                  <div class="flex flex-col ml-3 max-w-[264px]">
                    <span class="text-xl font-semibold">Memakai Masker</span>
                  </div>
                </div>
              </div>
              <div class="flex flex-col items-center justify-center">
                
                <div class="flex justify-center items-center mt-10 bg-[#ffcfb9] rounded-full">
                  <Image
                    src={tangan}
                    alt="detail image"
                    loading="lazy"
                    // width="250"
                    // height="250"
                    className="h-full object-cover"
                  />
                </div>
                <div class="flex w-full xs:w-auto justify-center pt-3 px-4">
                  {/* <span class="text-xl font-medium">02.</span> */}
                  <div class="flex flex-col ml-3 max-w-[264px]">
                    <span class="text-xl font-semibold">Mencuci Tangan</span>
                  </div>
                </div>
              </div>
              <div class="flex flex-col items-center justify-center">
                
                <div class="flex justify-center items-center mt-10 bg-[#ffcfb9] rounded-full">
                  <Image
                    src={jarak}
                    alt="detail image"
                    loading="lazy"
                    width="250"
                    height="250"
                    className=" object-fit"
                  />
                </div>
                <div class="flex w-full xs:w-auto justify-center pt-3 px-4">
                  {/* <span class="text-xl font-medium">02.</span> */}
                  <div class="flex flex-col ml-3 max-w-[264px]">
                    <span class="text-xl font-semibold">Menjaga Jarak</span>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
