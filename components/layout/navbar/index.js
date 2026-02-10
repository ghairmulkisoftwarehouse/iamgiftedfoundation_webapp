'use client'
import { useEffect, useState } from 'react'

import LogoSvg from '@/assets/svg/LogoSvg'
import Link from 'next/link'
import { navLinks } from "@/constants/menuItem";
import BarsSvg from '@/assets/svg/barsSvg';
import { usePannelContext } from '@/context/PannelContext';
import { usePathname } from 'next/navigation';
import NewGiftedFoundationlogoSvg  from  '@/assets/svg/NewGiftedFoundationlogoSvg';
import Usermenu   from './Usermenu';
import { useSelector,useDispatch } from 'react-redux';
import  {setUser}  from '@/redux/reducers/authSlice'
import devLog from '@/utils/logsHelper';
import fetcher from '@/utils/fetcher';
import { useQuery } from 'react-query';
import { useRouter } from 'next/navigation';
import { getTokenCookie } from "@/utils/authCookies";
import { ClipLoader } from 'react-spinners';
import { baseURL } from '@/config/api';
import img from "@/assets/images/img2.jpg";

const Navbar = () => {
     const dispatch=useDispatch();
     const router=useRouter();
        const { user } = useSelector((state) => state.auth);
        const token = getTokenCookie();
            // devLog(' this is  a  user',user); 
  

   
  

   const { isLoading, isError, data, error } = useQuery({
  queryKey: ["my-user-profile"],
  queryFn: () => fetcher("/user/my-profile"),
  enabled: !!token, 
  onSuccess: (res) => {
    if (res?.status === "success" && res?.data?.doc) {
      dispatch(setUser(res.data));
    }
  },
  onError: (err) => {
    console.error("Profile API failed:", err);
  },
});
         const {  setShowPannel,setAccountPannel } = usePannelContext();
           const [scrolled, setScrolled] = useState(false);

         const pathname=usePathname();
         const isHome = pathname === "/";

          const isAuthPage = pathname?.startsWith('/auth/login') || pathname?.startsWith('/auth/register') || pathname?.startsWith('/auth/reset-password') || pathname?.startsWith('/auth/verify-otp')  || pathname?.startsWith('/auth/forgotpassword') || pathname?.startsWith('/success')  ||  pathname?.startsWith('/cancel') ;

                const isAccountPage = pathname?.startsWith('/account');

              

           useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fullname = user?.profile?.fullName || user?.doc?.username;
  // console.log('  this is a fullname',fullname)

  // console.log(' user?.profile?.fullName', user?.profile?.fullName)

  const email = user?.doc?.email;
  const myrole = user?.doc?.roles?.[0];
  
const profileImage = (user?.doc?.image?.relativeAddress) 
  ? `${baseURL}/${user?.doc?.image.relativeAddress}` 
  : img;

  return (
<>

    {!isAuthPage && (
  <div
  className={`
    flex items-center justify-center py-3 w-full
    transition-all duration-500 ease-out
    ${
      scrolled
        ? ''
        : isHome
          ? 'bg-transparent'
          : 'bg-[#E7F3F4]'
    }
  `}
>
    <div className='   w-full px-5 md:px-3.5  md:container mx-auto'>
    <div className=" w-full    flex items-center justify-between relative  bg-white  rounded-full h-[55px]  md:h-[70px]  rounded border border-grayblue-alt  px-8 xl:px-12">

<div className=' flex  gap-2 items-center'>
    {isAccountPage && (
        <button
        onClick={() => setAccountPannel(true)}
         className="lg:hidden cursor-pointer">
          <div>
            <BarsSvg className="w-10 h-10" />
          </div>
        </button>
      )}
       <Link href="/">
          <NewGiftedFoundationlogoSvg className="w-[100px] h-[42px] xl:w-auto xl:h-[45px]" />
        </Link>

</div>

       

        {/* Logo */}
       

        {/* Desktop Menu */}
        <div className="hidden xl:block">   
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
        <div className="hidden xl:block">
          <div className="flex gap-2.5 h-full">
                  
 {!token ? (
  // No token: show login button
  <Link href="/auth/login">
    <button className="btn-animated bg-polar-mist group relative overflow-hidden">
      <span className="btn-animated-hover bg-gray-200 group-hover:w-40 group-hover:h-40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></span>
      <span className="btn-animated-text text-black group-hover:text-gray-900 relative z-10">
        Account
      </span>
    </button>
  </Link>
) : isLoading || !user ? (
  <div className='   w-fit      flex justify-center items-center'>
  <ClipLoader size={20} color="#000000" />
  </div>
) : (
  <Usermenu   
   fullname={fullname}
   email={email}
myrole={myrole}
profileImage={profileImage}
  />
)}

           
     

       {/* <Link href="/auth/login">
        <button className="btn-animated bg-polar-mist group cursor-pointer relative overflow-hidden">
          <span className="btn-animated-hover bg-gray-200 group-hover:w-40 group-hover:h-40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></span>

          <span className="btn-animated-text text-black group-hover:text-gray-900 relative z-10">
            Account
          </span>
        </button>
      </Link> */}



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

       
        <button className="xl:hidden  cursor-pointer">
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
