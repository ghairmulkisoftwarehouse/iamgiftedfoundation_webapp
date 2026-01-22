'use client'
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { bison } from '@/components/fonts/fonts';

import { featuredData } from '@/constants/homeConstants';
import Link from 'next/link';
import Image from 'next/image';
import RightArrowSvg from '@/assets/svg/RightArrowSvg';
import LeftArrowSvg from '@/assets/svg/LeftArrowSvg';

const Fundrasing = () => {


  
  return (
    <div className=" mt-16">
      <div className="flex flex-col w-full  px-5 md:px-3.5  md:container mx-auto gap-10 pt-3">
        <div className="flex items-center justify-between w-full ">
          <h2 className={`text-black text-4xl  sm:text-[46px] lg:text-[55px]   ${bison.className}`}>
            FEATURED STORY
          </h2>

             <div className="flex items-center gap-3.5">


            <div className="design-prev w-[40px]  h-[40px]  md:w-[50px] md:h-[50px] rounded-full flex items-center justify-center bg-black cursor-pointer">
              <LeftArrowSvg className=" w-[12px]  h-[12px] sm:w-[15px] sm:h-[15px]  md:w-auto md:h-auto" />
            </div>
            <div className="design-next w-[40px]  h-[40px]  md:w-[50px] md:h-[50px] rounded-full flex items-center justify-center bg-black cursor-pointer">
              <RightArrowSvg  className=" w-[12px]  h-[12px] sm:w-[15px] sm:h-[15px]  md:w-auto md:h-auto"/>
            </div>

     
          </div>
        </div>
  <div className=' mx-auto w-full flex justify-center  '>
        <Swiper
          spaceBetween={20}
          loop={false}
          modules={[FreeMode, Navigation]}
          navigation={{
            prevEl: '.design-prev',
            nextEl: '.design-next',
          }}

          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {featuredData.map((item, index) => (
         <SwiperSlide key={index}>
  <div
    className="
      group
      border border-black/20 rounded-[20px] p-3
      flex flex-col gap-3 w-full
      transition-all duration-700 ease-out
       hover:shadow-2xl
       h-full
    "
  >
    {/* Image wrapper */}
    <p className=' text-sm md:text-base font-medium'>
      {item.date}
    </p>
 
  <h1 className="font-semibold text-lg md:text-[22px] line-clamp-2">
  {item.title}
</h1>
       <div className="w-full   h-[200px] sm:h-[236px] overflow-hidden rounded-[20px] ">
      <Image
        src={item.img}
        width={370}
        height={236}
        alt={item.title}
        className="
          w-full object-cover rounded-[20px]
          transition-transform duration-700 ease-out
          group-hover:scale-110 h-full
          
        "
      />
    </div>


    <p className="text-sm md:text-[15px] text-black/70">
      {item.paragraph}
    </p>

    {/* Progress Bar */}
 


    {/* Donors + Button */}
    <div className="flex justify-end items-center   sm:mt-auto">


             <Link href="/donate">
  <button className="btn-animated bg-mint-cyan border border-transparent group cursor-pointer w-[146px] relative overflow-hidden hover:border-[#8bc9c8]">
    <span className="btn-animated-hover bg-[#9dd6d5] group-hover:w-44 group-hover:h-44"></span>
    <span className="btn-animated-text text-black font-semibold group-hover:text-gray-900 ">
     Read more
    </span>
  </button>
</Link>
    </div>
  </div>
</SwiperSlide>

          ))}
        </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Fundrasing;
