'use client'
import { useEffect,useState} from 'react';
import Image from 'next/image';
import   img from '@/assets/images/eventsimg1.png'; 
import   img2 from '@/assets/images/blurimage.png'; 
import { bison } from '@/components/fonts/fonts';
import RecentEvent  from '../recentevent/RecentEvent';
import DetailLocationSvg   from '@/assets/svg/DetailLocationSvg';
import CalendarSvg from '@/assets/svg/CalendarSvg';
import {eventSingleDetail,eventSingleList }  from '@/constants/EventConstants'

import { BsDot } from "react-icons/bs";





const EventInformation = () => {


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

      
       <div className="grid grid-cols-1 lg:grid-cols-3 w-full container mx-auto  px-3.5  gap-6 relative z-5">
       <div className='lg:col-span-2   flex flex-col gap-3.5   order-1 lg:order-1'>

       <div className='flex flex-col gap-2'>
          <Image
        src={img}
        alt={'img'}
        width={794}
        height={451}
        className="w-full  object-cover rounded-[22px] h-[300px] lg:h-[451px]"
      />
   

     <div className=' flex flex-row flex-warp gap-1.5'>

       <div className="flex items-center gap-2">
              <CalendarSvg className="w-4 h-4 text-black" />
              <p className="font-normal text-xs md:text-base text-black">21 Jun 12-3PM </p>
            </div>
               <div className="flex items-center gap-1.5">
              <DetailLocationSvg className="w-4 h-4  text-black" />
              <p className="font-normal text-xs md:text-base text-black">Contrary to popular belief, </p>
            </div>



     </div>


       </div>



          <div className=' flex flex-col gap-3'>
          <h3  className={`text-[28px] lg:text-[34px] ${bison.className}`}> Join Us for the IAMGIFTED Skills Camp June 21 at Kuna High School! </h3>

        <p className="text-[#030F0CCC] text-sm lg:text-[15px] leading-normal   lg:leading-[35px] ">
  A one-day, high-impact experience focused on building life skills, leadership, and confidence—on and off the field. Arcu ultricies malesuada lectus nulla est nunc integer pellentesque magna. Egestas malesuada faucibus arcu nunc elit leo quis interdum. Ac vel in commodo accumsan mollis cras massa posuere eget. Condimentum posuere velit cras velit tortor ridiculus sit. Lectus augue libero etiam sed nisl.
        </p>

      </div>
     

      {eventSingleDetail.map((item, index) => (
        <div key={index} className="flex flex-col gap-3">
          <h3 className={`text-[28px] lg:text-[34px] ${bison.className}`}>
            {item.title}
          </h3>
          <p className="text-[#030F0CCC] text-sm lg:text-[15px] leading-[24px]">
            {item.paragraph}
          </p>
        </div>
      ))}





       



       <div className='flex flex-col gap-0.5 pt-3.5'>
          <Image
        src={img2}
        alt={'img'}
        width={794}
        height={451}
        className="w-full  object-cover rounded-[22px] h-[300px] lg:h-[451px]  "
      />
   

     <div className=' flex flex-row flex-warp gap-1.5'>

       <div className="flex items-center gap-1.5">
              <p className="font-normal text-sm md:text-[15px] text-black/80">Vivamus a dignissim nulla ornare sit aliquam elementum blandit. Leo in sem pellentesque viverra malesuada viverra eget aliquam: </p>
            </div>
              



     </div>

     


       </div>

  <div className="flex flex-col gap-4 w-full">
      {eventSingleList.map((item, index) => (
        <p
          key={index}
          className="text-[#030F0CCC] text-sm lg:text-[15px] leading-normal flex items-start gap-1"
        >
          <span className="font-semibold text-black flex items-center pt-1 text-xl">
            <BsDot />
          </span>
          <span>
            <span className="font-semibold text-black">{item.title}</span>{" "}
            {item.paragraph}
          </span>
        </p>
      ))}
    </div>
       




       
          <div className=' flex flex-col gap-3'>
          <h3  className={`text-[28px] lg:text-[36px] ${bison.className}`}> Libero etiam  </h3>

        <p className="text-[#030F0CCC] text-sm lg:text-base leading-normal    ">
        Arcu ultricies malesuada lectus nulla est nunc integer pellentesque magna. Egestas malesuada faucibus arcu nunc elit leo quis interdum. Ac vel in commodo accumsan mollis cras massa posuere eget. Condimentum posuere velit cras velit tortor ridiculus sit. Lectus augue libero etiam sed nisl.
        </p>

      </div>



       

  

       </div>


         <div className='lg:col-span-1   order-2 lg:order-2'>

              <RecentEvent/>
       </div>


       </div>



         
    
    </div>
  )
}

export default EventInformation
