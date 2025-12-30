
import SearchBox  from '@/components/global/SearchBox'
import { DonateItems } from "@/constants/DonateConstants";

import Image from 'next/image';
import  CalendarSvg   from '@/assets/svg/CalendarSvg'


const RecentEvent = () => {
  return (
    <div className="flex flex-col gap-4">
    <SearchBox/>

   <div className="bg-light-cyan px-5 py-5 rounded-[22px] flex flex-col  gap-5 text-black">
      <h2 className="  text-lg md:text-[19px] font-bold ">Past Events</h2>

      {DonateItems.map((item, index) => (
        <div key={index} className="flex flex-row items-center gap-2.5">
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
              <CalendarSvg className="w-4 h-4 " />
              <p className="font-normal text-xs md:text-sm ">{item.date}</p>
            </div>

            {/* Title */}
            <h2 className= " text-base md:text-[17px] font-semibold">{item.description}</h2>
          </div>
        </div>
      ))}

    </div>

    <div className="bg-grayblue-alt px-5 py-5 rounded-[22px] flex flex-col  gap-5 text-black">
      <h2 className="  text-lg md:text-[19px] font-bold ">Future Events</h2>

      {DonateItems.map((item, index) => (
        <div key={index} className="flex flex-row items-center gap-2.5">
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
              <CalendarSvg className="w-4 h-4 " />
              <p className="font-normal text-xs md:text-sm ">{item.date}</p>
            </div>

            {/* Title */}
            <h2 className= " text-base md:text-lg font-semibold">{item.description}</h2>
          </div>
        </div>
      ))}

    </div>

       
  

    </div>
  )
}

export default RecentEvent