'use client'
import { useEffect,useState,useMemo} from 'react';
import Image from 'next/image';
import   img from '@/assets/images/eventsimg1.png'; 
import   img2 from '@/assets/images/blurimage.png'; 
import { bison } from '@/components/fonts/fonts';
// import RecentEvent  from '../recentevent/RecentEvent';
// import EventList   from '../eventList/EventList';
import DetailLocationSvg   from '@/assets/svg/DetailLocationSvg';
import CalendarSvg from '@/assets/svg/CalendarSvg';
import {eventSingleDetail,eventSingleList }  from '@/constants/EventConstants'
import { motion } from "framer-motion";
import { GoDotFill } from "react-icons/go";

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
import Registerfrom   from './Registerfrom';




const EventInformation = ({ eventId, loading, error, event,  
    allEvent,
        allEventLoading,
        allEventError, }) => {


          const router=useRouter();
    const now = moment();
    

    // console.log(' this is a  event',event)

    //  devLog('EventInformation event:',event );
    //   const mainImage =
    // activeIndex === -1
    //   ? event?.featuredImage?.relativeAddress
    //   : event?.images?.[activeIndex]?.relativeAddress;
        // devLog('EventInformation props:', { eventId, loading, error, event });



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

      
       <div className=" w-full  flex  flex-col lg:flex-row    px-5 md:px-3.5  md:container mx-auto  gap-5 relative z-5">
          


<div className="   w-full  lg:w-2/4  flex flex-col gap-3.5 ">
  {loading ? (
    <DetailShimmer />
  ) : error ? (
    <DisplayError message={error?.message || "Something went wrong"} />
  ) : event ? (
    <>
      {/* Event Main Image & Info */}
      <div className="flex flex-col gap-0.5">
        <Image
          src={
            event?.featuredImage?.relativeAddress
              ? `${baseURL}/${event?.featuredImage?.relativeAddress}`
              : fallbackimg
          }
          alt="Program Image"
          width={794}
          height={451}
          className="w-full object-cover rounded-[22px] h-[300px] lg:h-[451px]"
        />

        {/* Event Details (Date & Location) */}
        <div className="flex flex-row flex-wrap gap-1.5 mt-2">
          <div className="flex items-center gap-2">
            <CalendarSvg className="w-4 h-4 text-black" />
            <p className="font-normal text-xs md:text-base text-black">
              {eventDateTime}
            </p>
          </div>

          <div className="flex items-center gap-1.5">
            <DetailLocationSvg className="w-4 h-4 text-black" />
            <p className="font-normal text-xs md:text-base text-black">
              {location || "Location not available"}
            </p>
          </div>
        </div>
      </div>

      {/* Event Title & Body */}
      <div className="flex flex-col gap-3 mt-4">
        <h3 className={`text-[28px] lg:text-[34px] ${bison.className}`}>
          {event?.title}
        </h3>

        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(event?.body),
          }}
          className="text-[#030F0CCC] text-sm lg:text-[15px] leading-normal lg:leading-[35px]"
        />
      </div>
    </>
  ) : (
    <ItemNotFound message="No Event found." />
  )}
</div>


<div className=" w-full  lg:w-2/4  flex flex-col gap-3.5 ">
<Registerfrom eventId={eventId}/>

</div>
   




       


   


       </div>



         
    
    </div>
  )
}

export default EventInformation
