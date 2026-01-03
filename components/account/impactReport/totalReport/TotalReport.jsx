'use client'

import ButterfullySvg from '@/assets/svg/LeftPinkButterfullySvg';
import ButterfullyrightSvg from '@/assets/svg/RightPinkButterfullysvg';
// import BannerHeroSvg from '@/assets/svg/BannerHeroshapeSvg';
import { bison } from '@/components/fonts/fonts';
import { usePathname } from 'next/navigation';


const TotalReport = () => {

 const pathname=usePathname();





  return (
    <div
      className={`w-full bg-light-cyan relative   rounded-[15px] h-auto flex flex-col gap-1  items-center justify-center overflow-hidden  py-8`}

    >
      {/* Left Butterfly */}
      <div className="absolute top-0  left-0">
        <ButterfullySvg className="w-[200px] h-[200px]" />
      </div>

      {/* Right Butterfly */}
      <div className="absolute top-0  right-0">
        <ButterfullyrightSvg className="w-[200px] h-[200px]" />
      </div>

      {/* Title */}
    
<h2
  className={`text-black
   text-[50px]
    lg:text-[56px]
     xl:text-[65px]
    text-center
    ${bison.className}`}
>      
      $ 40.5 M
      </h2>


 
        <p className={`text-center text-[#030F0CCC]  text-sm sm:text-base md:text-lg }`}>
    Overall IAM Gifted Foundation Impact Report
        </p>

          <h2 className={` text-center   text-xs sm:text-sm md:text-base  text-[#030F0CCC]/80 }`}>
October 31, 2025 14:02:15
        </h2>
      



      
    </div>
  );
};

export default TotalReport;
