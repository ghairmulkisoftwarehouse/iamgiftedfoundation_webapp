
import SearchBox  from '@/components/global/SearchBox'
import { DonateItems } from "@/constants/DonateConstants";

import Image from 'next/image';
import  CalendarSvg   from '@/assets/svg/CalendarSvg'


const RecentDonate = () => {
  return (
    <div className="flex flex-col gap-4">
    <SearchBox/>
    <div className="bg-grayblue-alt px-5 py-5 rounded-[22px] flex flex-col  gap-5 text-black">
      <h2 className=" text-lg md:text-[19px] font-bold  ">Recent Donations</h2>

<div className=' flex flex-col  gap-6'>
   {DonateItems.map((item, index) => (
        <div key={index} className="flex flex-row items-center gap-3  cursor-pointer">
          {/* Image */}
          <div className="w-[78px] h-[78px] flex-shrink-0">
            <Image
              src={item.image}
              alt={item.description}
              width={78}
              height={78}
              className="rounded-[8px] w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-1">
            {/* Date */}
            <div className="flex items-center gap-1.5">
              <CalendarSvg className="w-4 h-4 text-black" />
              <p className="font-normal text-xs md:text-sm">{item.date}</p>
            </div>

            {/* Title */}
            <h2
          className="text-sm sm:text-base md:text-[17px] font-semibold 
                     transition-all duration-300 ease-in-out
                     hover:text-black/70 group-hover:translate-x-1"
        >
          {item.description}
        </h2>
          </div>
        </div>
      ))}
</div>
     

    </div>

       
  

    </div>
  )
}

export default RecentDonate