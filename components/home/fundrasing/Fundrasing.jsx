'use client'

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
  return (
    <div className="px-5 xl:px-12 mt-16">
      <div className="flex flex-col w-full gap-10">
        <div className="flex justify-between w-full">
          <h2 className={`title-heading md:leading-tight lg:px-10 ${bison.className}`}>
            Peer-to-Peer Fundraising
          </h2>

          <div className="flex items-center gap-3.5">
            <div className="design-prev w-[50px] h-[50px] rounded-full flex items-center justify-center bg-black/30 cursor-pointer">
              <LeftArrowSvg />
            </div>
            <div className="design-next w-[50px] h-[50px] rounded-full flex items-center justify-center bg-black cursor-pointer">
              <RightArrowSvg />
            </div>
          </div>
        </div>
  <div className=' mx-auto w-full flex justify-center  lg:px-10'>
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
          {teamFundrasing.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="border border-black/20 rounded-[20px] p-3 flex flex-col gap-3 w-full">
                <Image
                  src={item.image}
                  width={370}
                  height={236}
                  className="w-full rounded-[20px]"
                  alt={item.title}
                />
                <h1 className="font-semibold text-[24px]">{item.title}</h1>
                <p className="text-base text-black/70">{item.paragraph}</p>

                {/* Progress Bar */}
                <div className="flex flex-col">
                  <div className="w-full bg-[#B2BCC599] rounded-full h-2">
                    <div className="bg-light-cyan h-2 rounded-full" style={{ width: `60%` }} />
                  </div>
                  <div className="flex justify-between w-full">
                    <p className="text-[10px] xs:text-xs md:text-sm text-black font-medium">
                      Raised: $8,000
                    </p>
                    <p className="text-[10px] xs:text-xs md:text-sm text-black/70 font-normal">
                      Goal: $18,000
                    </p>
                  </div>
                </div>

                <div className="border-b border-black/10 w-full"></div>

                {/* Donors and Donate Button */}
                <div className="flex justify-between w-full items-center">
                  <div className="flex flex-row items-center">
                    <div className="w-[30px] h-[30px] rounded-full">
                      <Image
                        src={img1}
                        width={200}
                        height={300}
                        className="w-full h-full rounded-full object-cover"
                        alt="donor"
                      />
                    </div>
                    <div className="w-[30px] h-[30px] rounded-full ml-[-5px]">
                      <Image
                        src={img2}
                        width={200}
                        height={300}
                        className="w-full h-full rounded-full object-cover"
                        alt="donor"
                      />
                    </div>
                    <div className="w-[30px] h-[30px] rounded-full ml-[-5px]">
                      <Image
                        src={img3}
                        width={200}
                        height={300}
                        className="w-full h-full rounded-full object-cover"
                        alt="donor"
                      />
                    </div>
                    <div className="w-[30px] h-[30px] rounded-full ml-[-5px] bg-black text-white text-[10px] flex justify-center font-semibold items-center">
                      +124
                    </div>
                  </div>

                  <button className="btn-secondary-donate">
                    <Link href={'/donate'}>Donate Now</Link>
                  </button>
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
