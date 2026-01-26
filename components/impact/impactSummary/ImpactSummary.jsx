'use client'
import { useState, useEffect, useRef } from "react";
import { bison } from '@/components/fonts/fonts';
import {impactdata} from '@/constants/ImpactConstants'
import StarikSvg  from '@/assets/svg/StarikSvg'
import Link from "next/link";
import ArrowUpSvg from "@/assets/svg/ArrowUpSvg";


const STAR_BOXES = [0, 21];

const ImpactSummary = () => {
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
      className="relative flex flex-col gap-2 w-full    bg-gradient-to-b from-white  via-white to-[#FBFFFF]   overflow-hidden   "
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
      <div className="relative z-20 flex flex-col items-center  gap-8   w-full  px-5 md:px-3.5  md:container mx-auto  ">
      <div className=" flex flex-col  items-center  gap-2  pt-12 md:pt-16">
          <h2 className={`text-black text-4xl  sm:text-[46px] lg:text-[55px] text-center  ${bison.className}`}>
         4,209 <span className=" text-4xl">Total Youth Served</span> 
        </h2>
   

      </div>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full  pt-8">
            {impactdata.map((item, index) => (
    <div
      key={index}
      className="group bg-black rounded-[24px] h-[203px] flex flex-col gap-1.5 justify-center items-center text-white
                 transition-shadow duration-300 hover:shadow-lg cursor-pointer"
    >
      <h2 className="font-semibold   text-3xl  md:text-4xl  transition-colors duration-300 group-hover:text-light-cyan">
        {item.count}
      </h2>
      <p className="  text-xl  px-3 text-center  md:text-[22px] text-thistle font-medium transition-colors duration-300 group-hover:text-light-cyan">
        {item.title}
      </p>
    </div>
  ))}
       </div>

           <div className=' w-full px-6  md:px-0   pt-8  md:w-4/5  lg:w-8/12'>
        <p className='  text-sm sm:text-base md:text-lg  font-thin text-[#030F0CCC]/80  text-center ' >
Cumulative impact across all IAMGIFTED Foundation programs    </p>
    </div>


      <div className="  flex  flex-col phone:flex-row items-center  gap-2 w-full   justify-center">
                    


                  <Link href={'/donate'}>
               <button className="btn-animated  bg-mint-cyan  w-[160px] phone:w-[120px] sm:w-[160px] h-[50px]   group cursor-pointer relative overflow-hidden hover:border-[#8bc9c8]">
              <span className="btn-animated-hover bg-[#9dd6d5] group-hover:w-48 group-hover:h-44"></span>
              <span className="btn-animated-text text-black group-hover:text-gray-900  text-[13px] xs:text-sm sm:text-base   font-semibold">
                Donate 
              </span>
            </button>
                      
              </Link>   
   <div className=" flex flex-row gap-0 group cursor-pointer   ">
              
                    <Link href="/impact ">
                      <button className="btn-donate group-hover:bg-lavender cursor-pointer  z-5    w-[190px]  phone:w-[150px]  sm:w-[198px] h-[50px] ">
                        <span className="btn-donate-hover group-hover:w-56 group-hover:h-56"></span>
                        <span className="btn-donate-text group-hover:text-black text-[13px] xs:text-sm sm:text-base   font-semibold">
                       Explore Our Impact
                        </span>
                      </button>
                    </Link>
                
                    <Link href="/impact">
                      <button className="btn-icon group-hover:bg-lavender cursor-pointer z-5       ">
                        <span className="btn-icon-hover group-hover:translate-y-0"></span> 
                        <ArrowUpSvg className="text-white group-hover:text-black z-10" />
                      </button>
                    </Link>
                
                  </div> 
        
           
                

                
                
                </div>



    

    
          


        
      </div>
    </div>
  );
};

export default ImpactSummary;
