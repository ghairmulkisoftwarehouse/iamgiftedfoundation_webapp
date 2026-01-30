'use client'
import { useEffect,useState} from 'react';
import { bison } from '@/components/fonts/fonts';
import  img  from '@/assets/images/fundrasingimg.png' 
import { teamFundrasing } from '@/constants/ProgramConstants';
import  img1  from '@/assets/images/donateperson1.png' 
import  img2  from '@/assets/images/donateperson2.png' 
import  img3  from '@/assets/images/donateperson3.png'
import Link from 'next/link';
import Image from 'next/image';
import DotSvg   from '@/assets/svg/DotSvg'
import { GoDotFill } from "react-icons/go";
import { useRouter } from 'next/navigation';
import DisplayError from '@/components/global/DisplayError';
import ItemNotFound from '../global/ItemNotFound';
import { useSelector } from 'react-redux';
import ProgramCardShimmer   from  '@/components/global/effect/ProgramCardShimmer';
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
         <div className="flex flex-col w-full items-center gap-10">

         <div className=' flex flex-col gap-2'>
                <h2
             className={`text-black text-4xl  sm:text-[46px] lg:text-[55px]  text-center  ${bison.className}`}
           >
      Programs That Transform Belief Into Action
           </h2>
         <div className=' w-full px-6  md:px-0   md:w-4/5  lg:w-8/12 mx-auto'>
        <p className='  text-sm sm:text-base md:text-lg  font-thin text-[#030F0CCC]/80  text-center ' >
           IAMGIFTED Foundation programs are designed to deliver real-world outcomes for youth and families while following our Four Pillars.
            </p>
            </div>
       
         </div>
         
   {isLoading ? (
          <ProgramCardShimmer />
        ) : isError ? (
          <DisplayError message={error?.message || 'Something went wrong'} />
        ) :docs?.length > 0 ? (

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  space-y-0 md:space-y-5 w-full   gap-4 px-5 md:px-3.5  md:container mx-auto  ">
         {docs.map((item) => (
  <div
    key={item?._id} 
    className="
        group cursor-pointer
      border border-black/20 rounded-[20px] p-3
      flex flex-col gap-3 w-full h-full
      transition-all duration-700 ease-out
      hover:shadow-2xl
      
    "
 onClick={() => router.push("/programs/1")}
  >
    {/* Image wrapper */}
    <div className="w-full   h-[250px]     overflow-hidden rounded-[20px]">
      <Image
        src={item?.featuredImage?.relativeAddress ? `${baseURL}/${item?.featuredImage?.relativeAddress}` : fallbackimg}
        width={370}
        height={236}
        alt={item?.title}
        className="
          w-full object-cover rounded-[20px]
          transition-transform duration-700 ease-out
          group-hover:scale-110 h-full
        "
      />
    </div>
     <h1 className="font-semibold text-lg md:text-[22px]  capitalize">
      {item?.title}
    </h1>
    

    {item?.piller  &&  (
          <div className='flex flex-row gap-1'>
       <span className=' font-semibold cap'>Pillar Tag:</span>
       <div className=' flex items-center gap-0.5 bg-[#E5D5E5] rounded-full px-2.5 py-1.5'>
       <DotSvg/>
        <span className=' text-xs sm:text-xs  font-semibold'>{item?.piller?.title}</span>
       </div>
       
      </div>
    )}
     

         <div
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item?.body) }}
      className="text-sm md:text-[15px] text-black/70"
    />


   

   <div className=' flex flex-row items-center gap-1 text-sm'>
   <h2 className='text-[#000000] '>Impact Stat:</h2>
   
   <div className=' flex flex-row items-center gap-1'>
      <span className=' pt-0.5 '><GoDotFill/></span>
      <p className='  font-semibold'>{item?.impactAmount}</p>
   </div>

   </div>
  
    <div className="border-b border-black/10 w-full"></div>

    {/* Donors + Button */}
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        {[img1, img2, img3].map((img, i) => (
          <div
            key={i}
            className="w-[30px] h-[30px] rounded-full border-2 border-white ml-[-5px]"
          >
            <Image
              src={img}
              width={200}
              height={300}
              className="w-full h-full rounded-full object-cover"
              alt="donor"
            />
          </div>
        ))}

        <div className="w-[30px] h-[30px] rounded-full border-2 border-white ml-[-5px] bg-black text-white text-[10px] flex items-center justify-center font-semibold">
          {item?.impactAmount}
        </div>
      </div>

      <div  className=' mt-auto '>

        <button
        onClick={(e) => {
          e.stopPropagation(); // stop card click
          router.push('/donate'); // navigate to donate page
        }}
         className="  mt-auto btn-animated  bg-mint-cyan border border-transparent group cursor-pointer w-[146px] h-[40px] rounded-full relative overflow-hidden hover:border-[#8bc9c8] ">
          <span className="btn-animated-hover bg-[#9dd6d5] absolute top-1/2 left-1/2 w-0 h-0 rounded-full -translate-x-1/2 -translate-y-1/2 group-hover:w-44 group-hover:h-44 transition-all duration-500 ease-out"></span>
          <span className="btn-animated-text text-black font-semibold group-hover:text-gray-900 relative z-10">
            Donate Now
          </span>
        </button>
      </div>
     
    
    </div>
  </div>
))}
                
            
           </div>
                ) : (
          <ItemNotFound message="No  Program found." />
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