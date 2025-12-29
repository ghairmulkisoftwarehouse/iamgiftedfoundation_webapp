
import { bison } from '@/components/fonts/fonts';
import Image from 'next/image';
import {involvementData} from '@/constants/InvolvedConstants'

const VolunteerOptions = () => {
  return (
   <div className="px-5 xl:px-12 mt-16 w-full relative bg-[#F4F7F7]">
 



   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full lg:px-10 gap-5">
  {involvementData.map((item, index) => (
    <div
      key={index}
      className="border border-black/10 rounded-[22px] px-4 py-4 flex flex-col gap-3.5 
                 transform transition-transform duration-300 ease-in-out 
             hover:shadow-lg"
    >
      <Image
        src={item.image}
        alt={item.title}
        width={370}
        height={236}
        className="w-full h-[236px] object-cover rounded-2xl transition-transform duration-300 ease-in-out hover:scale-105"
      />
      <div className="flex flex-col gap-0.5">
        <h2 className={`text-[27px] lg:text-[38px] ${bison.className}`}>
          {item.title}
        </h2>
        <p className="text-black/50 text-base lg:text-base text-justify">
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