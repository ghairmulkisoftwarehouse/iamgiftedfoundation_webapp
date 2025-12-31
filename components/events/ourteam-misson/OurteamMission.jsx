import React from 'react'
import { bison } from '@/components/fonts/fonts';
import  img1  from '@/assets/images/ourMission1.png'
import  img2 from '@/assets/images/ourMission2.png'

import Image from 'next/image';

const OurteamMission = () => {
  return (

       <div className='flex flex-col  space-y-20  sm:gap-3 py-9 bg-white  mt-16'>
      <div className='flex flex-col sm:flex-row items-center  gap-9 sm:gap-8  lg:gap-24   w-full  container mx-auto  px-3.5  '>
  
        <div className=' w-full sm:w-1/2 lg:w-3/5 flex flex-col gap-2   '>
        <h2  className={`text-black text-4xl  sm:text-[46px] lg:text-[55px] ${bison.className}`}>From the Beginning</h2>
        <div className='  pr-0  sm:pr-7 lg:pr-12    text-sm md:text-[15px] text-[#030F0CCC]  leading-7'>
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
  
  
  
  
 
        
    
  
      </div>
    
  )
}

export default OurteamMission