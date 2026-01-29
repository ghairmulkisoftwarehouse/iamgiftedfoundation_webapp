import { bison } from '@/components/fonts/fonts';

import ImpactShpeSvg   from   '@/assets/svg/ImpactShpeSvg';
import  ButterflySvg   from  '@/assets/svg/ButterflySvg';
import Link from 'next/link';
import ArrowUpSvg  from '@/assets/svg/ArrowUpSvg'

const TrackImpact = () => {
  return (
     <div className=" w-full gap-10   px-5  md:px-3.5  md:container mx-auto   ">
   <div
     className="  w-full h-[200px] md:h-[170px] bg-thistle rounded-[25px]  flex flex-col  justify-center   overflow-hidden  relative" 
    >
    <div className=' absolute left-0 z-5   hidden md:block'>
      <ImpactShpeSvg/>
    </div>

      <div className=' absolute right-0 bottom-0 z-5'>
      <ButterflySvg className={'   w-[150px] lg:w-auto'}/>
    </div>

    <div className=' w-full flex flex-col gap-3 md:gap-0 md:flex-row  md:justify-between   px-6  items-center relative z-10'>
   <h2 className={`text-black  text-[28px]  sm:text-3xl md:text-4xl xl:text-[38px] text-center md:text-start   ${bison.className}`}>

Track your impact and  see <br className=' hidden md:block'/> your contribution work

               
        </h2>
        <div className=" flex flex-row justify-center  xs:justify-normal  gap-0 group cursor-pointer w-full xs:w-auto  ">
              
                               <a
    href="https://play.google.com/store" // link to Google Play
    target="_blank"
    rel="noopener noreferrer"
  >
                      <button className="btn-donate group-hover:bg-lavender cursor-pointer  z-5    w-[198px] h-[40px] md:h-[50px] ">
                        <span className="btn-donate-hover group-hover:w-56 group-hover:h-56"></span>
                        <span className="btn-donate-text group-hover:text-black text-[13px] sm:text-sm md:text-base">
                       Open the App
                        </span>
                      </button>
                    </a>
                
                                       <a
    href="https://play.google.com/store" // link to Google Play
    target="_blank"
    rel="noopener noreferrer"
  >
                      <button className="btn-icon group-hover:bg-lavender cursor-pointer z-5  w-[40px] h-[40px] md:h-[50px] md:w-[50px]  ">
                        <span className="btn-icon-hover group-hover:translate-y-0"></span>
                        <ArrowUpSvg className="text-white group-hover:text-black z-10 w-[30px] md:w-auto" />
                      </button>
                    </a>
                
                  </div> 
    </div>


    </div>
     </div>
   
  )
}

export default TrackImpact