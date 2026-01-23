import { bison } from '@/components/fonts/fonts';
import {highlightdata} from '@/constants/ImpactConstants'
// import CampsSvg   from '@/assets/svg/CampsSvg';
import BookedChart  from './charts/BookedChart';


const HighlightCards = () => {
  return (
    <div className=" mt-20 w-full ">
        <div className="flex flex-col w-full gap-10   px-5  md:px-3.5  md:container mx-auto  ">
        <h2 className={`text-black text-4xl  sm:text-[46px] lg:text-[55px]  ${bison.className}`}>
               2025 HIGHLIGHTS
        </h2>
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 lg:space-y-4 w-full cursor-pointer">

   {highlightdata.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className=" h-full border border-black/25 rounded-[24px] flex flex-col gap-3.5 py-5 bg-transparent hover:bg-white hover:shadow-lg transition-all duration-300 group"
          >
            {/* Top Row */}
            <div className="flex justify-between w-full px-5">
              <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] bg-[#B6E2E2] rounded-full flex justify-center items-center group-hover:bg-[#9BDADA] transition-colors duration-300">
                <Icon  className={ 'w-[40px] h-[40px]   sm:w-auto sm:h-auto'}/>
              </div>

              <div className="flex flex-col gap-0.5 items-end">
                <h2 className="font-semibold   text-xl  md:text-[22px] lg:text-2xl">
                  {item.count}
                </h2>
                <p className="  text-xs sm:text-sm text-black/75 font-semibold">
                  {item.countDescription}
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-0.5 w-full px-5">
              <h2 className="font-semibold   text-lg  sm:text-xl lg:text-[20px]">
                {item.title}
              </h2>
              <p className="text-[#030F0CCC]/80  text-xs sm:text-sm lg:text-[15px] font-medium   ">
                {item.paragrph}
              </p>
            </div>

            {/* Chart */}
            <div className="px-1 pt-3">
              <BookedChart />
            </div>
          </div>
        );
      })}


 
  



</div>
   
    



        </div>
        

   
    </div>
  )
}

export default HighlightCards