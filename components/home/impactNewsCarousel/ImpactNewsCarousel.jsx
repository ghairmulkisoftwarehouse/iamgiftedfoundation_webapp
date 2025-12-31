'use client'


import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { bison } from '@/components/fonts/fonts';

import img1 from '@/assets/images/Awarness.png';
import img2 from '@/assets/images/donateperson2.png';
import img3 from '@/assets/images/donateperson3.png';
import { HonorsData } from '@/constants/homeConstants';
import Link from 'next/link';
import Image from 'next/image';
import RightArrowSvg from '@/assets/svg/RightArrowSvg';
import LeftArrowSvg from '@/assets/svg/LeftArrowSvg';




import PlayVideoSvg from '@/assets/svg/PlayVideoSvg';
// import PauseIconSvg from "@/assets/svg/PauseIconSvg";

const ImpactNewsCarousel = () => {
  const [isBeginning, setIsBeginning] = useState(true);
const [isEnd, setIsEnd] = useState(false);


  return (
     <div className=" mt-16">
      <div className="flex flex-col w-full gap-10    container mx-auto  px-3.5">
        <div className="flex items-center justify-between w-full ">
          <h2 className={`text-black text-3xl sm:text-4xl  md:text-[46px] lg:text-[55px]   ${bison.className}`}>
           IAMGifted foundation Making <br className=' hidden  sm:block'/> Headlines with impact
          </h2>

          <div className="flex items-center gap-3.5">

            {isBeginning && (
    <div className=" design-prev  w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full flex items-center justify-center bg-black/30 ">
      <LeftArrowSvg className="'    w-[12px]  h-[12px] sm:w-[15px] sm:h-[15px]  md:w-auto md:h-auto" />
    </div>
  )}


            <div className="design-prev w-[40px]  h-[40px]  md:w-[50px] md:h-[50px] rounded-full flex items-center justify-center bg-black cursor-pointer">
              <LeftArrowSvg className={' w-[12px]  h-[12px] sm:w-[15px] sm:h-[15px]  md:w-auto md:h-auto'} />
            </div>
            <div className="design-next w-[40px]  h-[40px]  md:w-[50px] md:h-[50px] rounded-full flex items-center justify-center bg-black cursor-pointer">
              <RightArrowSvg   className={'  w-[12px]  h-[12px] sm:w-[15px] sm:h-[15px]  md:w-auto md:h-auto'}/>
            </div>

         {isEnd && (
    <div className="design-next w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full flex items-center justify-center  bg-black/30 ">
      <RightArrowSvg className="  w-[12px]  h-[12px] sm:w-[15px] sm:h-[15px]  md:w-auto md:h-auto" />
    </div>
  )}

          </div>
        </div>
  <div className=' mx-auto w-full flex justify-center items-center  '>
    <Swiper
  spaceBetween={15}
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
  autoHeight
>

  {HonorsData.map((item, index) => (
    [
      <SwiperSlide key={`card-${index}`}>
        <div 
        
          className={`rounded-[25px] p-3 flex flex-col gap-3 w-full h-[300px] sm:h-[350px] cursor-pointer
      ${item.background}
      transition-transform transition-shadow duration-300 ease-in-out
      transform  hover:shadow-xl
    `}>
          <div className="bg-black text-white text-base sm:text-[17px] rounded-full w-fit px-5  py-2 lg:py-0  h-auto lg:h-[42px] flex items-center transition-all duration-300 ease-in-out hover:bg-gray-800">
            {item.title}
          </div>
          <div className="pr-3.5 lg:pr-9 pt-10">
            <p className="font-semibold text-sm md:text-lg  leading-[40px]">
              {item.paragraph}
            </p>
          </div>
        </div>
      </SwiperSlide>,

   
      index === 0 && (
        <SwiperSlide >
          <div
            className=" rounded-[25px] 
              transition-transform transition-shadow duration-300 ease-in-out
      transform  hover:shadow-xl
             flex flex-col gap-3 w-full relative  overflow-hidden  h-[300px] sm:h-[350px]  "
          >
                <div className="absolute inset-0 flex items-center justify-center z-20">
      <PlayVideoSvg   className={' w-[63px] h-[63px] md:w-[110px] md:h-[110px]'}/>
    </div>
          <Image
            className="w-full  rounded-[25px] h-[300px] sm:h-[405px]   object-cover"
            src={img1}
            alt="Mission image"
            width={1296}
            height={604}
        
          />
          </div>
        </SwiperSlide>
      )
    ]
  ))}
</Swiper>
        </div>
      </div>
    </div>
  )
}

export default ImpactNewsCarousel











// import Plyr from "plyr";

  // const videoRef = useRef(null);
  // const playerRef = useRef(null);
  //   const [showIcon, setShowIcon] = useState(true); 
  //   const [iconType, setIconType] = useState('play'); 



    //  useEffect(() => {
    //     if (videoRef.current) {
    //       const player = new Plyr(videoRef.current, {
    //         controls: ["progress", "mute", "fullscreen"], 
    //         clickToPlay: false,
    //       });
    
    //       playerRef.current = player;
    
    //       player.on("play", () => {
    //         setShowIcon(false); // hide icon while playing
    //       });
    
    //       player.on("pause", () => {
    //         setIconType('pause');
    //         setShowIcon(true); // show pause icon briefly
    //         setTimeout(() => setShowIcon(false), 1000); // hide after 1 second
    //       });
    
    //       player.on("ended", () => {
    //         setIconType('play');
    //         setShowIcon(true); // show play icon when video ends
    //       });
    
    //       return () => player.destroy();
    //     }
    //   }, []);
    
    //   const handleScreenClick = () => {
    //     if (!playerRef.current) return;
    
    //     if (!playerRef.current.playing) {
    //       playerRef.current.play();
    //       setIconType('play');
    //       setShowIcon(false); // hide play button immediately after click
    //     } else {
    //       playerRef.current.pause();
    //       setIconType('pause');
    //       setShowIcon(true); 
    //       setTimeout(() => setShowIcon(false), 1000);
    //     }
    //   };