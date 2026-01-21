'use client'
import { useRef } from "react";
import {  bison } from '@/components/fonts/fonts';
import UnderlineSvg   from '@/assets/svg/UnderlineSvg.js'
import ArrowUpSvg  from '@/assets/svg/ArrowUpSvg';
import homeimg  from '@/assets/images/homehero.jpg';
import Image from "next/image";

import Link from 'next/link';





const HeroSection = () => {

  const heroRef = useRef(null);
   

  return (
    
<div
  ref={heroRef}
  className="flex flex-col gap-2 w-full  mt-[-100px] relative
            h-[550px] md:h-[673px]
             bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(${homeimg.src})`,
  }}
>
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/5 z-10"></div>

    <div className=" w-full  flex justify-center items-center  pt-[100px] z-20">
            <div className="flex flex-col gap-2 w-full relative    ">
            <div className=" flex flex-col gap-8  container mx-auto  px-3.5">

              <h2
                className={`
                    text-white
                    text-[50px]   leading-14 lg:leading-tight lg:text-[60px] xl:text-[80px]  pt-9
                    text-center

                    ${bison.className}
                `}
                >
                Everyone was born with <br /> a gift, let it{" "}
                <span className="relative inline-block">
                    <span className="relative z-10">shine...</span>

                    <span className="absolute left-0 right-0 bottom-[-5px] md:bottom-[-10px] z-0">
                    <UnderlineSvg className="w-[120px] md:w-[130px] lg:w-[150px]  xl:w-[190px] " />
                    </span>
                </span>
                </h2>
                <div className="   w-full px-3  sm:px-0  sm:w-[80%]  lg:w-[65%] mx-auto      ">
            <p className="text-white  text-sm sm:text-base md:text-lg  text-center  font-light  text-white/70 ">IAMGIFTED Foundation supports families and empowers youth to discover and grow their unique talents through sports, education, and mental health initiatives.</p>
                </div>
                <div className="flex  flex-wrap flex-row items-center  gap-2 w-full   justify-center">
                
                  <Link href={'/donate'}>
               <button className="btn-animated bg-mint-cyan w-[160px] h-[50px]   group cursor-pointer relative overflow-hidden hover:border-[#8bc9c8]">
              <span className="btn-animated-hover bg-[#9dd6d5] group-hover:w-48 group-hover:h-44"></span>
              <span className="btn-animated-text text-black group-hover:text-gray-900  text-sm lg:text-base  font-semibold">
                Donate 
              </span>
            </button>
                      
              </Link>   

                  <Link href={'/donate'}>
               <button className="btn-animated bg-mint-cyan w-[196px] h-[50px]   group cursor-pointer relative overflow-hidden hover:border-[#8bc9c8]">
              <span className="btn-animated-hover bg-[#9dd6d5] group-hover:w-48 group-hover:h-44"></span>
              <span className="btn-animated-text text-black group-hover:text-gray-900  text-sm lg:text-base  font-semibold">
              Explore Our Impact
              </span>
            </button>
                      
              </Link>   
                  <div className="flex flex-row  gap-0 group cursor-pointer ">
                

                    <Link href="/donate ">
                      <button className="btn-donate group-hover:bg-lavender cursor-pointer  z-5    w-[198px] h-[50px] ">
                        <span className="btn-donate-hover group-hover:w-56 group-hover:h-56"></span>
                        <span className="btn-donate-text group-hover:text-black">
                       Open the App
                        </span>
                      </button>
                    </Link>
                
                    <Link href="/donate">
                      <button className="btn-icon group-hover:bg-lavender cursor-pointer z-5   ">
                        <span className="btn-icon-hover group-hover:translate-y-0"></span>
                        <ArrowUpSvg className="text-white group-hover:text-black z-10" />
                      </button>
                    </Link>
                
                  </div>
                
                </div>

            </div>
                    
               

              

              
          


            </div>
        </div>

     


 
    </div>
  )
}

export default HeroSection