'use client'

import Image from "next/image"
import React, { useEffect, useRef } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import aimage from '@/Components/Images/page_01.png'

const page=()=>{
  
  const ref= useRef(null)

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  return(
    <div>
        <div className="bg-pink-300 flex h-screen overflow-x-scroll overflow-y-hidden">
            <div className="flex items-center bg-pink-300 justify-center max-sm:hidden w-screen h-screen flex-shrink-0 relative">

              <div className="bg-gradient-to-r from-stone-700 absolute left-0 inset-y-0">
                  <h1 className="opacity-0">pbfsnrsnrsnnrnrfnnrfhnfnsnem r</h1>
              </div>

              <div className="flex h-screen relative">
                <button className="absolute inset-y-0 -left-20 peer-hover:visible">
                  <FaArrowCircleLeft className="size-10"/>
                </button>

                <Image src={aimage} className="w-fit" alt=""/>
                <Image src={aimage} className="w-fit" alt=""/>

                <button className="absolute inset-y-0 -right-20">
                  <FaArrowCircleRight className="size-10"/>
                </button>
              </div>

              <div className="bg-gradient-to-l from-stone-700 absolute right-0 inset-y-0">
                  <h1 className="opacity-0">pbfsnrsnrsnnrnrfnnrfhnfnsnem r</h1>
              </div>
                  
            </div>

            <div className="flex items-center bg-pink-300 justify-center max-sm:hidden w-screen h-screen flex-shrink-0 relative">
              <button className="mr-5">
                <FaArrowCircleLeft className="size-10"/>
              </button>

              <div className="flex h-screen">
                <Image src={aimage} className="w-fit" alt=""/>
                <Image src={aimage} className="w-fit" alt=""/>
              </div>
                
              <button className="ml-5">
                <FaArrowCircleRight className="size-10"/>
              </button>
            </div>
        </div>
        

{/* ====================For smaller screens========================== */}
        <div className="flex items-center bg-pink-300 justify-center absolute inset-0 sm:hidden">
          <Image src={aimage} className="w-fit" alt=""/>
        </div>

        {/* Bro, the height h-screen and h-lvh is not supported in your mobile device, find a way to change the height to respond to it */}
    </div>
  )
}

export default page