'use client'

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
  const foundationImages = [
    foundation1img,
    foundation2img,
    foundation3img,
    foundation4img,
    foundation5img,
  ]

const sizes = [
  { base: 'w-[150px] h-auto',    md: 'md:w-[200px]' },
  { base: 'w-[100px] h-auto', md: 'md:w-[150px]' },
  { base: 'w-[50px] h-[50px]', md: 'md:w-[75px] md:h-auto' },
  { base: 'w-[50px] h-[50px]', md: 'md:w-[70px] md:h-auto' },
  { base: 'w-[50px] h-[50px]', md: 'md:w-[75px] md:h-auto' },
]

  return (
    <div className="px-5 xl:px-12  swiper-customNav  mt-16 ">
      <div className="flex flex-col gap-6">
        <h2
          className={`title-heading md:leading-tight text-center ${bison.className}`}
        >
          Foundation Partners
        </h2>

        <div className=' mx-auto w-full flex justify-center '>
<Swiper
  slidesPerView="auto"
  spaceBetween={30}
  freeMode={true}
  freeModeMomentum={false}   
  navigation={false}
  loop={false}
  modules={[FreeMode]}
  className="  mx-auto"
>
        {foundationImages.map((img, index) => (
          <SwiperSlide
            key={index}
            className=" flex justify-center items-center cursor-pointer w-full"
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
