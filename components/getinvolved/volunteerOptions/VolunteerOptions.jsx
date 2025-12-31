'use client'

import { bison } from '@/components/fonts/fonts';
import Image from 'next/image';
import {involvementData} from '@/constants/InvolvedConstants'

const VolunteerOptions = () => {
  return (
   <div className=" mt-16 w-full relative bg-[#F4F7F7]">
 



<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full pt-4 container mx-auto  px-3.5  gap-5">
  {involvementData.map((item, index) => (
    <div
      key={index}
      className="group border border-black/10 rounded-[22px] px-4 py-4 flex flex-col gap-3.5
       cursor-pointer
                 transition-all duration-300 ease-in-out
                 hover:shadow-lg"
    >
      <Image
        src={item.image}
        alt={item.title}
        width={370}
        height={236}
        className="w-full h-[236px] object-cover rounded-2xl
                   transition-transform duration-300 ease-in-out
                   group-hover:scale-105"
      />

      <div className="flex flex-col gap-0.5 transition-all duration-300">
        <h2
          className={`text-[27px]   lg:text-[30px] ${bison.className}
                      transition-colors duration-300
                      group-hover:text-black`}
        >
          {item.title}
        </h2>

        <p className="text-[#030F0CCC] text-[13px] sm:text-sm lg:text-[15px] text-justify
                      transition-colors duration-300
                      group-hover:text-black/70">
          {item.description}
        </p>
      </div>
    </div>
  ))}
</div>


                 




         
    
    </div>
  )
}

export default VolunteerOptions