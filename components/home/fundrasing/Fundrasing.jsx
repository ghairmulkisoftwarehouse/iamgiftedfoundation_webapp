'use client'
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { bison } from '@/components/fonts/fonts';

import img1 from '@/assets/images/donateperson1.png';
import img2 from '@/assets/images/donateperson2.png';
import img3 from '@/assets/images/donateperson3.png';
import { teamFundrasing } from '@/constants/ProgramConstants';
import Link from 'next/link';
import Image from 'next/image';
import RightArrowSvg from '@/assets/svg/RightArrowSvg';
import LeftArrowSvg from '@/assets/svg/LeftArrowSvg';

const Fundrasing = () => {

    const [isBeginning, setIsBeginning] = useState(true);
const [isEnd, setIsEnd] = useState(false);
  
  return (
    <div className=" mt-16">
      <div className="flex flex-col w-full  container mx-auto  px-3.5 gap-10 pt-3">
        <div className="flex items-center justify-between w-full ">
          <h2 className={`text-black text-4xl  sm:text-[46px] lg:text-[55px]   ${bison.className}`}>
            Peer-to-Peer Fundraising
          </h2>

             <div className="flex items-center gap-3.5">

            {isBeginning && (
    <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full flex items-center justify-center bg-black/30 ">
      <LeftArrowSvg className=" w-[12px]  h-[12px] sm:w-[15px] sm:h-[15px]  md:w-auto md:h-auto" />
    </div>
  )}


            <div className="design-prev w-[40px]  h-[40px]  md:w-[50px] md:h-[50px] rounded-full flex items-center justify-center bg-black cursor-pointer">
              <LeftArrowSvg className=" w-[12px]  h-[12px] sm:w-[15px] sm:h-[15px]  md:w-auto md:h-auto" />
            </div>
            <div className="design-next w-[40px]  h-[40px]  md:w-[50px] md:h-[50px] rounded-full flex items-center justify-center bg-black cursor-pointer">
              <RightArrowSvg  className=" w-[12px]  h-[12px] sm:w-[15px] sm:h-[15px]  md:w-auto md:h-auto"/>
            </div>

         {isEnd && (
    <div className="design-next w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full flex items-center justify-center  bg-black/30 ">
      <RightArrowSvg className=" w-[12px]  h-[12px] sm:w-[15px] sm:h-[15px]  md:w-auto md:h-auto" />
    </div>
  )}

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

     onSwiper={(swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  }}
  onSlideChange={(swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {teamFundrasing.map((item, index) => (
         <SwiperSlide key={index}>
  <div
    className="
      group
      border border-black/20 rounded-[20px] p-3
      flex flex-col gap-3 w-full
      transition-all duration-700 ease-out
       hover:shadow-2xl
       h-auto
    "
  >
    {/* Image wrapper */}
    <div className="w-full h-[236px] overflow-hidden rounded-[20px]">
      <Image
        src={item.image}
        width={370}
        height={236}
        alt={item.title}
        className="
          w-full object-cover rounded-[20px]
          transition-transform duration-700 ease-out
          group-hover:scale-110
          
        "
      />
    </div>

    <h1 className="font-semibold text-lg md:text-[22px] ">
      {item.title}
    </h1>

    <p className="text-sm md:text-[15px] text-black/70">
      {item.paragraph}
    </p>

    {/* Progress Bar */}
    <div className="flex flex-col">
      <div className="w-full bg-[#B2BCC599] rounded-full h-2 overflow-hidden">
        <div
          className="bg-light-cyan h-2 rounded-full transition-all duration-700 ease-out"
          style={{ width: `60%` }}
        />
      </div>

      <div className="flex justify-between w-full">
        <p className="text-[10px] xs:text-xs md:text-sm text-black font-medium">
          Raised: $8,000
        </p>
        <p className="text-[10px] xs:text-xs md:text-sm text-black/70">
          Goal: $18,000
        </p>
      </div>
    </div>

    <div className="border-b border-black/10 w-full"></div>

    {/* Donors + Button */}
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        {[img1, img2, img3].map((img, i) => (
          <div
            key={i}
            className="w-[30px] h-[30px] rounded-full ml-[-5px]"
          >
            <Image
              src={img}
              width={200}
              height={300}
              className="w-full h-full rounded-full object-cover"
              alt="donor"
            />
          </div>
        ))}

        <div className="w-[30px] h-[30px] rounded-full ml-[-5px] bg-black text-white text-[10px] flex items-center justify-center font-semibold">
          +124
        </div>
      </div>

             <Link href="/donate">
  <button className="btn-animated bg-mint-cyan border border-transparent group cursor-pointer w-[146px] relative overflow-hidden hover:border-[#8bc9c8]">
    <span className="btn-animated-hover bg-[#9dd6d5] group-hover:w-44 group-hover:h-44"></span>
    <span className="btn-animated-text text-black font-semibold group-hover:text-gray-900 ">
      Donate Now
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
