import { bison } from '@/components/fonts/fonts';
import {pillarsData} from '@/constants/homeConstants'


const PillarsSection = () => {
  return (
    <div className="mt-16">
        <div className="flex flex-col w-full gap-10   px-5  md:px-3.5  md:container mx-auto  ">
        <h2 className={`text-black text-4xl  sm:text-[46px] lg:text-[55px]  ${bison.className}`}>
                FOUR PILLARS 
        </h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3.5 lg:space-y-4 w-full cursor-pointer">
          {pillarsData.map((pillar, index) => {
            const Icon = pillar?.icon; 

            return (
              <div
                key={index}
                className=" h-[250px] sm:h-[300px] border border-black/25 rounded-[24px] flex flex-col justify-between px-5 py-5 bg-transparent hover:bg-white hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex flex-col gap-1 pr-3 xl:pr-8">
                  <h2 className="font-semibold text-lg md:text-xl text-black group-hover:text-gray-800">
                    {pillar.title}
                  </h2>
                  <p className="text-[#030F0CCC]/80 text-sm md:text-[15px] group-hover:text-gray-800">
                    {pillar.paragraph}
                  </p>
                </div>

                <div className="flex justify-end w-full">
                  <div className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] bg-[#B6E2E2] rounded-full flex justify-center items-center group-hover:bg-[#9BDADA] transition-colors duration-300">
              
                    <Icon className="w-[40px]  sm:w-auto h-[40px] sm:h-auto" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className=' flex justify-center items-center'>
        <button className='btn-seeMore  border '>
                  Explore Our 
                </button>

        </div>
    



        </div>
        

   
    </div>
  )
}

export default PillarsSection