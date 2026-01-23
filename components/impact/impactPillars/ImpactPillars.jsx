
'use client'
import { useState, useEffect, useRef } from "react";
import { bison } from '@/components/fonts/fonts';
import { LuDot } from "react-icons/lu";

import DotSvg   from '@/assets/svg/DotSvg'
import ArrowLeftSvg  from '@/assets/svg/ArrowleftSvg';
import {pillarData} from '@/constants/ImpactConstants'

const ImpactPillars = () => {

  return (
     <div 
      className="relative flex flex-col gap-2 w-full  mt-20     overflow-hidden"
     >
    
        <div className="relative z-20 flex flex-col    gap-10     px-5 md:px-3.5  md:container mx-auto ">
            <div className=" flex flex-col   gap-2  ">
                <h2 className={`text-black text-4xl  sm:text-[46px] lg:text-[55px]    ${bison.className}`}>
              IMPACT BY PILLAR
              </h2>      
            </div>


           <div className="w-full grid grid-cols-1 sm:grid-cols-2  gap-4  ">

               
             {pillarData.map((pillar, index) => {
  const Icon = pillar.icon

  return (
    <div
      key={index}
  className="border border-black/20 w-full flex flex-col gap-2 px-5 py-2.5 relative    cursor-pointer hover:bg-white z-5 rounded-[20px]
transition-all duration-300 ease-out
hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]
hover:border-black/40
group"
    >
      {/* icon */}
      <div className="w-[60px] h-[60px] bg-[#B6E2E2] rounded-full flex justify-center items-center">
        <Icon className="w-[40px] h-[40px]" />
      </div>

      {/* title */}
      <h2 className="   text-xl   sm:text-[22px]  lg:text-[25px] font-semibold">{pillar.title}</h2>

      {/* subtitle + paragraph */}
      <div className="flex flex-col gap-0.5">
        <h3 className="  text-[13px]  xs:text-sm  lg:text-[15px] font-semibold">{pillar.firstSubtitle}</h3>
       
      </div>

      {/* programs */}
      <div className="flex flex-col gap-1.5">
        <h3 className=" text-[13px]  xs:text-sm  lg:text-[15px] font-semibold">Programs in this Pillar</h3>

        <div className="flex flex-row flex-wrap gap-1.5">
          {pillar.ProgramsInclude.map((program, i) => (
            <div
              key={i}
              className="px-3 py-1 flex flex-row text-xs xs:text-[13px] items-center gap-1.5 bg-[#E5D5E5] rounded-full"
            >
              <span>
                <DotSvg />
              </span>
              <span className="font-semibold">{program}</span>
            </div>
          ))}
        </div>
        <div className=" flex flex-row gap-0.5 pt-2.5">
           <p className=" text-[#000000]/90">Stats:</p>
           <div className=" flex flex-row  text-[13px]  xs:text-sm  lg:text-[15px]  ">
           <div className=" text-2xl   pt-0.5">
            <LuDot/>
           </div>
            <span className=" font-semibold   ">{pillar.stats}</span>
           </div>
           
        </div>

      </div>

 



      {/* button */}
      <div className="w-full pt-2 pb-3.5  mt-auto">
        <div className="btn-animated bg-[#B6E2E2] group cursor-pointer relative overflow-hidden w-full rounded-full flex justify-center items-center h-[50px] gap-1.5 ">
          <span className="btn-animated-hover bg-[#9dd6d5] group-hover:w-full group-hover:h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></span>

          <div className="btn-animated-text text-black group-hover:text-gray-900 text-sm sm:text-[17px] font-semibold flex flex-row items-center gap-3">
            Fund This Pillar
            <ArrowLeftSvg />
          </div>
        </div>
      </div>
    </div>
  )
})}


           </div> 
      
          
     
          
                
      
      
              
            </div>
            
    
       
        </div>
  )
}

export default ImpactPillars