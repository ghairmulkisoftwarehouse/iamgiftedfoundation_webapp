import { bison } from '@/components/fonts/fonts';
import {pillarsData} from '@/constants/homeConstants'


const PillarsSection = () => {
  return (
    <div className="mt-16">
        <div className="flex flex-col w-full gap-10    container mx-auto  px-3.5">
        <h2 className={`text-black text-4xl  sm:text-[46px] lg:text-[55px]  ${bison.className}`}>
                FOUR PILLARS 
        </h2>
 <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3.5 lg:space-y-4 w-full pt-11">
  {pillarsData.map((pillar, index) => (
    <div 
      key={index} 
      className='h-[300px] border border-black/25 rounded-[24px] flex flex-col justify-between px-5 py-5 bg-transparent hover:bg-white hover:shadow-lg transition-all duration-300 group'
    >
      <div className='flex flex-col gap-1'>
        <h2 className='font-semibold text-xl text-gray-800 group-hover:text-black'>
          {pillar.title}
        </h2>
        <p className='text-[#030F0CCC] text-[15px] group-hover:text-gray-800'>
          {pillar.paragraph}
        </p>
      </div>

      <div className='flex justify-end w-full'>
        <div className='w-[70px] h-[70px] bg-[#B6E2E2] rounded-full flex justify-center items-center group-hover:bg-[#9BDADA] transition-colors duration-300'>
          {pillar.icon}
        </div>
      </div>
    </div>
  ))}
</div>


        </div>
        

   
    </div>
  )
}

export default PillarsSection