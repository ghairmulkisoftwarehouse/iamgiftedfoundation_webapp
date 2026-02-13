'use client'
import { usePannelContext } from '@/context/PannelContext';
import { RxCross1 } from 'react-icons/rx';
import Link from 'next/link';
import LogoSvg from '@/assets/svg/LogoSvg';
import { AccountLinks } from "@/constants/AccountConstants";
import { usePathname } from 'next/navigation';
import LogOutSvg from '@/assets/svg/LogOutSvg';
import "./AccountSiderbar.css";
import {setShowLogoutPopup} from '@/redux/reducers/appSlice';
import { useDispatch } from 'react-redux';
import Profileimg from '@/assets/images/kevintaran.png';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import fallbackImg from "@/assets/images/img2.jpg";
import { baseURL } from "@/config/api";
import SidebarProfileShimmer  from '@/components/global/effect/SiderbarProfileShimmer';



export default function Sidebar() {
  const { accountPannel, setAccountPannel } = usePannelContext();
 const { user,loading } = useSelector((state) => state.auth);

//  console.log(' thisi  is a user',user)


  const dispatch=useDispatch();

     const pathname=usePathname();

  const handleCloseSidebar = () => {
    setAccountPannel(false);
  };
    const fullname = user?.profile?.fullName||user?.doc?.username ;
         const firstLetter = fullname?.split(" ")[0]?.[0]?.toUpperCase() || "";

  const email = user?.doc?.email;
  const myrole = user?.doc?.roles?.[0];
const profileImage = user?.doc?.image?.relativeAddress 
  ? `${baseURL}/${user?.doc?.image.relativeAddress}` 
  : fallbackImg;


  return (
    <>
      {accountPannel && (
        <div
          className="fixed top-0 left-0 bg-gray-900/30 w-full h-screen bg-opacity-30 z-50"
          onClick={handleCloseSidebar}
        ></div>
      )}

      <div
        className={`sidebar ${
          accountPannel ? 'left-0' : 'left-[-200%]'
        } fixed top-0 w-[300px] lg:w-0 bg-white overflow-y-auto h-screen pt-4 z-[60] shadow-lg   sidebar-scroll  transition-all duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center w-full px-4">
          {/* <Link href="/">
            <LogoSvg className="w-[100px] h-[42px] xl:w-auto xl:h-auto" />
          </Link> */}

          <div
            className="text-xl cursor-pointer text-primary flex justify-end w-full"
            onClick={handleCloseSidebar}
          >
            <RxCross1 />
          </div>
        </div>



   {
    loading  ? (
    <SidebarProfileShimmer/>
    ) :(
   <div className="flex items-center gap-2 px-3 pt-2">
            {
               user?.doc?.image.relativeAddress  ?(
               <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                <Image
                  src={`${baseURL}/${user?.doc?.image.relativeAddress}`}
                  alt="img"
                  width={78}
                  height={78}
                  className="w-full h-full rounded-full object-cover"
                     
                />
              </div>
               )
             
              :(

                   <div className="w-[70px] h-[70px]   text-xl xl:text-2xl rounded-full overflow-hidden  flex justify-center items-center  capitalize   bg-[#DFE5EF]">
                  
                    {firstLetter}
              </div> 
              )
            }
              

              <div className="flex flex-col gap-0.5">
                <h2 className="text-sm lg:text-base font-semibold capitalize">
                  {fullname}
                </h2>
                <p className="text-xs lg:text-sm text-[#A9ABB0]">
                   {email}
                </p>
              </div>
            </div>
    )
   }

      

            <div className="px-3 w-full pt-4 pb-10">
           <div className="flex flex-col space-y-1.5  ">
              {AccountLinks.map((link, index) => {
                const isActive =
                  link.path !== '/' &&
                  (pathname === link.path ||
                    pathname.startsWith(link.path + '/'));

                return (
                  <Link href={link.path} key={index}>
                    <div
                    onClick={handleCloseSidebar}
                      className={`flex items-center justify-between 


                      cursor-pointer  py-2 px-3 lg:px-2.5 rounded-full transition-all duration-200
                text-sm  xl:text-[15px]
                        ${
                          isActive
                            ? 'bg-mint-cyan'
                            : 'hover:bg-mint-cyan/60'
                        }`}
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-[25px] h-[25px] rounded-full bg-[#F4F6F6] flex items-center justify-center">
                          {link.icon}
                        </div>
                        {link.name}
                      </div>
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


       
      </div>
    </>
  );
}
