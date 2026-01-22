'use client'
import { useState, useEffect, useRef } from "react";
import { bison } from '@/components/fonts/fonts';
import Image from "next/image";
import {imapactData} from '@/constants/homeConstants'
import StarikSvg  from '@/assets/svg/StarikSvg'


const STAR_BOXES = [0, 21];

const MissionHero = () => {
  const containerRef = useRef(null);
     const [numBoxes, setNumBoxes] = useState(60);
           useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 640) {
          setNumBoxes(20); 
        } else if (window.innerWidth < 1024) {
          setNumBoxes(40); 
        } else {
          setNumBoxes(60); 
        }
      };
    
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

   const boxes = Array.from({ length: numBoxes });

  return (

    <div
      ref={containerRef}
      className="relative flex flex-col gap-2 w-full    bg-gradient-to-b from-white  via-white to-transparent   overflow-hidden"
    >
      {/* Grid Background */}
     <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 absolute left-0   top-0  z-0 w-full">
                 {boxes.map((_, index) => {
             
       
                   return (
                     <div
                       key={index}
                       className={`h-[85px] flex items-center relative justify-center border-r border-b border-black/7`}
                     >
                              
               {STAR_BOXES.includes(index) && (
      <div className="absolute top-full left-full -translate-x-1/2 -translate-y-1/2 z-0 hidden md:block">
        <StarikSvg />
      </div>
    )}

                     </div>
                   );
                 })}
               </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center  gap-8     px-5 md:px-3.5  md:container mx-auto ">
      <div className=" flex flex-col  items-center  gap-2  pt-12 md:pt-16">
          <h2 className={`text-black text-4xl  sm:text-[46px] lg:text-[55px] text-center  ${bison.className}`}>
          Our mission is to aid those in need
        </h2>
          <div className=' w-full px-6  md:px-0   md:w-4/5  lg:w-8/12'>
        <p className='  text-sm sm:text-base md:text-lg  font-thin text-[#030F0CCC]/80  text-center ' >
        Our mission is to provide critical support to those in need today, while also laying the groundwork for sustainable, long-term improvements.
    </p>
    </div>

      </div>

        {/*  */}
    
     <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 lg:space-y-4 w-full  pt-11">
          {imapactData.map((item, index) => (
            <div
              key={index}
              className={`group relative rounded-[32px] h-[200px] sm:h-[270px] overflow-hidden transition-all duration-500 cursor-pointer ease-out hover:shadow-2xl ${
                item.imge
                  ? "bg-black/5"
                  : "bg-black px-5 py-5 flex flex-col justify-between"
              }`}
            >
              {item.imge ? (
                <>
                  {/* Image */}
                  <Image
                    src={item.imge}
                    alt={`impact-${index}`}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/25 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </>
              ) : (
                <>
                  {/* Count */}
                  <div className="flex justify-end">
                    <h2 className="text-white  text-xl  sm:text-2xl  md:text-3xl font-semibold">
                      {item.count}
                    </h2>
                  </div>

                  {/* Text */}
                <div className="flex flex-col gap-1">
  <h3 className="text-thistle text-base sm:text-lg md:text-[24px] font-semibold
                 transition-colors duration-300
                 group-hover:text-white">
    {item.title}
  </h3>

  <p className="text-sm sm:text-base text-white/80
                transition-colors duration-300
                group-hover:text-white">
    {item.paragraph}
  </p>
</div>

                </>
              )}
            </div>
          ))}
        </div>
    
          


        
      </div>
    </div>
  );
};

export default MissionHero;
