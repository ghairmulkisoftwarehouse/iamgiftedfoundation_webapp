'use client'

import LogoSvg from '@/assets/svg/LogoSvg'
import Link from 'next/link'
import { navLinks } from "@/constants/menuItem";
import BarsSvg from '@/assets/svg/barsSvg';
import { usePannelContext } from '@/context/PannelContext';
import { usePathname } from 'next/navigation';


const Navbar = () => {
         const {  setShowPannel } = usePannelContext();
         const pathname=usePathname();

  return (
    <div className="flex items-center justify-center bg-[#D6EEF080] py-3  px-3 sm:px-6 w-full ">
      <div className="w-full mx-auto flex items-center justify-between relative  bg-white h-[60px] sm:h-[80px] rounded-full border border-grayblue-alt px-5 xl:px-12">

        {/* Logo */}
        <Link href="/">
          <LogoSvg className="w-[100px] h-[42px] xl:w-auto xl:h-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:block">   
          <ul className="flex space-x-2 lg:space-x-3 xl:space-x-5 font-medium text-sm lg:text-[15px] xl:text-[17px]">
            {navLinks.map((link) => {
                        const isActive = pathname === link.path;

return(
   <li key={link.name}>
                {link.path ? (
                  <Link href={link.path}>
                    <span   className={`cursor-pointer py-3 px-2 rounded-md   text-black/80 hover:bg-black/15 transition-all duration-200
                      ${isActive
                        ? 'font-semibold'
                        : 'font-normal'}
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
        <div className="hidden md:block">
          <div className="flex gap-2.5">
            <button className="btn-primary">Account</button>
            <button className="btn-secondary">Donate Now</button>
          </div>
        </div>

       
        <button className="md:hidden  cursor-pointer">
        <div onClick={() => setShowPannel(true)}>
               <BarsSvg  className="w-10 h-10 " />
        </div>
          
        </button>

      </div>
    </div>
  )
}

export default Navbar
