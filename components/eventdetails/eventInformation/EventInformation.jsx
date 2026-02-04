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




const EventInformation = ({ eventId, loading, error, event,  
    allEvent,
        allEventLoading,
        allEventError, }) => {

   const [activeIndex, setActiveIndex] = useState(-1); 
    devLog('EventInformation props:', { eventId, loading, error, event });

     devLog('EventInformation event:',event );
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


  const eventDateTime = event?.startDate
    ? moment(event?.startDate).format('MMM DD, YYYY · h:mm A')
    : 'Date not available';

     const location = [event?.address, event?.city, event?.state]
    .filter(Boolean)
    .join(', ');



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
     

         {/* Registration button */}
      

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
