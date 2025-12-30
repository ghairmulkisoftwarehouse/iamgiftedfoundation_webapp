'use client'
import { useState, useEffect, useRef } from "react";
import { bison } from '@/components/fonts/fonts';
import  img1  from '@/assets/images/ourMission1.png'
import  img2 from '@/assets/images/ourMission2.png'

import Image from 'next/image';
const BOX_HEIGHT = 85;



const OurteamMission = () => {


  
  return (
    <div 
 
    className='bg-white   mt-16  w-full  relative '>


     {/* Grid Background */}
     

  
    <div className='flex flex-col  space-y-20  sm:gap-3 px-5 lg:px-12 py-9'>
    <div className='flex flex-col sm:flex-row items-center  gap-9 sm:gap-8  lg:gap-24   w-full   lg:px-7  '>

      <div className=' w-full sm:w-1/2 lg:w-3/5 flex flex-col gap-2   '>
      <h2  className={`text-black text-4xl  sm:text-[46px] lg:text-[55px] ${bison.className}`}>From the Beginning</h2>
      <div className='  pr-7 lg:pr-12    text-sm md:text-[15px] text-[#030F0CCC]  leading-7'>
           <p>From the start, we’ve been dedicated to empowering the next generation through our core programs—sports camps, financial literacy workshops, and mental health awareness discussions. We’ve seen firsthand how lives can be changed when young people discover their inner strength and tap into their unique gifts.</p>
      <p>As the need for Mental health support grows, we’re expanding our focus to offer comprehensive Mental health resources, workshops, and subsidized services to ensure that no one walks this journey alone. By addressing both mind and body, we’re helping to create a brighter future for our communities.</p>
      </div>


    </div>

     <div className='   w-full  sm:w-1/2  lg:w-2/5 justify-center items-center'>
     <div className=' w-full xl:w-[90%] '>
       <Image
        src={img1}
        alt='img'
        width={531}
        height={594}
        className=' rounded-[25px] w-full h-auto sm:h-[500px]   sm:object-cover   lg:h-auto'
     />

     </div>
    
      
   
    </div>

    </div>




  <div className='flex flex-col sm:flex-row items-center  gap-9 sm:gap-8 lg:gap-24   w-full  lg:px-7   '>


    <div className='    order-2 sm:order-1    w-full  sm:w-1/2  lg:w-2/5 justify-center items-center'>
     <div className=' w-full xl:w-[90%] '>
       <Image
        src={img2}
        alt='img'
        width={531}
        height={594}
        className=' rounded-[25px] w-full h-auto sm:h-[500px]   sm:object-cover   lg:h-auto'
     />

     </div>
    
      
   
    </div>


      <div className=' w-full  order-1 sm:order-2 sm:w-1/2 lg:w-3/5 flex flex-col gap-2   '>
      <h2  className={`text-black text-4xl  sm:text-[46px] lg:text-[55px] ${bison.className}`}>Join the movement</h2>
        <div className='  pr-7 lg:pr-12   text-sm md:text-[15px] text-[#030F0CCC] leading-7'>
           <p>This is more than a foundation; it’s a movement. A movement fueled by the belief that when we lift each other up, we all rise. Your support—whether through donations, volunteering, or sharing our story—directly impacts the lives of those who need it most.</p>
      <p>Join us in this mission. Together, we can inspire hope, foster growth, and create lasting change. Help us show the world that no matter where you come from or what challenges you face, you are gifted.</p>
      </div>


    </div>

   
    </div>
      
  

    </div>






    

    </div>
  )
}

export default OurteamMission