

'use client'

import React from 'react';
import ButterfullySvg from '@/assets/svg/LeftPinkButterfullySvg';
import ButterfullyrightSvg from '@/assets/svg/RightPinkButterfullysvg';
import { bison } from '@/components/fonts/fonts';
import UnderLineProgramSvg   from '@/assets/svg/UnderLineProgramSvg';

const GetInvolvedHeroSection = () => {






  return (
    <div
      className={`w-full bg-black relative  h-[250px] flex flex-col gap-1 sm:gap-3 items-center justify-center overflow-hidden`}

    >
      {/* Left Butterfly */}
      <div className="absolute top-[20%] left-[-120px] sm:left-[-70px]">
        <ButterfullySvg className="w-[200px] h-[200px]" />
      </div>

      {/* Right Butterfly */}
      <div className="absolute top-[20%] right-[-120px] sm:right-[-70px]">
        <ButterfullyrightSvg className="w-[200px] h-[200px]" />
      </div>

      {/* Title */}
    
<h2
  className={`text-thistle
   text-[50px]
    lg:text-[56px]
    xl:text-[72px]
    text-center
    ${bison.className}`}
>      
        <span className="relative inline-block leading-12 xs:leading-normal">
        donate/
        <br className=' block xs:hidden'/>
          <span className="relative z-10">GET INVOLVED </span>
          <span className="absolute right-0  bottom-[-13px]  xs:bottom-[-2px] z-0">

          <UnderLineProgramSvg   className={'  w-[210px] lg:w-[240px] xl:w-[300px]'}/>
        </span>
        </span>
      </h2>

      {/* Subtitle */}

<div className=' px-1 sm:container mx-auto  px-3.5 '>

        <p className={`text-white text-center  text-sm sm:text-base  md:text-[17px]   text-white/70`}>
        Your support empowers youth and strengthens communities through education, wellness, and opportunity.
        </p>
 

</div>

      
    </div>
  );
};

export default GetInvolvedHeroSection;
