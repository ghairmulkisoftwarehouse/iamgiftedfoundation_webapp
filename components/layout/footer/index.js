'use client'
import { useState, useEffect } from "react";
import ButterfullySvg from '@/assets/svg/ButterfullySvg';
import {  bison } from '@/components/fonts/fonts';
import TwitterSvg  from '@/assets/svg/TwitterSvg'
import LinkedInSvg from "@/assets/svg/LinkedInSvg";
import FacebookSvg from "@/assets/svg/FacebookSvg";
import InstagramSvg from "@/assets/svg/InstagramSvg";
import { FaArrowRightLong } from "react-icons/fa6";
import { footerNavLinks } from "@/constants/menuItem";
import { usePathname } from "next/navigation";
import Link from "next/link";



const socialIcons = [
  TwitterSvg,
  LinkedInSvg,
  FacebookSvg,
  InstagramSvg,
];



const Footer = () => {
  const [numBoxes, setNumBoxes] = useState(60);
 const pathname = usePathname();





   const firstColumnLinks = footerNavLinks.slice(0, 4);
  const secondColumnLinks = footerNavLinks.slice(4);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setNumBoxes(28); 
      } else if (window.innerWidth < 1024) {
        setNumBoxes(40); 
      } else {
        setNumBoxes(60); 
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const boxes = Array.from({ length: numBoxes });
  const specialBgIndexes = [15, 18];
  const specialCircleIndexes = [8, 21, 39, 53];

  return (
    <div className='flex flex-col gap-2 w-full bg-black mt-4'>

    
  
      <div className="w-full relative h-auto overflow-hidden ">
       <div className=" absolute  top-[6px]  sm:top-[20px]  w-full h-[400px]  z-20 left-0 ">
      
       <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-7 lg:gap-2.5 sm:justify-between pt-14 px-5 xl:px-12   ">
         <div className="  w-full sm:w-[50%] lg:w-[30%]    h-full flex flex-col  gap-2.5">
          <div className="flex  flex-col gap-2    ">
<h2 className={`text-white text-4xl md:text-5xl  leading-snug md:leading-tight ${bison.className}`}>
  Ready to get <br className=" hidden md:block"/> started ?
</h2>
            <p className=" text-white/85  text-sm md:text-base font-normal">If there are questions you want to ask, we will answer all your question</p>
          </div>
        <div className="w-full border-b relative h-[40px] border-white  mt-3.5 md:mt-[30%]">
        <input
          type="text"
          placeholder="Enter your email"
          className="w-full outline-none text-white h-full placeholder-white bg-transparent pr-10"
        />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 pr-2 cursor-pointer transition-transform duration-300 hover:translate-x-1 hover:scale-110">
          <FaArrowRightLong className="text-white" />
        </div>
            </div>

          
          </div>

            <div className=" w-full sm:w-[50%]  lg:w-[35%]    h-full flex flex-col  gap-2.5">
          <div className="flex  flex-col gap-5    ">
          <div className=" flex justify-start sm:justify-end w-full pt-5 sm:pt-0 ">
              <p className=" text-white/85 font-normal">hello@iamgiftedfoundation.org</p>
          </div>
          <div className=" grid grid-cols-1 sm:grid-cols-2 w-full gap-4  sm:gap-2  ">
           <div>
        <ul className="text-white flex flex-col items-start gap-4 text-sm md:text-base  lg:text-lg">
          {firstColumnLinks.map((link) => (
            <li key={link.name} >
              {link.path ? (
                <Link
                  href={link.path}
                  className={`hover:text-aqua transition-colors ${
                    pathname === link.path ? " underline" : ""
                  }`}
                >
                  {link.name}
                </Link>
              ) : (
                <span className="cursor-pointer hover:text-aqua">
                  {link.name}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>


            <div>
        <ul className="text-white flex flex-col gap-4 items-start text-sm md:text-base  lg:text-lg">
          {secondColumnLinks.map((link) => (
            <li key={link.name}>
              {link.path ? (
                <Link
                  href={link.path}
                  className={`hover:text-blue-300 transition-colors ${
                    pathname === link.path ? "text-aqua underline" : ""
                  }`}
                >
                  {link.name}
                </Link>
              ) : (
                <span className="cursor-pointer hover:text-aqua">
                  {link.name}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>



          </div>
      
          </div>


          
          </div>


       </div>


        
   </div>

        <div className="absolute right-[-70px] bottom-6 md:left-[30%] md:top-[10%] z-10">
          <ButterfullySvg  className=' w-[300px] h-[200px] sm:w-auto sm:h-auto'/>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 relative z-0">
          {boxes.map((_, index) => {
            const isSpecialBg = specialBgIndexes.includes(index);
            const isSpecialCircle = specialCircleIndexes.includes(index);

            return (
              <div
                key={index}
                className={`h-[85px] flex items-center justify-center border-r border-b border-white/10
                  ${isSpecialBg ? " bg-transparent md:bg-[#0A0A0A]" : ""} relative`}
              >
                {isSpecialCircle && (
                  <div className="absolute inset-0 w-full h-full bg-[#0A0A0A] rounded-full hidden md:block -z-10"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>

<div className="w-full h-[150px] relative  flex items-center justify-center overflow-hidden pb-2">
 <div className="absolute top-10  md:top-1/2  w-full z-10 px-5 xl:px-12 ">
    <div className="flex flex-col md:flex-row justify-between items-center px-3 ">
      
      <div className='text-[14px] md:text-[16px] text-center md:text-left text-white'>
        © 2025 Copyright by IAMGIFTEDFOUNDATION | Developed By DevOptix Technologies
      </div>

<div className='flex flex-row gap-3 ml-0 md:ml-6 mt-3 md:mt-0'>
  {socialIcons.map((Icon, index) => (
  <div
  key={index}
  className="border border-white cursor-pointer rounded-full flex justify-center items-center w-[35px] h-[35px]
             transition-all duration-300 hover:scale-110 hover:border-[#00D8FF] hover:shadow-[0_0_10px_#00D8FF]/50"
>
  <Icon className="h-[18px] w-[18px]" />
</div>
  ))}
</div>

    </div>
  </div>
  <h2
    className={`
      w-full relative z-3 hidden md:block 
      text-white/10 text-center whitespace-nowrap font-bold tracking-wide
      ${bison.className}

      text-[50px]   
      sm:text-[90px]
      md:text-[140px]
      lg:text-[180px]
   
    `}
  >
    IAMGIFTEDFOUNDATION
  </h2>
</div>

    </div>
  );
};

export default Footer;
