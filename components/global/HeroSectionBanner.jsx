'use client'

import React from 'react';
import ButterfullySvg from '@/assets/svg/LeftPinkButterfullySvg';
import ButterfullyrightSvg from '@/assets/svg/RightPinkButterfullysvg';
import BannerHeroSvg from '@/assets/svg/BannerHeroshapeSvg';
import { bison } from '@/components/fonts/fonts';
import { usePathname } from 'next/navigation';
import   EventDetailSvg  from '@/assets/svg/EventdeatilSvg'
import UnderLineProgramSvg   from '@/assets/svg/UnderLineProgramSvg';
import FullbutterfullyleftSvg  from '@/assets/svg/FullbutterfullyleftSvg'
import  FullbutterfullyrightSvg  from '@/assets/svg/FullbutterfullyrightSvg';

const HeroSectionBanner = ({
  title,
  subtitle,
  subtitleClass = '',
  height = 'h-[300px]',
    bannerSvgClass = 'w-[180px] xl:w-auto', 

}) => {

 const pathname=usePathname();

 const isEventDetailPage =
  pathname.startsWith("/events/") && pathname !== "/events";

 const isInvolvedPage = pathname === "/getinvolved";
 const isDonationPage = pathname === "/account/donation-history";
  const isImpactPage = pathname === "/account/impactreport";


  const isProgramPage = pathname.startsWith('/programs/');
  const isPillars=pathname.startsWith('/pillars');

  // const isDonatePage = pathname === "/donate";


  return (
    <div
      className={`w-full bg-black relative ${height} flex flex-col gap-1 sm:gap-3 items-center justify-center overflow-hidden`}

    >
      {/* Left Butterfly */}
      <div className="absolute top-[30%] md:top-[20%] left-0">
        <FullbutterfullyleftSvg className=" w-[100px] h-[100px] xs:w-[120px] xs:h-[120px]  sm:w-[150px] md:h-[150px]  lg:w-[200px] lg:h-[200px]" />
      </div>

      {/* Right Butterfly */}
      <div className="absolute  top-[30%] md:top-[20%] right-0">
        <FullbutterfullyrightSvg className="  w-[100px] h-[100px] xs:w-[120px] xs:h-[120px]  sm:w-[150px] md:h-[150px]  lg:w-[200px] lg:h-[200px]" />
      </div>

      {/* Title */}
    
<h2
  className={`text-thistle
   text-[50px]
    lg:text-[56px]
    xl:text-[72px]
    text-center
    ${bison.className}`}
>      
        <span className="relative inline-block">
          <span className="relative z-10">{title}</span>
          <span className="absolute left-0 right-0 bottom-[-2px] z-0">
 {
  isEventDetailPage || isInvolvedPage || isDonationPage || isImpactPage ? (
    <EventDetailSvg className={bannerSvgClass} />
  ) : isProgramPage  || isPillars ? (
    <UnderLineProgramSvg  className={bannerSvgClass}/>
  ) : (
    <BannerHeroSvg className={bannerSvgClass} />
  )
}
          </span>
        </span>
      </h2>

      {/* Subtitle */}

<div className=' px-1 sm:container mx-auto  px-3.5 '>
{subtitle && (
        <p className={`text-white text-center   ${subtitleClass}`}>
          {subtitle}
        </p>
      )}

</div>

      
    </div>
  );
};

export default HeroSectionBanner;
