'use client'
import { useState, useEffect, useRef } from "react";
import { bison } from '@/components/fonts/fonts';
import Image from "next/image";
import img1 from '@/assets/images/bannerimage.png';
import PlayVideoSvg from '@/assets/svg/PlayVideoSvg';

const BOX_HEIGHT = 85;

const MissionHero = () => {
  const containerRef = useRef(null);
  const [numBoxes, setNumBoxes] = useState(0);
  const [cols, setCols] = useState(12);

  useEffect(() => {
    const calculateBoxes = () => {
      if (!containerRef.current) return;

      const height = containerRef.current.offsetHeight;

      // columns based on screen width
      let columns = 12;
      if (window.innerWidth < 640) columns = 4;
      else if (window.innerWidth < 1024) columns = 6;

      const rows = Math.ceil(height / BOX_HEIGHT);
      setCols(columns);
      setNumBoxes(rows * columns);
    };

    calculateBoxes();
    window.addEventListener("resize", calculateBoxes);
    return () => window.removeEventListener("resize", calculateBoxes);
  }, []);

  return (

    <div
      ref={containerRef}
      className="relative flex flex-col gap-2 w-full    bg-gradient-to-b from-light-cyan  to-[#F4F6F6]  overflow-hidden"
    >
      {/* Grid Background */}
      <div
        className={`grid absolute left-0 top-[-90px] z-0 w-full mt-16`}
        style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
      >
        {Array.from({ length: numBoxes }).map((_, index) => (
          <div
            key={index}
            className="h-[85px] border-r border-b border-black/7"
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center  gap-8    container mx-auto  px-3.5  ">
        <h2 className={`text-black text-4xl  sm:text-[46px] lg:text-[55px] text-center pt-12 md:pt-16 ${bison.className}`}>
          Our mission is to aid those in need
        </h2>

        <div className="w-full relative  h-auto lg:h-[600px]">
            <div className="absolute inset-0 flex items-center justify-center z-20">
      <PlayVideoSvg   className={' w-[63px] h-[63px] md:w-[110px] md:h-[110px]'}/>
    </div>
          <Image
            className="w-full rounded-[25px] h-auto lg:h-[600px]  object-cover"
            src={img1}
            alt="Mission image"
            width={1296}
            height={604}
        
          />
        </div>
      </div>
    </div>
  );
};

export default MissionHero;
