'use client'

import Image from "next/image"
import React from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import aimage from '@/Components/Images/page_01.png'

const page=()=>{

  return(
    <div>
        <div className="flex items-center bg-pink-300 justify-center max-sm:hidden">
          <button className="mr-5">
            <FaArrowCircleLeft className="size-10"/>
          </button>

          <div className="flex h-screen">
            <Image src={aimage} className="w-fit"/>
            <Image src={aimage} className="w-fit"/>
          </div>
            
          <button className="ml-5">
            <FaArrowCircleRight className="size-10"/>
          </button>
        </div>

{/* ====================For smaller screens========================== */}
        <div className="flex items-center bg-pink-300 justify-center h-svh sm:hidden container">
          <Image src={aimage} className="w-fit"/>
        </div>

        {/* Bro, the height h-screen and h-lvh is not supported in your mobile device, find a way to change the height to respond to it */}
    </div>
  )
}

export default page