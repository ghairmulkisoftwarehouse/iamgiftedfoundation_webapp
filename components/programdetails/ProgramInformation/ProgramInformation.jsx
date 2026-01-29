'use client'
import { useEffect,useState} from 'react';
import Image from 'next/image';
import   img from '@/assets/images/eventsimg1.png'; 
import   img2 from '@/assets/images/blurimage.png'; 
import { bison } from '@/components/fonts/fonts';
import ProgramList  from '../programlist/ProgramList';
import DetailLocationSvg   from '@/assets/svg/DetailLocationSvg';
import CalendarSvg from '@/assets/svg/CalendarSvg';
import {eventSingleDetail,eventSingleList }  from '@/constants/EventConstants'
import { GoDotFill } from "react-icons/go";







const ProgramInformation = () => {


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

              <ProgramList/>
       </div>
       <div className='lg:col-span-2   flex flex-col gap-3.5   '>

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
       <p className="font-normal text-xs md:text-base text-black">June 21, 12–3 PM</p>
            </div>
               <div className="flex items-center gap-1.5">
              <DetailLocationSvg className="w-4 h-4  text-black" />
              <p className="font-normal text-xs md:text-base text-black">Contrary to popular belief, </p>
            </div>



     </div>


       </div>



          <div className=' flex flex-col gap-3'>
          <h3  className={`text-[28px] lg:text-[34px] ${bison.className}`}> Program Purpose </h3>

        <p className="text-[#030F0CCC] text-sm lg:text-[15px] leading-normal   lg:leading-[35px] ">
  A one-day, high-impact experience focused on building life skills, leadership, and confidence—both on and off the field. Participants engage in hands-on activities designed to strengthen teamwork, communication, and self-belief, creating skills they can carry into everyday life.
        </p>

      </div>
     

          <div className=' flex flex-col gap-3'>
          <h3  className={`text-[28px] lg:text-[36px] ${bison.className}`}> Who It Serves </h3>

        
           <ul className='flex flex-wrap flex-row gap-5 w-full'>
              <li className=' text-[17px] font-semibold flex gap-1 items-center'>
               <span  className='text-[14px]  pt-0.5'><GoDotFill/></span>    <span>Youth served</span> 
              </li>
              <li className=' text-[17px] font-semibold flex gap-1 items-center'>
               <span  className='text-[14px]  pt-0.5'><GoDotFill/></span>    <span>Sessions delivered</span> 
              </li>
              <li className=' text-[17px] font-semibold flex gap-1 items-center'>
               <span  className='text-[14px]  pt-0.5'><GoDotFill/></span>     <span>Scholarships and events held</span>
              </li>
             </ul>

      </div>
       
          <div className=' flex flex-col gap-3'>
          <h3  className={`text-[28px] lg:text-[36px] ${bison.className}`}> Outcomes & Stats </h3>

        <p className="text-[#030F0CCC] text-sm lg:text-base leading-normal    ">
    Our programs are designed to create meaningful, real-world impact for youth and families across our communities. Through engaging activities, mentorship, and hands-on learning, participants build confidence, leadership, and essential life skills. We focus on meeting immediate needs while also supporting long-term growth and resilience. By partnering with families, schools, and community organizations, we ensure access to resources, guidance, and opportunities that help young people succeed academically, socially, and emotionally. Every initiative is guided by clear goals, measurable outcomes, and a commitment to equity, empowerment, and sustainable change that lasts well beyond each program experience for future generations and stronger, healthier communities nationwide today and tomorrow together.
        </p>

      </div>



       

  

       </div>


     


       </div>



         
    
    </div>
  )
}

export default ProgramInformation
