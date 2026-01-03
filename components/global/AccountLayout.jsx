'use client'
import {AccountLinks} from '@/constants/AccountConstants';
import AccountArrowSvg from "@/assets/svg/AccountArrowSvg";
import LogOutSvg   from '@/assets/svg/LogOutSvg';
import { usePathname } from 'next/navigation';
import Profileimg  from '@/assets/images/kevintaran.png';
import Image from 'next/image';
import Link from 'next/link';



export default function Layout({ children }) {
   const pathname=usePathname();
  return (
    <div className=" w-full ">
      
      {/* Hero Section */}
    
           <div className="container mx-auto  mt-16 px-3.5">
          <div className="flex flex-col lg:flex-row gap-6">

            {/* Sidebar */}
            <div className="w-full lg:w-1/4 shadow-[0px_0px_5.6px_0px_#0000001F] bg-white border border-black/5 rounded-[16px] h-fit hidden lg:block">

              
                <div className="flex items-center  gap-2 px-3  pt-6">
                <div className=" w-[70px] h-[70px]  rounded-full  overflow-hidden   ">
                   <Image
                   src={Profileimg}
                   alt="img"
                   width={78}
                   height={78}
                    className=" rounded-full w-full h-full object-cover "
                />
             

                </div>
                <div className=" flex flex-col gap-0.5 ">
                  <h2 className="text-sm lg:text-base  font-semibold">
                      Kevin Tran
                 </h2>
                 <p className="text-[#A9ABB0]  text-xs lg:text-sm">user@gmail.com</p>

                </div>
                
                
               
             

                </div>

          
            <div className="flex flex-col gap-2 px-3 py-6">
{AccountLinks.map((link, index) => {
  const isActive =
    link.path !== "/" &&
    (pathname === link.path || pathname.startsWith(link.path + "/"));

  return (
    <Link href={link.path} key={index}>
      <div
        className={`text-sm lg:text-base font-medium px-2 py-2 rounded-md cursor-pointer  text-[#030F0CCC] flex justify-between items-center transition 
          ${isActive ? " bg-mint-cyan" : " hover:bg-mint-cyan/60"}`}
      >
        <div className="flex items-center gap-2">
          <div className="w-[35px] h-[35px] rounded-full bg-[#F4F6F6] flex items-center justify-center">
            {link.icon}
          </div>
          {link.name}
        </div>
        <AccountArrowSvg />
      </div>
    </Link>
  );
})}


  {/* Logout button */}
  <div
    className="text-[#FD5D69] text-sm lg:text-base font-semibold px-2 py-2 rounded-md cursor-pointer flex justify-between items-center hover:bg-mint-cyan/60 transition"
  >
    <div className="flex items-center gap-2">
      <div className="w-[35px] h-[35px] rounded-full bg-[#E8414114] flex items-center justify-center">
        <LogOutSvg />
      </div>
      Logout
    </div>
  </div>
</div>

              </div>
                      <div className="w-full lg:w-3/4 mt-1.5">
              {children}
              </div>
          
            </div>
            </div>
    
        </div>
  

 
  );
}
