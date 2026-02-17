
'use client'
import { useState, useEffect, useRef } from "react";
import { bison } from '@/components/fonts/fonts';
import StarikSvg  from '@/assets/svg/StarikSvg'
import SupportSvg   from '@/assets/svg/SupportSvg';
import AmericanSvg   from '@/assets/svg/AmericanSvg';
import DotSvg   from '@/assets/svg/DotSvg'
import ArrowLeftSvg  from '@/assets/svg/ArrowleftSvg';
import {pillarData} from '@/constants/PillarsConstants'
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
const STAR_BOXES = [0, 21];
import PillarShimmer from '@/components/global/effect/PillarCardShimmer';
import ItemNotFound from '@/components/global/ItemNotFound.jsx';
import DisplayError from '@/components/global/DisplayError';
import devLog from "@/utils/logsHelper";

const Empowerment = ({isLoading,isFetching,isError,error,setCurrentPage,currentPage}) => {

   const { pillarWithPrograms } = useSelector(state => state.pillar);

  // // Safely log
  // if (pillarWithPrograms?.docs) {
  //   devLog('pillarWithPrograms', pillarWithPrograms?.docs);
  // }

  // if (pillarWithPrograms?.pages) {
  //   devLog('pillarWithPrograms', pillarWithPrograms?.pages);
  // }


  //  const handleClick = (pillar) => {
  //   // Make sure pillar?._id exists
  //   if (!pillar?._id) return;

  //   router.push(`/donate?piller=${pillar._id}`);
  // };

    const  totalPages=pillarWithPrograms?.pages;
  const pillarProgram=pillarWithPrograms?.docs;

      const containerRef = useRef(null);
   const router=useRouter();

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
      className="relative flex flex-col gap-2 w-full     bg-white   overflow-hidden"
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
        <div className="relative z-20 flex flex-col gap-10 items-center   w-full pb-20    px-5 md:px-3.5  md:container mx-auto ">
            <div className=" flex flex-col  items-center  gap-2  pt-12 md:pt-16">
                <h2 className={`text-black text-4xl  sm:text-[46px] lg:text-[55px] text-center  ${bison.className}`}>
               A Holistic Approach to Youth Empowerment
              </h2>
                <div className=' w-full px-6  md:px-0   md:w-4/5  lg:w-8/12'>
              <p className='  text-sm sm:text-base md:text-lg  font-thin text-[#030F0CCC]/80  text-center ' >
        All IAMGIFTED programs are guided by four strategic pillars, providing clarity, accountability, and measurable impact for donors, partners, and communities.
          </p>
          </div>
      
            </div>


                  {isLoading ? (
          <PillarShimmer />
        ) : isError ? (
          <DisplayError message={error?.message || 'Something went wrong'} />
        ) : pillarWithPrograms?.docs?.length > 0 ? (
              <div className="w-full grid grid-cols-1 sm:grid-cols-2  gap-4  pt-6 ">

               
             {pillarProgram.map((pillar, index) => {
  {/* const Icon = pillar.icon */}

  return (
    <div


      key={pillar?._id}
  className="border border-black/20 w-full flex flex-col gap-2 px-5 py-2.5 relative bg-white z-5 rounded-[20px]
transition-all duration-300 ease-out
hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]
hover:border-black/40
group"
    >
      {/* icon */}
      <div className="w-[60px] h-[60px] bg-[#B6E2E2] rounded-full flex justify-center items-center">
        <SupportSvg className="w-[40px] h-[40px]" />
      </div>

      {/* title */}
      <h2 className="    text-xl   sm:text-[22px]  lg:text-[25px] font-semibold">{pillar?.title}</h2>

      {/* subtitle + paragraph */}
      <div className="flex flex-col gap-0.5">
        <h3 className="   text-[13px]  xs:text-sm  lg:text-[15px] font-semibold">
          {pillar?.subTitle}
        </h3>
        <p className="text-[#030F0CCC]/80  text-xs  xs:text-xs lg:text-sm">
           {pillar?.description}
        </p>
      </div>

      {/* programs */}
    {Array.isArray(pillar?.programs) && pillar.programs.length > 0 && (
        <div className="flex flex-col gap-1.5">
          <h3 className="text-[13px] xs:text-sm lg:text-[15px] font-semibold">
            Programs Include:
          </h3>
          <div className="flex flex-row flex-wrap gap-1.5">
            {pillar.programs.map((program, idx) => (
              <div
                key={idx}
                className="px-3 py-1 flex flex-row text-xs xs:text-[13px] items-center gap-1.5 bg-[#E5D5E5] rounded-full"
              >
                <span>
                  <DotSvg />
                </span>
                <span className="font-semibold">{program?.title}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* paragraph */}
      <p className="text-[#030F0CCC]/80  text-xs  xs:text-sm lg:text-[15px]">
      </p>

      {/* donor section */}
      <div className="flex flex-col gap-0.5 border-b border-black/35 pb-4">
        <h2 className="  text-[13px]  xs:text-sm  lg:text-[15px] font-semibold">
          Why Donors Support This
        </h2>
        <p className="text-[#030F0CCC]/80  text-xs  xs:text-xs lg:text-sm">
        {pillar?.description2}
        </p>
      </div>

      {/* button */}
      <div className="w-full pt-2 pb-3.5  mt-auto">
        <div 
         onClick={() => router.push(`/donate?piller=${pillar?._id}`)}

        className="btn-animated bg-[#B6E2E2] group cursor-pointer relative overflow-hidden w-full rounded-full flex justify-center items-center h-[50px] gap-1.5 ">
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
                 ) : (
          <ItemNotFound message="No pillars found." />
        )}
      
              


           {currentPage < totalPages && (
            <div className="mt-10">
              <button
                disabled={isFetching}
                onClick={() => setCurrentPage(prev => prev + 1)}
                className={`btn-seeMore border
                  ${isFetching ? 'opacity-50 cursor-not-allowed' : 'hover:bg-black hover:text-white'}`}
              >
                {isFetching ? 'Loading...' : 'See More Pillars'}
              </button>
            </div>
          )}
            </div>
            
    
       
        </div>
  )
}

export default Empowerment