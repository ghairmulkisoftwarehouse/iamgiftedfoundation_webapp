'use client'
import { useState, useEffect,useRef } from "react";
import {  bison } from '@/components/fonts/fonts';
import UnderlineSvg   from '@/assets/svg/UnderlineSvg.js'
import ArrowUpSvg  from '@/assets/svg/ArrowUpSvg';
import Link from 'next/link';
import  LeftPinkButterfullySvg   from  '@/assets/svg/LeftPinkButterfullySvg.js'
import RightPinkButterfullysvg from "@/assets/svg/RightPinkButterfullysvg";
import imggray from '@/assets/images/foundationboy.png';
import ShapeheroSvg  from '@/assets/svg/ShapeheroSvg.js';
import HeroShapeBottomSvg  from '@/assets/svg/HeroShapeBottomSvg';
import DonateSvg   from '@/assets/svg/DonateSvg';
import HeroWavesShapeSvg   from '@/assets/svg/HeroWavesShapeSvg'
import person from '@/assets/images/person.png'
import StarSvg  from '@/assets/svg/StarSvg'
import SmileSvg  from '@/assets/svg/SmileSvg';
import ShadowSvg  from '@/assets/svg/ShadowSvg';
import { FaDonate, FaHandsHelping, FaMoneyBillWave, FaHeart } from 'react-icons/fa';
import StarikSvg  from '@/assets/svg/StarikSvg'
import FullbutterfullyleftSvg  from '@/assets/svg/FullbutterfullyleftSvg'
import  FullbutterfullyrightSvg  from '@/assets/svg/FullbutterfullyrightSvg';

import Image from "next/image";

const BOX_HEIGHT = 85;
const STAR_BOXES = [0, 46];

const Foundationgurdian = () => {

  const heroRef = useRef(null);
    const [numBoxes, setNumBoxes] = useState(0);
    const [cols, setCols] = useState(12);
 useEffect(() => {
     const calculateBoxes = () => {
       if (!heroRef.current) return;
 
       const height = heroRef.current.offsetHeight;
 
       // columns based on screen width
       let columns = 12;
       if (window.innerWidth < 640) columns = 4;
       else if (window.innerWidth < 1024) columns = 6;
 
       const rows = Math.ceil(height / BOX_HEIGHT);
       setCols(columns);
       setNumBoxes(rows * columns);
     };
 
     calculateBoxes();
     window.addEventListener("resize", calculateBoxes);
     return () => window.removeEventListener("resize", calculateBoxes);
   }, []);

  return (
    
    <div 
     ref={heroRef}
    className="flex flex-col gap-2 w-full h-auto  bg-gradient-to-b from-[#D6EEF080]  to-transparent
 relative overflow-hidden  ">
    {/* box background */}
         <div
        className={`grid absolute left-0 top-[-10px] z-0 w-full mt-16`}
        style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
      >
        {Array.from({ length: numBoxes }).map((_, index) => (
        <div
  key={index}
  className="h-[85px] border-r border-b border-black/5 relative"
>

 {STAR_BOXES.includes(index) && (
  <div className="absolute top-full left-full -translate-x-1/2 -translate-y-1/2 z-0   hidden  md:block">
    <StarikSvg />
  </div>
)}
</div>
        ))}
      </div>

       {/* main title */}
    <div className=" w-full  flex justify-center items-center pt-12      px-5  md:px-3.5  md:container mx-auto">
            <div className="flex flex-col gap-12  w-full relative    ">
            <div className=" flex flex-col gap-8  ">

              <h2
                className={`
                    text-black
                    text-[50px]   leading-14 lg:leading-tight lg:text-[60px] xl:text-[80px]  pt-9
                    text-center

                    ${bison.className}
                `}
                >
                Foundation Gift Guardian <br className=" hidden md:block" />  $10,000+
              
               
                </h2>
                <div className="   w-full px-3  sm:px-0  sm:w-[80%]  lg:w-[65%] mx-auto      ">
            <p className="text-[#030F0CCC]  text-sm sm:text-base md:text-lg xl:text-[20px] text-center font-thin  ">
              Gifting Guardians help sustain long-term impact, fuel innovation, and ensure youth programming reaches those who need it most
            </p>
                </div>
             

            </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 xl:grid-cols-4 gap-2.5 w-full relative z-5">
  
  {[ "Public Recognition",
  "App Badge",
  "Event Access",
  "Impact Reports"].map(
    (text, index) => (
      <div
        key={index}
        className="
          group
          h-[140px]
          bg-black
          rounded-[24px]
          flex
          justify-center
          items-center
          text-white
          transition-shadow
           cursor-pointer
          duration-300
          hover:shadow-2xl
        "
      >
        <p
          className={`
            text-2xl
            lg:text-[30px]
            ${bison.className}
            transition-colors
            duration-300
           group-hover:text-light-cyan
          `}
        >
          {text}
        </p>
      </div>
    )
  )}

</div>

               <div className="flex gap-0.5 w-full justify-center">
                
                  <div className="flex flex-row gap-0 group cursor-pointer pt-3">
                

                    <Link href="/donate ">
                      <button className="btn-donate group-hover:bg-lavender cursor-pointer  z-5    w-[198px] h-[50px] ">
                        <span className="btn-donate-hover group-hover:w-56 group-hover:h-56"></span>
                        <span className="btn-donate-text group-hover:text-black">
                   Donate as a Guardian
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


                    
                    <div className="absolute  top-[15%]  left-[-15px] sm:left-[-20px] ">
                        <FullbutterfullyleftSvg  className=' w-[120px] h-[150px] sm:w-[200px] sm:h-[200px] z-0 '/>
                        </div>
                        <div className="absolute  top-[15%]     right-[-15px] sm:right-[-20px]   z-0 ">
                        <FullbutterfullyrightSvg  className='  w-[120px] h-[150px] sm:w-[200px] sm:h-[200px] z-0 '/>
                        </div>

              

           
          


            </div>
        </div>

     


 
    </div>
  )
}

export default Foundationgurdian