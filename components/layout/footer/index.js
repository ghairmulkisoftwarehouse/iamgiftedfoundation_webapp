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
import GoogleplaySvg  from '@/assets/svg/GoogleplaySvg';
import AppleStoreSvg  from '@/assets/svg/AppleStoreSvg';




const socialIcons = [
  TwitterSvg,
  LinkedInSvg,
  FacebookSvg,
  InstagramSvg,
];



const Footer = () => {
  const [numBoxes, setNumBoxes] = useState(60);
 const pathname = usePathname();


          const isAuthPage =    pathname?.startsWith('/auth/login') || pathname?.startsWith('/auth/register') ||  pathname?.startsWith('/auth/verify-otp')  || pathname?.startsWith('/auth/forgotpassword') 
          || pathname?.startsWith('/auth/reset-password')
          ;





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

    <>

     {!isAuthPage && (
      <div className='flex flex-col gap-0 w-full bg-black mt-4'>

    
  
      <div className="w-full relative   h-auto  lg:h-[400px]  overflow-hidden   ">


        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12  absolute  w-full  left-0  z-0  ">
          {boxes.map((_, index) => {
            const isSpecialBg = specialBgIndexes.includes(index);
            const isSpecialCircle = specialCircleIndexes.includes(index);

            return (
              <div
                key={index}
                className={`h-[85px] flex items-center justify-center border-r border-b border-white/10
                  ${isSpecialBg ? " bg-transparent lg:bg-[#0A0A0A]" : ""} relative`}
              >
                {isSpecialCircle && (
                  <div className="absolute inset-0 w-full h-full bg-[#0A0A0A] rounded-full hidden lg:block -z-10"></div>
                )}
              </div>
            );
          })}
        </div>
       <div className=" relative  w-full h-full  z-20 left-0  pb-4  lg:pb-0 container mx-auto px-3.5 ">
      
       <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-7 lg:gap-2.5 sm:justify-between pt-14">
         <div className="  w-full sm:w-[50%] lg:w-[30%]    h-full flex flex-col  gap-2.5">
          <div className="flex  flex-col gap-2    ">
<h2 className={`text-white text-4xl md:text-5xl  leading-snug md:leading-tight ${bison.className}`}>
  Ready to get <br className=" hidden md:block"/> started ?
</h2>
            <p className=" text-white/85  text-sm md:text-base font-normal">If there are questions you want to ask, we will answer all your question</p>
          </div>

        <div className="w-full border-b relative h-[40px] border-white  mt-3.5 ">
        <input
          type="text"
          placeholder="Enter your email"
          className="w-full outline-none text-white h-full placeholder-white bg-transparent pr-10"
        />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 pr-2 cursor-pointer transition-transform duration-300 hover:translate-x-1 hover:scale-110">
          <FaArrowRightLong className="text-white" />
        </div>
            </div>
        <div className="flex flex-row gap-2 w-full mt-6">
 <div className="transition-transform transition-opacity duration-300 ease-out
                hover:opacity-80 hover:scale-105 active:scale-95 cursor-pointer">
  <GoogleplaySvg />
</div>

<div className="transition-transform transition-opacity duration-300 ease-out
                hover:opacity-80 hover:scale-105 active:scale-95 cursor-pointer">
  <AppleStoreSvg />
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
           <ul className="text-white flex flex-col items-start gap-4  text-sm lg:text-[15px]     ">
  {firstColumnLinks.map((link) => {
    const isActive =
      pathname === link.path ||
      (link.path !== "/" && pathname.startsWith(link.path + "/"));

    return (
      <li key={link.name}>
        {link.path ? (
          <Link
            href={link.path}
            className={`transition-colors hover:text-aqua ${
              isActive ? "underline text-aqua" : ""
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
    );
  })}
</ul>
      </div>


            <div>
        <ul className="text-white flex flex-col gap-4 items-start  text-sm lg:text-[15px]">
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

      
      </div>
 
<div className="w-full h-auto md:h-[140px] xl:h-[150px] relative  flex items-center justify-center  pt-3.5 pb-3.5 sm:pt-2.5  sm:pb-2.5 md:pb-0   md:overflow-hidden    border-t border-white/10    ">
 <div className="relative   w-full z-10 container mx-auto px-3.5 ">
    <div className="flex flex-col md:flex-row justify-between items-center px-3 ">
      
      <div className='   text-[13px] sm:text-[14px] md:text-[16px] text-center md:text-left text-white'>
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
      w-full absolute z-3 hidden md:block left-0   top-[-50px]  xl:top-[-70px] 
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
   

     )}

    </>
 
  );
};

export default Footer;
