'use client'
import { useEffect,useState} from 'react';
import { bison } from '@/components/fonts/fonts';
import  img  from '@/assets/images/fundrasingimg.png' 
import  img1  from '@/assets/images/donateperson1.png' 
import  img2  from '@/assets/images/donateperson2.png' 
import  img3  from '@/assets/images/donateperson3.png'
import Image from 'next/image';
import DotSvg   from '@/assets/svg/DotSvg'
import { GoDotFill } from "react-icons/go";
import { useRouter } from 'next/navigation';
import  fallBackimg from '@/assets/images/img2.jpg'
import   LocationSvg from '@/assets/svg/LocationSvg';
import DateSvg   from '@/assets/svg/DateSvg';
import ClockSvg   from '@/assets/svg/ClockSvg';
import  {eventsList} from '@/constants/EventConstants'
import EventShimmer  from '@/components/global/effect/EventShimmer';
import { useSelector } from 'react-redux';
import devLog from '@/utils/logsHelper';
import DisplayError from '@/components/global/DisplayError';
import ItemNotFound from '@/components/global/ItemNotFound';
import fallbackimg  from '@/assets/images/img2.jpg'
import moment from 'moment';

import { baseURL } from '@/config/api';

const EventList = (  
{
 isFetching,
  setCurrentPage,
  currentPage,
  isLoading,
  isError,
  error,
}
  
 
) => {


    const { docs ,pages} = useSelector(state => state.event);

  devLog('devLog',docs);
    devLog('this is a',pages);


  const [activeTab, setActiveTab] = useState('All'); 

  const tabs = ['All', 'Programs', 'Community', 'Fundraisers'];

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
 Join Events That Inspire Change
            </h2>
         <div className=' w-full px-6  md:px-0   md:w-4/5  lg:w-8/12 mx-auto'>
        <p className='  text-sm sm:text-base md:text-lg  font-thin text-[#030F0CCC]/80  text-center ' >
      Be part of IAMGIFTED Foundations engaging events, designed to empower youth and families while creating meaningful experiences through our Four Pillars.
            </p>
            </div>
       
         </div>
         

<div className=' w-full flex flex-col gap-4'>
<div className="flex flex-row flex-wrap gap-1.5 w-full px-5 md:px-3.5 md:container mx-auto relative z-10">
      {tabs.map((tab) => (
        <div
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`
            w-fit px-5 h-[41px] flex items-center justify-center 
            border border-[#0000001F] rounded-[50px] cursor-pointer
            transition-colors duration-300
            ${activeTab === tab ? 'bg-black text-white' : 'bg-white text-black'}
          `}
        >
          {tab}
        </div>
      ))}
    </div>

      {isLoading ? (
        <>
          <EventShimmer />
          </>
        ) : isError ? (
          <DisplayError message={error?.message || 'Something went wrong'} />
        ) :docs?.length > 0 ? (
   <div

    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-5 md:px-3.5 md:container mx-auto relative z-10">
          
       {docs.map((item,index) => (
        <div
          key={item?._id}
           onClick={() => router.push('/events/1')}
          className="group cursor-pointer border border-black/20 rounded-[20px] p-3 flex flex-col gap-3 transition-all duration-700 ease-out hover:shadow-2xl"
        >
          <div className="w-full h-[250px] overflow-hidden rounded-[20px]">
            <Image
               src={item?.featuredImage?.relativeAddress ? `${baseURL}/${item?.featuredImage?.relativeAddress}` : fallBackimg}
              
              width={370}
              height={236}
              alt={item?.title}
              className="w-full h-full object-cover rounded-[20px] transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>

          <h1 className="font-semibold text-lg md:text-[22px] capitalize">{item?.title}</h1>

          {/* Location */}
          <div className="flex flex-col gap-1.5 w-full">
            <div className="flex items-start gap-2 text-sm md:text-[15px]">
              <div className="flex flex-row items-center gap-1">
                <LocationSvg />
                <span className="font-semibold">Location:</span>
              </div>
              <span className="text-black/70"><span className="text-black/70">
  {item?.address || 'Address not available'}
</span></span>
            </div>

            {/* Date & Time */}
            <div className="flex flex-col gap-1.5">
              <h2 className="font-semibold">Date & Time</h2>
              <div className="flex flex-row flex-wrap gap-4 w-full">
                <p className="flex items-center gap-1.5 text-sm md:text-[15px]">
                  <DateSvg />
                 <span className="text-black/70">
  {item?.eventDate 
    ? moment(item.eventDate).format('ddd DD MMM') 
    : 'Date not available'}
</span>
                </p>
                <p className="flex items-center gap-1.5 text-sm md:text-[15px]">
                  <ClockSvg />
                  <span className="text-black/70"></span>
                </p>
              </div>
            </div>

            {/* Registration Status */}
            <div className="flex flex-row items-center gap-1 text-sm md:text-[15px]">
              <h2 className="text-[#000000] font-semibold">Registration status:</h2>
              <div className="flex flex-row items-center gap-1">
                <span className="pt-0.5 text-[10px]">
                  <GoDotFill />
                </span>
                <p className="font-semibold text-black/60"></p>
              </div>
            </div>
          </div>

          {/* Join Waitlist Button */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // prevent card click
              router.push("/auth/register");
            }}
            className="mt-auto btn-animated bg-mint-cyan border border-transparent group cursor-pointer w-full rounded-full relative overflow-hidden hover:border-[#8bc9c8]"
          >
            <span className="btn-animated-hover bg-[#9dd6d5] absolute top-1/2 left-1/2 w-0 h-0 rounded-full -translate-x-1/2 -translate-y-1/2 group-hover:w-[999px] group-hover:h-44 transition-all duration-500 ease-out"></span>
            <span className="btn-animated-text text-black font-semibold group-hover:text-gray-900 relative z-10">
              Join Waitlist
            </span>
          </button>
        </div>
      ))}
         


        </div>
              ) : (
          <ItemNotFound message="No  Event found." />
        )}
   

</div>
  
                
       
  
   
   


          
         </div>


           <div className=" w-full  flex justify-center pt-5  ">


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

export default EventList