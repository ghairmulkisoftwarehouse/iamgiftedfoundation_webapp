'use client';


import { useDispatch, useSelector } from 'react-redux';
import { AccountLinks } from '@/constants/AccountConstants';
import AccountArrowSvg from '@/assets/svg/AccountArrowSvg';
import LogOutSvg from '@/assets/svg/LogOutSvg';
import Profileimg from '@/assets/images/kevintaran.png';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import AccountLogout  from '@/components/account/accountlogout/AccountLogout'
import {setShowLogoutPopup} from '@/redux/reducers/appSlice';




export default function Layout({ children }) {
  const pathname = usePathname();
   const dispatch=useDispatch();
    const {showLogoutPopup} = useSelector(state => state.app);



  return (
        <>
          {showLogoutPopup &&   <AccountLogout/> }  

    <div className="w-full">
      <div className="w-full    px-5 md:px-3.5  md:container mx-auto mt-16 ">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className="hidden lg:block w-full lg:w-[30%] xl:w-1/4 h-fit bg-white rounded-[16px] border border-black/5 shadow-[0px_0px_5.6px_0px_#0000001F]">
            {/* Profile */}
            <div className="flex items-center gap-2 px-3 pt-6">
              <div className="w-[70px] h-[70px] rounded-full overflow-hidden">
                <Image
                  src={Profileimg}
                  alt="img"
                  width={78}
                  height={78}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>

              <div className="flex flex-col gap-0.5">
                <h2 className="text-sm lg:text-base font-semibold">
                  Kevin Tran
                </h2>
                <p className="text-xs lg:text-sm text-[#A9ABB0]">
                  user@gmail.com
                </p>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-2 px-3 py-6">
              {AccountLinks.map((link, index) => {
                const isActive =
                  link.path !== '/' &&
                  (pathname === link.path ||
                    pathname.startsWith(link.path + '/'));

                return (
                  <Link href={link.path} key={index}>
                    <div
                      className={`flex items-center justify-between px-2 py-2 rounded-md cursor-pointer text-sm  xl:text-[15px] font-medium text-[#030F0CCC] transition
                        ${
                          isActive
                            ? 'bg-mint-cyan'
                            : 'hover:bg-mint-cyan/60'
                        }`}
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

              {/* Logout */}
              <div
                 onClick={() => dispatch(setShowLogoutPopup(true))}
               className="flex items-center justify-between px-2 py-2 rounded-md cursor-pointer text-sm  xl:text-[15px]  font-semibold text-[#FD5D69] hover:bg-mint-cyan/60 transition">
                <div className="flex items-center gap-2">
                  <div className="w-[35px] h-[35px] rounded-full bg-[#E8414114] flex items-center justify-center">
                    <LogOutSvg />
                  </div>
                  Logout
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-[70%] xl:w-3/4 mt-1.5">
            {children}
          </div>
        </div>
      </div>
    </div>


        </>
      
  );
}
