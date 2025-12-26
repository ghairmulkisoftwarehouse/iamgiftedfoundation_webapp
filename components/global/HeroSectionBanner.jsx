'use client'

import React from 'react';
import ButterfullySvg from '@/assets/svg/LeftPinkButterfullySvg';
import ButterfullyrightSvg from '@/assets/svg/RightPinkButterfullysvg';
import BannerHeroSvg from '@/assets/svg/BannerHeroshapeSvg';
import { bison } from '@/components/fonts/fonts';
import { usePathname } from 'next/navigation';
import   EventDetailSvg  from '@/assets/svg/EventdeatilSvg'

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

  return (
    <div
      className={`w-full bg-black px-5 xl:px-12 relative ${height} flex flex-col gap-4 items-center justify-center overflow-hidden`}
    >
      {/* Left Butterfly */}
      <div className="absolute top-[20%] left-[-120px] sm:left-[-70px]">
        <ButterfullySvg className="w-[200px] h-[200px]" />
      </div>

      {/* Right Butterfly */}
      <div className="absolute top-[20%] right-[-120px] sm:right-[-70px]">
        <ButterfullyrightSvg className="w-[200px] h-[200px]" />
      </div>

      {/* Title */}
      <h2
        className={`text-thistle text-[60px] xl:text-[95px] text-center ${bison.className}`}
      >
        <span className="relative inline-block">
          <span className="relative z-10">{title}</span>
          <span className="absolute left-0 right-0 bottom-[-2px] z-0">
              {isEventDetailPage ? (
      <EventDetailSvg className={bannerSvgClass} />
    ) : (
      <BannerHeroSvg className={bannerSvgClass} />
    )}
          </span>
        </span>
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className={`text-white text-center ${subtitleClass}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default HeroSectionBanner;
