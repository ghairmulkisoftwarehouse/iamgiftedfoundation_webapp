'use client'

import { useState,useEffect } from 'react'
import foundation1img from '@/assets/images/foundation1.png'
import foundation2img from '@/assets/images/foundation2.png'
import foundation3img from '@/assets/images/foundation3.png'
import foundation4img from '@/assets/images/foundation4.png'
import foundation5img from '@/assets/images/foundation5.png'

import { bison } from '@/components/fonts/fonts'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'

import Image from 'next/image'

const Foundation = () => {
   const [spaceBetween, setSpaceBetween] = useState(70);
  const foundationImages = [
    foundation1img,
    foundation2img,
    foundation3img,
    foundation4img,
    foundation5img,
  ]

const sizes = [
  { base: 'w-[150px] h-auto',    md: 'md:w-auto' },
  { base: 'w-[100px] h-auto', md: 'md:w-auto' },
  { base: 'w-[50px] h-[50px]', md: 'md:w-[75px] md:h-auto' },
  { base: 'w-[50px] h-[50px]', md: 'md:w-[70px] md:h-auto' },
  { base: 'w-[50px] h-[50px]', md: 'md:w-[75px] md:h-auto' },



  
]


 

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setSpaceBetween(20); // small screens
      else if (width >= 640 && width < 768) setSpaceBetween(30); // sm
      else setSpaceBetween(70); // md+
    };

    handleResize(); // set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);



  return (
    <div className="px-5 xl:px-12  swiper-customNav  mt-16 pb-12 ">
      <div className="flex flex-col gap-7 pt-5">
        <h2
          className={`text-black text-4xl  sm:text-[46px] lg:text-[55px]  text-center ${bison.className}`}
        >
          Foundation Partners
        </h2>

        <div className=' mx-auto w-full flex justify-center '>
<Swiper
  slidesPerView="auto"
         spaceBetween={spaceBetween}

  freeMode={{
    enabled: true,
    momentum: false,
  }}  
  navigation={false}
  loop={false}
  modules={[FreeMode]}
  className="  mx-auto"
>
        {foundationImages.map((img, index) => (
          <SwiperSlide
            key={index}
            className=" flex justify-center items-center cursor-pointer   w-full"
          >
           <Image
        src={img}
        alt={`foundation-${index}`}
        width={200}             
        height={99}
        className={`object-contain ${sizes[index].base} ${sizes[index].md}`}
      />
          </SwiperSlide>
        ))}
      </Swiper>

</div>
      </div>


     
    </div>
  )
}

export default Foundation