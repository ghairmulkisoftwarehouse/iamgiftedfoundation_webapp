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
            h-auto sm:h-[550px] md:h-[673px]
             bg-cover bg-center bg-no-repeat pb-5  sm:pb-0"
  style={{
    backgroundImage: `url(${homeimg.src})`,
  }}
>
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/5 z-10"></div>

    <div className=" w-full  flex justify-center items-center  pt-[100px] z-20">
            <div className="flex flex-col gap-2 w-full relative    ">
            <div className=" flex flex-col gap-8   px-5 md:px-3.5  md:container mx-auto">
              <h2
                className={`
                    text-white
                    text-[50px]   leading-14 lg:leading-tight lg:text-[60px] xl:text-[80px]  pt-9
                    text-center

                    ${bison.className}
                `}
                >
          

                
                Everyone was born with a gift, <br  className=" hidden xs:block"/>let it {" "}
                <span className="relative inline-block">
                    <span className="relative z-10">shine...</span>

                    <span className="absolute left-0 right-0 bottom-[-5px] md:bottom-[-10px] z-0">
                    <UnderlineSvg className="w-[110px] lg:w-[130px]  xl:w-[180px] " />
                    </span>
                </span>
                </h2>
                <div className="   w-full px-3  sm:px-0  sm:w-[80%]  lg:w-[65%] mx-auto      ">
            <p className="text-white  text-sm sm:text-base md:text-lg  text-center  font-light  text-white/70 ">
          Every child is born with potential. The IAMGIFTED Foundation exists to help young people recognize their strengths, build confidence, and develop the skills they need to succeed—in school, in their communities, and in life.</p>
                </div>
                <div className="  grid grid-cols-2 xs:grid-cols-none xs:flex  xs:flex-wrap xs:flex-row items-center  gap-2 w-full   xs:justify-center">
                    


                  <Link href={'/donate'}>
               <button className="btn-animated  bg-mint-cyan w-full xs:w-[160px] h-[50px]   group cursor-pointer relative overflow-hidden hover:border-[#8bc9c8]">
              <span className="btn-animated-hover bg-[#9dd6d5] group-hover:w-48 group-hover:h-44"></span>
              <span className="btn-animated-text text-black group-hover:text-gray-900  text-[13px] xs:text-sm sm:text-base   font-semibold">
                Donate 
              </span>
            </button>
                      
              </Link>   

                  <Link href={'/impact'}>
               <button className="btn-animated    bg-mint-cyan w-full xs:w-[196px]  h-[50px]   group cursor-pointer relative overflow-hidden hover:border-[#8bc9c8]">
              <span className="btn-animated-hover bg-[#9dd6d5] group-hover:w-48 group-hover:h-44"></span>
              <span className="btn-animated-text text-black group-hover:text-gray-900  text-[13px] xs:text-sm sm:text-base  font-semibold">
              Explore Our Impact
              </span>
            </button>
                      
              </Link> 
        
              <div className=" col-span-2 xs:col-span-none w-full   xs:w-auto">
                  <div className=" flex flex-row justify-center  xs:justify-normal  gap-0 group cursor-pointer w-full xs:w-auto  ">
              
                     <a
    href="https://play.google.com/store" 
    target="_blank"
    rel="noopener noreferrer"
  >
                      <button className="btn-donate group-hover:bg-lavender cursor-pointer  z-5    w-[198px] h-[50px] ">
                        <span className="btn-donate-hover group-hover:w-56 group-hover:h-56"></span>
                        <span className="btn-donate-text group-hover:text-black text-[13px] xs:text-sm sm:text-base ">
                       Open the App
                        </span>
                      </button>
                    </a>
                
                                 <a
    href="https://play.google.com/store" // link to Google Play
    target="_blank"
    rel="noopener noreferrer"
  >
                      <button className="btn-icon group-hover:bg-lavender cursor-pointer z-5   ">
                        <span className="btn-icon-hover group-hover:translate-y-0"></span>
                        <ArrowUpSvg className="text-white group-hover:text-black z-10" />
                      </button>
                    </a>
                
                  </div> 

              </div>
                

                
                
                </div>

            </div>
                    
               

              

              
          


            </div>
        </div>

     


 
    </div>
  )
}

export default HeroSection