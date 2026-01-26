
'use client'
import { bison } from '@/components/fonts/fonts';
import {countrycities} from '@/constants/ImpactConstants'
import  img  from '@/assets/images/worldimg.png'
import './GeographicReach.css'
import Image from 'next/image';


const GeographicReach = () => {

  return (
     <div 
      className="relative flex flex-col gap-2 w-full   mt-20     overflow-hidden"
     >
    
        <div className="relative z-20 flex flex-col    gap-10   w-full   px-5 md:px-3.5  md:container mx-auto ">
            <div className=" flex flex-col   gap-2  ">
                <h2 className={`text-black text-4xl  sm:text-[46px] lg:text-[55px]    ${bison.className}`}>
                GEOGRAPHIC REACH
              </h2>      
            </div>
             

             <div className=' flex flex-col lg:flex-row  gap-5  w-full'>
             <div className=' w-full lg:w-[40%]  border border-[#0000002E]  rounded-[15px] overflow-hidden '>
                 <div className='  w-full px-3 py-3  flex flex-col gap-3 h-[400px] lg:h-[500px] overflow-y-auto countryScroll'>
                {countrycities.map((location, index) => (
                            <div
                                key={index}
                                className={`border border-[#0000002E] rounded-[10px] px-4 py-3 transition-colors cursor-pointer
                                ${index === 0 ? 'bg-white' : 'bg-transparent'}`}
                            >
                                <p className="text-sm text-[#333]">{location}</p>
                            </div>
                            ))}
                </div>
             </div>
                          <div className=' w-full lg:w-[60%]  border border-[#0000002E]   h-auto sm:h-[400px] lg:h-[500px]  rounded-[15px] overflow-hidden p-7 '>
                          <Image
                          src={img}
                          alt='img'
                           width={746}
                           height={437}
                             className=' w-full   h-full  object-contain  sm:object-cover'                    
                          />
                             
                          </div>
               

             </div>



              
            </div>
           
             
        </div>
  )
}

export default GeographicReach