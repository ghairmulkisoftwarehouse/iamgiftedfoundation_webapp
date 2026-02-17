'use client'
import { useEffect,useState,useMemo} from 'react';
import Image from 'next/image';
import   img from '@/assets/images/eventsimg1.png'; 
import   img2 from '@/assets/images/blurimage.png'; 
import { bison } from '@/components/fonts/fonts';
import RecentEvent  from '../recentevent/RecentEvent';
import EventList   from '../eventList/EventList';
import DetailLocationSvg   from '@/assets/svg/DetailLocationSvg';
import CalendarSvg from '@/assets/svg/CalendarSvg';
import {eventSingleDetail,eventSingleList }  from '@/constants/EventConstants'
import { motion } from "framer-motion";
import { GoDotFill } from "react-icons/go";
import { FaRegClock } from 'react-icons/fa';

import devlog from '@/utils/logsHelper';
import DetailShimmer   from '@/components/global/effect/DetailShimmer';
import ItemNotFound from '@/components/global/ItemNotFound';
import DisplayError from '@/components/global/DisplayError';
import { BsDot } from "react-icons/bs";
import devLog from '@/utils/logsHelper';
import DOMPurify from "dompurify";
import moment from 'moment';

import { baseURL } from '@/config/api';
import  fallbackimg from '@/assets/images/img2.jpg'
import Status  from '@/components/global/Status';
import { useRouter } from 'next/navigation';




const EventInformation = ({ eventId, loading, error, event,  
    allEvent,
        allEventLoading,
        allEventError, }) => {


          const router=useRouter();
   const [activeIndex, setActiveIndex] = useState(-1); 
    // devLog('EventInformation props:', { eventId, loading, error, event });
    const now = moment();
    

    //  devLog('EventInformation event:',event );
      const mainImage =
    activeIndex === -1
      ? event?.featuredImage?.relativeAddress
      : event?.images?.[activeIndex]?.relativeAddress;


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


  const eventDateTime = event?.eventDate
    ? moment(event?.eventDate).format('MMM DD, YYYY · h:mm A')
    : 'Date not available';

     const location = [event?.address, event?.city, event?.state]
    .filter(Boolean)
    .join(', ');

 // Registration Status
  const isRegistrationOpen =
    event?.registrationStartDate &&
    event?.registrationEndDate &&
    now.isBetween(
      moment(event.registrationStartDate),
      moment(event.registrationEndDate),
      null,
      "[]"
    );

  const isRegistrationClosed = event?.registrationEndDate && now.isAfter(moment(event.registrationEndDate));
  const isRegistrationUpcoming = event?.registrationStartDate && now.isBefore(moment(event.registrationStartDate));

  // Motion variants for buttons



   const daysLeft =
    event?.eventDate && moment(event?.eventDate).isAfter(moment())
      ? moment(event?.eventDate).diff(moment(), 'days')
      : 0;

const registeredCount = event?.registeredCount || 0;
const capacity = event?.capacity; 
const progress = capacity ? (registeredCount / capacity) * 100 : 100; 



  const buttonVariants = { hover: { scale: 1.05 }, tap: { scale: 0.95 } };
  const rippleVariants = { hover: { width: "999px", height: "44rem" } };

  return (
   <div className=" mt-16 w-full relative bg-[#F4F7F7]">
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

      
       <div className="grid grid-cols-1 lg:grid-cols-3 w-full px-5 md:px-3.5  md:container mx-auto  gap-6 relative z-5">
             <div className='lg:col-span-1    order-1 lg:order-1 '>

              <EventList

                    eventId={eventId}
  allEvent={allEvent}
  allEventLoading={allEventLoading}
  allEventError={allEventError}
              />
       </div>


        {loading ? (
    <DetailShimmer />
  ) : error ? (
    <DisplayError message={error?.message || "Something went wrong"} />
  ) : event ? (
    <>
   <div className='lg:col-span-2   flex flex-col gap-3.5     order-2 lg:order-2 '>

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
         
  {event?.images?.length > 0 && (
         <div className="grid grid-cols-2 sm:flex sm:flex-row sm:flex-wrap gap-3 pt-3.5">
           {/* Featured image thumbnail */}
           <div
             onClick={() => setActiveIndex(-1)}
             className={`sm:w-[140px] h-[90px] rounded-[10px] overflow-hidden relative cursor-pointer border-2 ${
               activeIndex === -1 ? "border-light-cyan" : "border-transparent"
             }`}
           >
             <Image
               src={`${baseURL}/${event?.featuredImage?.relativeAddress}`}
               alt="featured"
                   width={140}
                  height={90}
               className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
             />
           </div>
   

  {event?.images?.length > 0 && (
  <div className="flex flex-row gap-2  items-center ">
    {event.images.map((img, index) => (
      <div
        key={index}
        onClick={() => setActiveIndex(index)}
        className={`sm:w-[140px] h-[90px] rounded-[10px] overflow-hidden relative cursor-pointer border-2 ${
          activeIndex === index ? "border-light-cyan" : "border-transparent"
        }`}
      >
        <Image
          src={`${baseURL}/${img?.relativeAddress}`}
          alt={`img-${index + 1}`}
          width={140}
          height={90}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-[10px]" />
      </div>
    ))}
  </div>
)}

         </div>
  )}

  
   <div className="flex flex-row flex-wrap gap-1.5">
          <div className="flex items-center gap-2">
            <CalendarSvg className="w-4 h-4 text-black" />
            <p className="font-normal text-xs md:text-base text-black">
                {eventDateTime}
            </p>
          </div>

          <div className="flex items-center gap-1.5">
            <DetailLocationSvg className="w-4 h-4 text-black" />
            <p className="font-normal text-xs md:text-base text-black">
             
              {location || 'Location not available'}
            </p>
          </div>
        </div> 
   
       
         </div>



          <div className=' flex flex-col gap-3'>
          <h3  className={`text-[28px] lg:text-[34px] ${bison.className}`}> 
          
          {event?.title} 
          </h3>


<div
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(event?.body) }}
      className="text-[#030F0CCC] text-sm lg:text-[15px] leading-normal lg:leading-[35px]"
    />



     

     
<div className="flex flex-col gap-0.5 w-full">
  {/* Progress Bar */}
  <div className="w-full bg-black/20 rounded-full h-2">
    <div
      className="bg-[#9BD6F6] h-2 rounded-full transition-all duration-500"
      style={{
        width: `${Math.min(progress, 100)}%`, 
      }}
    />
  </div>

  {/* Count & Days Left */}
  <div className="flex justify-between items-center mt-1">
    <p className="text-sm">
      <span className="font-medium">{registeredCount}</span>
      <span className="text-xs text-black/60">
        {capacity ? `/${capacity}` : "/∞"}
      </span>
    </p>

    <div className="flex items-center gap-1">
      <FaRegClock />
      {/* Uncomment below if you have daysLeft */}
      <p className="text-xs">
        {daysLeft} <span className="font-medium text-black/80">days left</span>
      </p>
    </div>
  </div>
</div>



            {event?.hostedBy && event.hostedBy?.title && (
      <div className="flex flex-row items-center gap-2 text-sm">
        <h2 className="font-semibold text-base">Hosted By:</h2>
        <p className="text-black/80">{event?.hostedBy?.title}</p>
      </div>
    )}

{event?.sponsoredBy && event?.sponsoredBy.length > 0 && (
  <div className="flex flex-row items-center gap-2 text-sm flex-wrap">
    <h2 className="font-semibold text-base">Supported By:</h2>
    <p className="text-black/80">
      {event?.sponsoredBy.map((sponsor, index) => (
        <span key={sponsor?._id}>
          {sponsor.title}
          {index < event.sponsoredBy.length - 1 ? ", " : ""}
        </span>
      ))}
    </p>
  </div>
)}



      

      </div>

 
        {/* Buttons */}
        <div className=" w-full  flex  justify-end gap-3 ">
          {/* Register */}
          {isRegistrationOpen  && (
  <motion.button
    onClick={() => router.push(`/register-event/${eventId}`)}
    variants={buttonVariants}
    whileHover="hover"
    whileTap="tap"
    className="relative w-[197px] h-[50px] cursor-pointer rounded-full bg-mint-cyan text-black font-semibold overflow-hidden border border-transparent"
  >
    <motion.span
      variants={rippleVariants}
      className="absolute top-1/2 left-1/2 w-0 h-0 bg-[#9dd6d5] rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out"
    />
    <span className="relative z-10">Register</span>
  </motion.button>
)}

{   (isRegistrationUpcoming) && item?.waitlistEnabled && (
  <motion.button
    onClick={() => router.push(`/register-event/${eventId}`)}
    variants={buttonVariants}
    whileHover="hover"
    whileTap="tap"
    className="relative w-[197px] h-[50px] cursor-pointer rounded-full bg-mint-cyan text-black font-semibold overflow-hidden border border-transparent"
  >
    <motion.span
      variants={rippleVariants}
      className="absolute top-1/2 left-1/2 w-0 h-0 bg-[#9dd6d5] rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out"
    />
    <span className="relative z-10">Register for Waitlist</span>
  </motion.button>
)}

          {/* Disabled */}
          {isRegistrationClosed && (
            <motion.button
              disabled
              className="relative w-[197px]  h-[50px]    cursor-pointer rounded-full bg-mint-cyan text-black font-semibold opacity-50 cursor-not-allowed"
            >
              <motion.span
                className="absolute top-1/2 left-1/2 w-0 h-0 bg-[#9dd6d5] rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out"
              />
              <span className="relative z-10">Disabled</span>
            </motion.button>
          )}
        </div>

    

       </div>
    </>
  ): (
    <ItemNotFound message="No Event found." />
  )}
       


   


       </div>



         
    
    </div>
  )
}

export default EventInformation
