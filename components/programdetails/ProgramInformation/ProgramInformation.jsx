'use client'
import { useEffect,useState} from 'react';
import Image from 'next/image';
 
import { bison } from '@/components/fonts/fonts';
import ProgramList  from '../programlist/ProgramList';

import { GoDotFill } from "react-icons/go";
import devlog from '@/utils/logsHelper';
import DetailShimmer   from '@/components/global/effect/DetailShimmer';
import ItemNotFound from '@/components/global/ItemNotFound';
import DisplayError from '@/components/global/DisplayError';
import { baseURL } from '@/config/api';
import  fallbackimg from '@/assets/images/img2.jpg'
import DOMPurify from "dompurify";





const ProgramInformation = ({ loading, error, program,
  allProgram,
        allProgramLoading,
        allProgramError,
      programId}) => {

   devlog(' this is a program list',allProgram)
   const [activeIndex, setActiveIndex] = useState(-1); 



  const mainImage =
    activeIndex === -1
      ? program?.featuredImage?.relativeAddress
      : program?.images?.[activeIndex]?.relativeAddress;



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
   <div className=" mt-20 w-full relative   bg-gradient-to-b from-[#F4F7F7]  to-transparent   ">
         <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 absolute left-0 top-[-90px] z-0 w-full">
          {boxes.map((_, index) => {
            return (
              <div
                key={index}
                className={`h-[85px] flex items-center justify-center border-r border-b border-black/7`}
              >
              </div>
            );
          })}
        </div>

      
       <div className="grid grid-cols-1 lg:grid-cols-3 w-full px-5 md:px-3.5  md:container mx-auto   gap-6 relative z-5">
           <div className='lg:col-span-1 '>

            <ProgramList  
            programId={programId}
  allProgram={allProgram}
  allProgramLoading={allProgramLoading}
  allProgramError={allProgramError}
/>
       </div>



       
     <div className="lg:col-span-2 flex flex-col gap-3.5">

  {loading ? (
    <DetailShimmer />
  ) : error ? (
    <DisplayError message={error?.message || "Something went wrong"} />
  ) : program ? (
    <>
      {/* Image + Meta */}
      <div className="flex flex-col gap-0.5">
          {/* Main Image */}
      <Image
        src={mainImage ? `${baseURL}/${mainImage}` : fallbackimg}
        alt="Program Image"
        width={794}
        height={451}
        className="w-full object-cover rounded-[22px] h-[300px] lg:h-[451px]"
      />

      {/* Thumbnail Gallery */}
      <div className="grid grid-cols-2 sm:flex sm:flex-row sm:flex-wrap gap-3 pt-3.5">
        {/* Featured image thumbnail */}
        <div
          onClick={() => setActiveIndex(-1)}
          className={`sm:w-[140px] h-[90px] rounded-[10px] overflow-hidden relative cursor-pointer border-2 ${
            activeIndex === -1 ? "border-light-cyan" : "border-transparent"
          }`}
        >
          <Image
            src={`${baseURL}/${program?.featuredImage?.relativeAddress}`}
            alt="featured"
                width={140}
               height={90}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
          />
        </div>

        {/* Other images */}
        {program?.images?.map((img, index) => (
          <div
            key={img._id}
            onClick={() => setActiveIndex(index)}
            className={`sm:w-[140px] h-[90px] rounded-[10px] overflow-hidden relative cursor-pointer border-2 ${
              activeIndex === index ? "border-light-cyan" : "border-transparent"
            }`}
          >
            <Image
              src={`${baseURL}/${img.relativeAddress}`}
              alt={`img-${index + 1}`}
               width={140}
               height={90}
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-[10px]" />
          </div>
        ))}
      </div>

        {/* <div className="flex flex-row flex-wrap gap-1.5">
          <div className="flex items-center gap-2">
            <CalendarSvg className="w-4 h-4 text-black" />
            <p className="font-normal text-xs md:text-base text-black">
              June 21, 12–3 PM
            </p>
          </div>

          <div className="flex items-center gap-1.5">
            <DetailLocationSvg className="w-4 h-4 text-black" />
            <p className="font-normal text-xs md:text-base text-black">
              Contrary to popular belief
            </p>
          </div>
        </div> */}
      </div>

      {/* Program Purpose */}
      <div className="flex flex-col gap-3">
        <h3 className={`text-[28px] lg:text-[34px] ${bison.className}`}>
          {program?.title}
        </h3>


    <div
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(program?.body) }}
      className="text-[#030F0CCC] text-sm lg:text-[15px] leading-normal lg:leading-[35px]"
    />
       
      </div>

               {program?.piller && (

   <>
      <div className="flex flex-col gap-3">
        <h3 className={`text-[28px] lg:text-[36px] ${bison.className}`}>
          Who It Serves
        </h3>


              
                   <ul className="flex flex-wrap gap-5 w-full">
          <li className="text-[17px] font-semibold flex gap-1 items-center">
            <GoDotFill className="text-[14px]" />
            <span>{program?.piller?.title}</span>
          </li>

        </ul>
         

        

     
      </div>
      </>
       )}

      {/* Outcomes */}
  <div className="flex flex-col gap-4">
  <h3 className={`text-[28px] lg:text-[36px] ${bison.className}`}>
    Outcomes & Stats
  </h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4   cursor-pointer">
    {/* Support Count */}
    <div className="bg-mint-cyan  hover:bg-[#9dd6d5]  rounded-xl p-4 text-center   ">
      <p className="text-2xl lg:text-3xl font-bold text-[#030F0C]">
        ${program?.impactSupportCount}
      </p>
      <span className="text-sm  md:text-base text-[#030F0CCC]">
        Supporters Impacted
      </span>
    </div>

    {/* Impact Amount */}
    <div className="bg-mint-cyan  hover:bg-[#9dd6d5] rounded-xl p-4 text-center">
      <p className="text-2xl lg:text-3xl font-bold text-[#030F0C]">
        ${program?.impactAmount}
      </p>
      <span className="text-sm  md:text-base text-[#030F0CCC]">
        Total Impact Amount
      </span>
    </div>
  </div>
</div>

    </>
  ) : (
    <ItemNotFound message="No Program found." />
  )}

</div>



     


       </div>



         
    
    </div>
  )
}

export default ProgramInformation
