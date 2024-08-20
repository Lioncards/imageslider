'use client'

import Image from "next/image"
import React, { useEffect, useRef } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import aimage from '@/Components/Images/page_01.png'
import NewCSS from '@/Components/NewCSS.module.css'
import { comicPages } from "@/Components/Imagesmodule";
import abimage from '@/Components/Images/0087-001.png'

const page=()=>{

  const twoPages= comicPages.slice(0,2)

  return(
    <div>
        <div className="bg-pink-300 flex h-screen overflow-x-scroll overflow-y-hidden flex-row-reverse">
            <div className="flex items-center bg-pink-300 justify-center max-sm:hidden w-screen h-screen flex-shrink-0 relative">

              <div className={NewCSS.leftsideShadow}>
                  <h1 className="opacity-0">pbfsnrsnrsnnrnrfnnrfhnfnsnem r</h1>
              </div>

              <div className="flex h-screen relative">
                <button className={NewCSS.leftsideButton}>
                  <FaArrowCircleLeft className="size-10"/>
                </button>

                <Image src={aimage} className="w-fit" alt=""/>
                <Image src={abimage} className="w-fit" alt=""/>

                <button className={NewCSS.rightsideButton}>
                  <FaArrowCircleRight className="size-10"/>
                </button>
              </div>

              <div className={NewCSS.rightSideShadow}>
                  <h1 className="opacity-0">pbfsnrsnrsnnrnrfnnrfhnfnsnem r</h1>
              </div>
                
            </div>


              <div className="flex items-center bg-pink-300 justify-center max-sm:hidden w-screen h-screen flex-shrink-0 relative">

                <div className={NewCSS.leftsideShadow}>
                    <h1 className="opacity-0">pbfsnrsnrsnnrnrfnnrfhnfnsnem r</h1>
                </div>

                <div className="flex h-screen relative">
                  <button className={NewCSS.leftsideButton}>
                    <FaArrowCircleLeft className="size-10"/>
                  </button>

                  <Image src={twoPages[1]} className="w-fit" alt=""/>
                  <Image src={twoPages[0]} className="w-fit" alt=""/>

                  <button className={NewCSS.rightsideButton}>
                    <FaArrowCircleRight className="size-10"/>
                  </button>
                </div>

                <div className={NewCSS.rightSideShadow}>
                    <h1 className="opacity-0">pbfsnrsnrsnnrnrfnnrfhnfnsnem r</h1>
                </div>
                
              </div>

            
          
            


            {/* <div className="flex items-center bg-pink-300 justify-center max-sm:hidden w-screen h-screen flex-shrink-0 relative">

              <div className={NewCSS.leftsideShadow}>
                  <h1 className="opacity-0">pbfsnrsnrsnnrnrfnnrfhnfnsnem r</h1>
              </div>

              <div className="flex h-screen relative">
                <button className={NewCSS.leftsideButton}>
                  <FaArrowCircleLeft className="size-10"/>
                </button>

                <Image src={aimage} className="w-fit" alt=""/>
                <Image src={aimage} className="w-fit" alt=""/>

                <button className={NewCSS.rightsideButton}>
                  <FaArrowCircleRight className="size-10"/>
                </button>
              </div>

              <div className={NewCSS.rightSideShadow}>
                  <h1 className="opacity-0">pbfsnrsnrsnnrnrfnnrfhnfnsnem r</h1>
              </div>
                  
            </div> */}

            
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