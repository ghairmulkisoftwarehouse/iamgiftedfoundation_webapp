
'use client'
import { useState,useRef } from "react";
import useToggle from "@/hooks/useToggle";
import useClickOutside from "@/utils/clickOutside";

import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/actions/authActions";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
 import { IoIosArrowDown } from "react-icons/io";
 import ButtonClipLoader   from '@/components/global/buttonClipLoader/ButtonClipLoader';
import fallbackImg from "@/assets/images/img2.jpg";

export default function Usermenu(
{ email, fullname, myrole, profileImage }
) {
    const router=useRouter();
  const menuRef = useRef();
  const [imgSrc, setImgSrc] = useState(profileImage);
  const [showMenu, toggleShowMenu] = useToggle();
  useClickOutside(menuRef, () => toggleShowMenu(false));

  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.auth);

 const handleLogout = async () => {
  try {
    await dispatch(logout(router));
  } catch (err) {
    console.error("Logout failed:", err);
     toast.error(err?.message || "Logout failed. Please try again.");
  }
};

  return (
    <div
      className="flex items-center gap-3 cursor-pointer relative"
      onClick={toggleShowMenu}
      ref={menuRef}
    >
    
      <div className=" hidden xl:block">
         <div className=" flex flex-row gap-1 text-sm font-semibold ">
      <h4 className=" ">Hi,</h4>
       <h4 className=" capitalize">{fullname}</h4>


      </div>
      </div>

     

      {/* Optional arrow */}
      <IoIosArrowDown className=" text-sm text-foreground/50" />

      {/* Dropdown */}
      <div
        className={`absolute right-0 top-14 w-[230px] rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.15)] bg-white z-50 transition-all duration-200 ease-in-out transform overflow-hidden ${
          showMenu
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="px-4 pt-4">
          <div className="flex items-center space-x-3 w-full cursor-pointer">
           <div className="w-[35px] h-[35px] lg:w-[40px] lg:h-[41px] rounded-full overflow-hidden   flex-shrink-0  ">
       <Image
        src={imgSrc}
        alt="Profile"
        className="h-full w-full object-cover"
        width={40}
        height={40}
        onError={() => setImgSrc(fallbackImg)}
      />
      </div>
           <div className="flex-1 min-w-0">
      <h3 className="text-sm font-semibold text-gray-900 break-words">
        {email}
      </h3>
      <p className="text-xs text-green-600 font-medium capitalize">
        {myrole}
      </p>
    </div>
          </div>
        </div>

     


 <div className="mt-2">

  <>
      <div>
        <Link
          href="/account/donation-history"
          className="block px-4 py-2 text-sm text-text hover:bg-gray-100"
        >
          My Profile
        </Link>
      </div>

      <div>
        <Link
          href="/account/editProfile"
          className="block px-4 py-2 text-sm text-text hover:bg-gray-100"
        >
        Edit Profile
        </Link>


      </div>

         <div>
      
      </div>
    </>
 
</div> 

        <button
                  onClick={handleLogout}
      disabled={loading} 

          className="px-4 py-2 text-sm text-[#FD5D69] hover:bg-gray-100 w-full text-left font-medium pb-2.5  cursor-pointer"
        >

 {loading ? (
      <div className=" flex  items-center gap-1">
        Logging Out <ButtonClipLoader size={10} color="#C12F38" />
      </div>
    ) : (
      "Logout"
    )}
         {/* {loading ? <PulseLoader size={10} color="#000066" /> : "Logout"}
           */}
        </button>
      </div>
    </div>
  );
}
