'use client'
import { useEffect,useState} from 'react';
import { bison } from '@/components/fonts/fonts';
import  img  from '@/assets/images/fundrasingimg.png' 
import { teamFundrasing } from '@/constants/ProgramConstants';
import  img1  from '@/assets/images/donateperson1.png' 
import  img2  from '@/assets/images/donateperson2.png' 
import  img3  from '@/assets/images/donateperson3.png'
import imgawer from '@/assets/images/Awarness.png'
import Link from 'next/link';
import Image from 'next/image';
import DotSvg   from '@/assets/svg/DotSvg'
import { GoDotFill } from "react-icons/go";
import { useRouter } from 'next/navigation';
import DisplayError from '@/components/global/DisplayError';
import ItemNotFound from '../global/ItemNotFound';
import { useSelector } from 'react-redux';
import ProgramListShimmer   from  '@/components/global/effect/ProgramListShimmer';
import fallbackimg  from '@/assets/images/img2.jpg'
import DOMPurify from "dompurify";

import { baseURL } from '@/config/api';



const Fundrasing = ({
  isFetching,
  setCurrentPage,
  currentPage,
  isLoading,
  isError,
  error,
}) => {


     const { docs,pages } = useSelector(state => state.program);

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
    <div className=" w-full pt-16 relative  bg-gradient-to-b from-white to-white/80  pb-12    ">


       <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 absolute left-0   top-[-90px]  z-0 w-full">
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
         <div className="flex flex-col w-full px-4 md:px-3.5  items-center gap-10">

         <div className=' flex flex-col gap-2'>
         <div className=' w-full sm:w-[80%] md:w-[70%] mx-auto'>
          <h2
             className={`text-black text-4xl  sm:text-[46px] lg:text-[55px]  text-center  ${bison.className}`}
           >
     Empowering Youth. Strengthening Families. Transforming Communities
           </h2>

         </div>
               
         <div className=' w-full px-6  md:px-0   md:w-4/5  lg:w-8/12 mx-auto'>
        <p className='  text-sm sm:text-base md:text-lg  font-thin text-[#030F0CCC]/80  text-center ' >
          IAMGIFTED Foundation delivers structured, purpose-driven programs that equip youth with life skills, mentorship, academic support, and mental wellness tools that last far beyond the moment.
            </p>
            </div>

              <div className="  grid grid-cols-2 xs:grid-cols-none xs:flex  xs:flex-wrap xs:flex-row items-center  gap-2 w-full   xs:justify-center">
                    


               <button className="btn-animated  bg-mint-cyan w-full xs:w-[160px] h-[45px]   group cursor-pointer relative overflow-hidden hover:border-[#8bc9c8]">
              <span className="btn-animated-hover bg-[#9dd6d5] group-hover:w-48 group-hover:h-44"></span>
              <span className="btn-animated-text text-black group-hover:text-gray-900  text-[13px] xs:text-sm sm:text-base   font-semibold">
               Explore Programs
              </span>
            </button>
                      

               <button className="btn-animated    bg-mint-cyan w-full xs:w-[196px]  h-[45px]   group cursor-pointer relative overflow-hidden hover:border-[#8bc9c8]">
              <span className="btn-animated-hover bg-[#9dd6d5] group-hover:w-48 group-hover:h-44"></span>
              <span className="btn-animated-text text-black group-hover:text-gray-900  text-[13px] xs:text-sm sm:text-base  font-semibold">
              Support a Program
              </span>
            </button>
                      
        
            
                

                
                
                </div>
       
         </div>
  


         
 {isLoading ? (
  <ProgramListShimmer />
) : isError ? (
  <DisplayError message={error?.message || "Something went wrong"} />
) : docs?.length > 0 ? (

  <div className="flex flex-col gap-6 w-full px-4 md:px-3.5 md:container mx-auto relative z-10">

    {docs.map((item) => (
      <div
        key={item?._id}
        onClick={() => router.push(`/programs/${item?._id}`)}
        className="flex flex-col md:flex-row gap-6 p-6 rounded-[24px] bg-white shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
      >

        {/* LEFT CONTENT */}
        <div className="w-full md:w-6/12 flex flex-col gap-4">

          {/* Title */}
          <h1 className="font-semibold text-xl md:text-[24px] leading-snug capitalize">
            {item?.title}
          </h1>

          {/* Pillar Tag */}
          {item?.piller && (
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-semibold text-sm">Pillar Tag:</span>

              <div className="flex items-center gap-1 bg-[#E5D5E5] rounded-full px-3 py-1.5">
                <DotSvg />
                <span className="text-xs font-semibold">
                  {item?.piller?.title}
                </span>
              </div>
            </div>
          )}

          {/* Description */}
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(item?.body),
            }}
            className="text-sm md:text-[15px] text-black/70 leading-relaxed line-clamp-4"
          />

          {/* Impact Stat */}
          <div className="flex items-center gap-3 text-sm">
            <h2 className="font-medium">Impact Stat:</h2>

            <div className="flex items-center gap-1">
              <GoDotFill className="text-[#8bc9c8]" />
              <p className="font-semibold text-base">
                {item?.impactAmount}
              </p>
            </div>
          </div>

          <div className="border-b border-black/10"></div>

          {/* Donors + Button */}
          <div className="flex items-center justify-between pt-2">

            {/* Donor Avatars */}
            <div className="flex items-center">
              {[img1, img2, img3].map((img, i) => (
                <div
                  key={i}
                  className="w-[32px] h-[32px] rounded-full border-2 border-white -ml-2 first:ml-0 overflow-hidden"
                >
                  <Image
                    src={img}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                    alt="donor"
                  />
                </div>
              ))}

              <div className="w-[32px] h-[32px] rounded-full border-2 border-white -ml-2 bg-black text-white text-[10px] flex items-center justify-center font-semibold">
                +{item?.impactAmount}
              </div>
            </div>

            {/* Donate Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                router.push(`/donate?program=${item?._id}`);
              }}
              className="btn-animated bg-mint-cyan border border-transparent group cursor-pointer w-[150px] h-[42px] rounded-full relative overflow-hidden hover:border-[#8bc9c8]"
            >
              <span className="btn-animated-hover bg-[#9dd6d5] absolute top-1/2 left-1/2 w-0 h-0 rounded-full -translate-x-1/2 -translate-y-1/2 group-hover:w-44 group-hover:h-44 transition-all duration-500 ease-out"></span>

              <span className="btn-animated-text text-black font-semibold relative z-10">
                Donate Now
              </span>
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-6/12">
          <div className="w-full h-[260px] md:h-[300px] overflow-hidden rounded-[22px] group">
            <Image
              src={
                item?.featuredImage?.relativeAddress
                  ? `${baseURL}/${item?.featuredImage?.relativeAddress}`
                  : fallbackimg
              }
              width={500}
              height={300}
              alt={item?.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        </div>

      </div>
    ))}
  </div>

) : (
  <ItemNotFound message="No Program found." />
)}
   
  
   
   

   {currentPage < pages && (
            <div className="">
              <button
                disabled={isFetching}
                onClick={() => setCurrentPage(prev => prev + 1)}
                className={`btn-seeMore border
                  ${isFetching ? 'opacity-50 cursor-not-allowed' : 'hover:bg-black hover:text-white'}`}
              >
                {isFetching ? 'Loading...' : 'See More'}
              </button>
            </div>
          )}
          
         </div>
       </div>
  )
}

export default Fundrasing