'use client'
import { useEffect, useState } from 'react'

import LogoSvg from '@/assets/svg/LogoSvg'
import Link from 'next/link'
import { navLinks } from "@/constants/menuItem";
import BarsSvg from '@/assets/svg/barsSvg';
import { usePannelContext } from '@/context/PannelContext';
import { usePathname } from 'next/navigation';


const Navbar = () => {
         const {  setShowPannel } = usePannelContext();
           const [scrolled, setScrolled] = useState(false);

         const pathname=usePathname();

          const isAuthPage =    pathname?.startsWith('/auth/login') || pathname?.startsWith('/auth/register') || pathname?.startsWith('/auth/reset-password') || pathname?.startsWith('/auth/verify-otp')  || pathname?.startsWith('/auth/forgotpassword')         ;
           useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
<>

    {!isAuthPage && (
    <div 
     className={`
        flex items-center justify-center py-3       w-full
        transition-all duration-500 ease-out
        ${scrolled ? '' : 'bg-[#D6EEF080]'}
      `}
    >
    <div className='  container  mx-auto  px-3.5'>
    <div className=" w-full    flex items-center justify-between relative  bg-white  rounded-full h-[55px]  md:h-[70px]  rounded border border-grayblue-alt  px-8 xl:px-12">

        {/* Logo */}
        <Link href="/">
          <LogoSvg className="w-[100px] h-[42px] xl:w-auto xl:h-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:block">   
          <ul className="flex space-x-1.5 font-medium text-sm lg:text-[15px] ">
            {navLinks.map((link) => {
                              const isActive =
    pathname === link.path ||
    (link.path !== '/' && pathname.startsWith(link.path + '/'));

return(
   <li key={link.name}>
                {link.path ? (
                  <Link href={link.path}>
                    <span   className={`cursor-pointer  px-4  rounded-full  text-sm    transition-all duration-200   py-2.5
                      ${isActive
                        ? 'font-semibold text-black bg-mint-cyan'
                        : 'font-normal text-black/80   hover:bg-mint-cyan/60'}
                    `}>
                      {link.name}
                    </span>
                  </Link>
                ) : (
                  <span className="cursor-pointer hover:bg-black/15 py-3 px-2 text-black/80 rounded-md transition-all duration-200">
                    {link.name}
                  </span>
                )}
              </li>
)
           
            })}
          </ul>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:block">
          <div className="flex gap-2.5">


           <Link href="/auth/login">

               <button className="btn-animated bg-polar-mist group cursor-pointer relative overflow-hidden">
    {/* Expanding circle */}
    <span className="btn-animated-hover bg-gray-200 group-hover:w-40 group-hover:h-40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></span>

    {/* Button text */}
    <span className="btn-animated-text text-black group-hover:text-gray-900 relative z-10">
      Account
    </span>
  </button>
           </Link>  
     



         <Link href="/donate">
  <button className="btn-animated bg-mint-cyan border border-transparent group cursor-pointer relative overflow-hidden hover:border-[#8bc9c8]">
    <span className="btn-animated-hover bg-[#9dd6d5] group-hover:w-44 group-hover:h-44"></span>
    <span className="btn-animated-text text-gray-800 group-hover:text-gray-900 ">
      Donate Now
    </span>
  </button>
</Link>

          </div>
        </div>

       
        <button className="lg:hidden  cursor-pointer">
        <div onClick={() => setShowPannel(true)}>
               <BarsSvg  className="w-10 h-10 " />
        </div>
          
        </button>

      </div>

    </div>
      
    </div>
    )}

</>

  )
}

export default Navbar
