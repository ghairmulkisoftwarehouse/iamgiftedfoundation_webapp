

'use client'

import React from 'react';
import ButterfullySvg from '@/assets/svg/LeftPinkButterfullySvg';
import ButterfullyrightSvg from '@/assets/svg/RightPinkButterfullysvg';
import { bison } from '@/components/fonts/fonts';
import UnderLineProgramSvg   from '@/assets/svg/UnderLineProgramSvg';
import FullbutterfullyleftSvg  from '@/assets/svg/FullbutterfullyleftSvg'
import  FullbutterfullyrightSvg  from '@/assets/svg/FullbutterfullyrightSvg';

const GetInvolvedHeroSection = () => {






  return (
    <div
      className={`w-full bg-black relative  h-[250px] flex flex-col gap-1 sm:gap-3 items-center justify-center overflow-hidden`}

    >
      {/* Left Butterfly */}
      <div className="absolute top-[35%] xs:top-[30%] md:top-[20%]    left-[-2px]  xs:left-0">
        <FullbutterfullyleftSvg className=" w-[100px] h-[100px] xs:w-[120px] xs:h-[120px]  sm:w-[150px] md:h-[150px]  lg:w-[200px] lg:h-[200px]" />
      </div>

      {/* Right Butterfly */}
      <div className="absolute    top-[35%] xs:top-[30%] md:top-[20%]  right-[-2px] xs:right-0">
        <FullbutterfullyrightSvg className="  w-[100px] h-[100px] xs:w-[120px] xs:h-[120px]  sm:w-[150px] md:h-[150px]  lg:w-[200px] lg:h-[200px]" />
      </div>

      {/* Title */}
    
<h2
  className={`text-thistle
  text-[48px]
   xs:text-[50px]
    lg:text-[56px]
    xl:text-[72px]
    text-center
    relative inline-block leading-12 xs:leading-normal
    relative z-10
    ${bison.className}`}
>      
        <span className="">
        donate/GET INVOLVED
   
      
        </span>

            <span className="absolute right-0  bottom-[-13px]  xs:bottom-[-2px] z-0">
             <UnderLineProgramSvg   className={' w-[330px] h-[15px] xs:h-auto   xs:w-[340px]   lg:w-[380px] xl:w-[490px]'}/>
       
        </span>
      </h2>   
      


      {/* Subtitle */}

<div className=' px-1 sm:container mx-auto  px-3.5 '>

        <p className={`text-white text-center  text-sm sm:text-base  md:text-[17px]   text-white/70 pt-3 sm:pt-1`}>
        Your support empowers youth and strengthens communities through education, wellness, and opportunity.
        </p>
 

</div>

      
    </div>
  );
};

export default GetInvolvedHeroSection;
